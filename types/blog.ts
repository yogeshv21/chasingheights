export interface BlogPost {
    id: string
    title: string
    slug: string
    excerpt: string
    content: string
    image: string
    author: string
    published_date: string
    category: string
    tags: string[]
    reading_time: number
}
