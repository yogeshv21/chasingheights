import { Suspense } from 'react'
import { Metadata } from 'next'
import { TrekListingsClient } from './TrekListingsClient'

export const metadata: Metadata = {
    title: 'Browse Treks',
    description: 'Explore our collection of guided treks and adventures around the world.',
    openGraph: {
        title: 'Browse Treks - Chasingheights',
        description: 'Explore our collection of guided treks and adventures.',
    },
}

export default function TreksPage() {
    return (
        <Suspense fallback={
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-600" />
            </div>
        }>
            < TrekListingsClient />
        </Suspense>
    )
}
