import type { Metadata } from 'next'
import { Geist, Geist_Mono, Bangers } from 'next/font/google'
import './globals.css'

// Karantina

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const fontBangers = Bangers({
  variable: '--font-bangers',
  subsets: ['latin'],
  weight: '400',
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title:
    'CodeCut Studio | Award-Winning Web Development & Video Editing Agency',
  description:
    'Transform your brand with cutting-edge web development, viral video content, and growth strategies. Top-rated design studio delivering exceptional results for ambitious brands.',
  keywords:
    'web development agency, video editing services, design studio, brand growth, Next.js development, viral content creation',
  openGraph: {
    title: 'CodeCut Studio | Award-Winning Design & Development Agency',
    description:
      'Transform your brand with cutting-edge web development, viral video content, and growth strategies.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CodeCut Studio | Award-Winning Design & Development Agency',
    description:
      'Transform your brand with cutting-edge web development, viral video content, and growth strategies.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.className} ${geistMono.variable} ${fontBangers.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
