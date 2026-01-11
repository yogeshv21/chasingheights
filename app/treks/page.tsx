import { Metadata } from 'next'
import { TrekListingsClient } from './TrekListingsClient'
import { DUMMY_TREKS } from '@/data/dummyData'

export const metadata: Metadata = {
    title: 'Browse Treks',
    description: 'Explore our collection of guided treks and adventures around the world.',
    openGraph: {
        title: 'Browse Treks - Chasingheights',
        description: 'Explore our collection of guided treks and adventures.',
    },
}

export default function TreksPage() {
    return <TrekListingsClient />
}
