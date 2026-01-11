import { Metadata } from 'next'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { LandingPageClient } from '@/components/landing/LandingPageClient'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Discover breathtaking treks around the world with expert guides and premium safety',
}

export default function HomePage() {
  return (
    <>
      <Header />
      <LandingPageClient />
      <Footer />
    </>
  )
}
