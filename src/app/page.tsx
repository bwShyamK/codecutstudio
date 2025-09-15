import Hero from '@/components/mvpblocks/minimal-hero'
import { AboutSection } from '@/components/sections/about'
import Contact from '@/components/sections/contact'
import { Navigation } from '@/components/sections/navigation'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Metadata } from 'next'

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

export default function HomePage() {
  return (
    <>
      <Navigation />
      <ScrollArea className="overflow-hidden h-svh">
        <Hero />
        <AboutSection />
        <Contact />
      </ScrollArea>
    </>
  )
}
