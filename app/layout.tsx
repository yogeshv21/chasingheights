import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { StoreProvider } from '@/store/StoreProvider'
import { ThemeProvider } from '@/components/theme-provider'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://chasingheights.com'),
  title: {
    template: '%s | Chasingheights',
    default: 'Chasingheights - Your Adventure Awaits',
  },
  description:
    'Discover breathtaking treks around the world with expert guides, premium safety, and unforgettable experiences. Book your next adventure today.',
  keywords: [
    'trekking',
    'hiking',
    'adventure travel',
    'mountain tours',
    'everest base camp',
    'himalayas',
    'guided treks',
    'adventure booking',
  ],
  authors: [{ name: 'Chasingheights Team' }],
  creator: 'Chasingheights',
  publisher: 'Chasingheights',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chasingheights.com',
    siteName: 'Chasingheights',
    title: 'Chasingheights - Your Adventure Awaits',
    description:
      'Discover breathtaking treks around the world with expert guides and premium safety.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Chasingheights - Adventure Travel',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chasingheights - Your Adventure Awaits',
    description:
      'Discover breathtaking treks around the world with expert guides and premium safety.',
    images: ['/og-image.jpg'],
    creator: '@chasingheights',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <StoreProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <WhatsAppButton />
          </ThemeProvider>
        </StoreProvider>
      </body>
    </html>
  )
}
