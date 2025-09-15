'use client'

import { motion } from 'motion/react'
import { Code2, Rocket, Scissors, Layers } from 'lucide-react'
const services = [
  {
    title: 'Web Development',
    description:
      'Next-gen websites built with precision — fast, responsive, and designed to impress while scaling with your vision.',
    icon: <Code2 className="w-6 h-6 text-gold-300" />,
  },
  {
    title: 'MVP Development',
    description:
      'From zero to launch — we turn raw ideas into market-ready MVPs in weeks, not months. Speed meets execution.',
    icon: <Rocket className="w-6 h-6 text-gold-300" />,
  },
  {
    title: 'Video Editing',
    description:
      'Scroll-stopping edits with perfect pacing, subtitles, and effects — built to maximize retention and go viral.',
    icon: <Scissors className="w-6 h-6 text-gold-300" />,
  },
  {
    title: 'Content Farming',
    description:
      'Clip, repurpose, and flood the feed — 100+ shorts and micro-edits engineered to keep your brand everywhere, all the time.',
    icon: <Layers className="w-6 h-6 text-gold-300" />,
  },
]

export function AboutSection() {
  return (
    <section className="relative w-full bg-black text-[#e6e1d7] py-24 px-8 md:px-16">
      <div className="mx-auto max-w-6xl text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
        >
          About Us
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
          whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8, delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
          className="mt-6 text-lg max-w-2xl mx-auto text-[#c8b4a0]"
        >
          We are a squad of PRO BROs who excel in their fields. Together, we
          build, code, and cut content that makes your brand impossible to
          ignore.
        </motion.p>

        {/* Services Grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                type: 'spring',
              }}
              viewport={{ once: true }}
              className=" border border-[#2a2e26] bg-[#1a1d18]/50 p-6 hover:border-gold-400 hover:shadow-lg transition"
            >
              <div className="flex justify-center items-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gold-300">
                {service.title}
              </h3>
              <p className="text-sm text-[#c8b4a0]">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          viewport={{ once: true }}
          className="mt-12 text-sm italic text-[#8a7060]"
        >
          We don’t provide legacy marketing services. But if you need that, we
          can connect you with people who’ll do it right.
        </motion.p>
      </div>
    </section>
  )
}
