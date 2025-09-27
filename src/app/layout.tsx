import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: {
    default: 'AquaPure - Premium Water Bottles | Pure Water, Pure Life',
    template: '%s | AquaPure'
  },
  description: 'Experience the ultimate in hydration with our premium spring water, sourced from pristine natural springs. Discover our range of eco-friendly water bottles, alkaline water, and sustainable packaging solutions.',
  keywords: [
    'premium water bottles',
    'spring water', 
    'alkaline water',
    'eco-friendly packaging',
    'sustainable water',
    'hydration solutions',
    'natural mineral water',
    'BPA-free bottles',
    'recyclable packaging',
    'pure spring water'
  ],
  authors: [{ name: 'AquaPure Team', url: 'https://aquapure.com' }],
  creator: 'AquaPure',
  publisher: 'AquaPure',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'AquaPure - Premium Water Bottles',
    description: 'Pure Water, Pure Life - Premium spring water delivered fresh to your door',
    type: 'website',
    locale: 'en_US',
    url: 'https://aquapure.com',
    siteName: 'AquaPure',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AquaPure Premium Water Bottles'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AquaPure - Premium Water Bottles',
    description: 'Pure Water, Pure Life - Premium spring water delivered fresh',
    creator: '@aquapure',
    images: ['/images/twitter-image.jpg']
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
  verification: {
    google: 'your-google-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${poppins.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#2563eb" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}