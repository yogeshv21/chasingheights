import { MetadataRoute } from 'next'
import { DUMMY_TREKS, DUMMY_BLOGS } from '@/data/dummyData'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://chasingheights.com'

    const staticPages = ['', '/treks', '/about', '/contact', '/blog'].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }))

    const trekPages = DUMMY_TREKS.map((trek) => ({
        url: `${baseUrl}/treks/${trek.id}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }))

    const blogPages = DUMMY_BLOGS.map((blog) => ({
        url: `${baseUrl}/blog/${blog.slug}`,
        lastModified: new Date(blog.published_date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...staticPages, ...trekPages, ...blogPages]
}
