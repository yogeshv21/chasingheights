const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

// Configuration
const DATA_FILE = path.join(__dirname, '../data/dummyData.ts');

async function scrapeImages() {
  console.log('Reading data file...');
  let content = fs.readFileSync(DATA_FILE, 'utf8');

  const trekRegex = /id: '([^']+)',\s+title: '([^']+)'/g;
  let match;
  const items = [];

  while ((match = trekRegex.exec(content)) !== null) {
    items.push({ id: match[1], title: match[2] });
  }

  console.log(`Found ${items.length} items to update. Launching browser...`);
  
  const browser = await puppeteer.launch({ 
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1600, height: 1200 });
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36');

  for (const item of items) {
    try {
      console.log(`Scraping images for: ${item.title}...`);
      const searchQuery = encodeURIComponent(item.title);
      const url = `https://unsplash.com/s/photos/${searchQuery}`;
      
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });

      // Wait for the grid to appear
      try {
        await page.waitForSelector('img', { timeout: 5000 });
      } catch (e) {}

      // Scroll a bit to trigger lazy loading of more images
      await page.evaluate(() => window.scrollBy(0, 1000));
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Extract photo IDs specifically from the search results grid
      const ids = await page.evaluate(() => {
        // Find all images that look like photos (not profile pics)
        // Usually, photos have an alt text and are large
        const imgs = Array.from(document.querySelectorAll('img'));
        return imgs
          .filter(img => {
            // Filter out small images (likely profile pics or icons)
            const rect = img.getBoundingClientRect();
            return rect.width > 200 && rect.height > 200;
          })
          .map(img => {
            const src = img.src || '';
            // Match the photo ID part of the URL
            // Example: https://images.unsplash.com/photo-1578662996442-48f60103fc96?...
            const match = src.match(/photo-([a-zA-Z0-9_-]{10,})/);
            return match ? match[1] : null;
          })
          .filter(id => id);
      });

      if (ids.length > 0) {
        const uniqueIds = [...new Set(ids)];
        console.log(`  Found ${uniqueIds.length} unique large images.`);
        
        // Use high-quality IDs
        const mainImageId = uniqueIds[0];
        const galleryIds = uniqueIds.slice(1, 9); // Take more to be safe

        const mainImageUrl = `https://images.unsplash.com/photo-${mainImageId}?auto=format&fit=crop&w=1200&q=80`;
        const galleryUrls = galleryIds.map(id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=800&q=60`);

        // Update main image
        const itemBlockRegex = new RegExp(`(id: '${item.id}',[\\s\\S]+?image: ')[^']+(')`, 'g');
        content = content.replace(itemBlockRegex, `$1${mainImageUrl}$2`);

        // Update gallery photos
        const galleryRegex = new RegExp(`(id: '${item.id}',[\\s\\S]+?photos: \\[)([\\s\\S]+?)(\\])`, 'g');
        if (galleryRegex.test(content)) {
            const galleryContent = galleryUrls.map(url => `\n        '${url}'`).join(',') + '\n      ';
            content = content.replace(galleryRegex, `$1${galleryContent}$3`);
        }
      } else {
        console.warn(`  No valid images found for ${item.title}`);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1500));
    } catch (error) {
      console.error(`  Error scraping ${item.title}:`, error.message);
    }
  }

  console.log('Writing updated data back to file...');
  fs.writeFileSync(DATA_FILE, content);
  
  await browser.close();
  console.log('Done!');
}

scrapeImages().catch(err => {
    console.error('Fatal error:', err);
    process.exit(1);
});
