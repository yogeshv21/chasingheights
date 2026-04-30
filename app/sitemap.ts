import { MetadataRoute } from 'next'
import { DUMMY_TREKS } from '@/data/dummyData'

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

    return [...staticPages, ...trekPages]
}
