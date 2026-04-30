const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/dummyData.ts');
let content = fs.readFileSync(filePath, 'utf8');

// // 1. Rename walkingHours to duration globally
// content = content.replace(/walkingHours:/g, 'duration:');

// // 2. Rename altitude to distance in itinerary items
// content = content.replace(/altitude: ('[^']+m')/g, 'distance: $1');

// 3. Remove monthlyAvailability section using a balanced bracket approach
function removeProperty(key, text) {
    const searchStr = key + ': [';
    let startIndex = text.indexOf(searchStr);

    while (startIndex !== -1) {
        let bracketCount = 1;
        let currentIndex = startIndex + searchStr.length;

        while (bracketCount > 0 && currentIndex < text.length) {
            if (text[currentIndex] === '[') bracketCount++;
            else if (text[currentIndex] === ']') bracketCount--;
            currentIndex++;
        }

        // Include potential trailing comma and newline
        let endIndex = currentIndex;
        const potentialComma = text.substring(endIndex, endIndex + 5);
        if (potentialComma.includes(',')) {
            endIndex = text.indexOf(',', endIndex) + 1;
        }

        const partToRemove = text.substring(startIndex, endIndex);
        text = text.substring(0, startIndex) + text.substring(endIndex);

        startIndex = text.indexOf(searchStr);
    }
    return text;
}

content = removeProperty('monthlyAvailability', content);

// Final cleanup of trailing commas in objects
content = content.replace(/,\s*\n\s+}/g, '\n      }');

fs.writeFileSync(filePath, content);
console.log('Data migration complete. Balanced removal of monthlyAvailability applied.');
