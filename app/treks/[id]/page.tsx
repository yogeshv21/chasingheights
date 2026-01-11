import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getTrekById } from '@/data/dummyData'
import { TrekDetailClient } from './TrekDetailClient'

interface Props {
    params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params
    const trek = getTrekById(id)

    if (!trek) {
        return { title: 'Trek Not Found' }
    }

    return {
        title: trek.title,
        description: trek.description,
        openGraph: {
            title: `${trek.title} - Chasingheights`,
            description: trek.description,
            images: [trek.image],
        },
    }
}

export default async function TrekDetailPage({ params }: Props) {
    const { id } = await params
    const trek = getTrekById(id)

    if (!trek) {
        notFound()
    }

    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'TouristTrip',
        name: trek.title,
        description: trek.description,
        image: trek.image,
        touristType: 'Adventure Seeker',
        offers: {
            '@type': 'Offer',
            price: trek.cost,
            priceCurrency: 'INR',
            availability: 'https://schema.org/InStock',
        },
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <TrekDetailClient trek={trek} />
        </>
    )
}
