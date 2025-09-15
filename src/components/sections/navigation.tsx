'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        !isScrolled
          ? ' backdrop-blur-3xl  border-b border-gold-800/50'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl  mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <motion.img
              src={'/logo.svg'}
              height={64}
              width={64}
              initial={{
                rotate: 360,
                scale: [0, 20, 10, 1],
                y: [100, 300, 600, 600],
                x: [600, 300, 300, 300],
              }}
              animate={{
                rotate: 0,
                scale: 1,
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 1,
                type: 'spring',
                damping: 10,
                stiffness: 100,
              }}
              className="cursor-pointer animate "
              alt="Code Cut Studio"
            />
            <div className="font-bold uppercase  ">
              <motion.p
                initial={{ y: -100, opacity: 0, x: -100 }}
                animate={{ y: 0, opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.4,
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                }}
              >
                Code Cut
              </motion.p>
              <motion.p
                initial={{ y: 20, opacity: 0, x: 10, scale: 0 }}
                animate={{ y: 0, opacity: 1, x: 0, scale: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8,
                  type: 'spring',
                  damping: 10,
                  stiffness: 100,
                }}
                className="-mt-1.5"
              >
                Studio
              </motion.p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-slate-300 hover:text-white transition-colors duration-300 font-medium relative group"
                initial={{ opacity: 0, y: -20, x: -200 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{
                  delay: 1 + index * 0.1 + 0.3,
                  duration: 0.6,
                  damping: 10,
                  stiffness: 100,
                  type: 'spring',
                }}
                whileHover={{
                  skewX: 0.5,
                }}
              >
                {item.name}
                <motion.div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-gold-300 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block relative p-1">
            <motion.button
              initial={{ y: -300, x: 40 }}
              animate={{
                y: 0,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                delay: 0.5,
                type: 'spring',
                damping: 10,
                stiffness: 100,
              }}
              className="bg-transparent group cursor-pointer  font-bold    text-sm p-2 hover:bg-gold-300/10  rounded-none text-gold-200 border border-gold-200"
            >
              <div className="absolute group-hover:rotate-180 size-2 border-l -top-[3px]  -right-[3px] border-b border-gold-200 " />
              <div className="absolute group-hover:rotate-180 size-2 border-t border-r border-gold-200 -left-[3px] -bottom-[3px]" />
              <div className="absolute group-hover:rotate-180 size-2  -left-[3px] -top-[3px] border-b border-r border-gold-200 " />
              <div className="absolute group-hover:rotate-180 size-2 border-gold-200 border-l border-t -right-[3px] -bottom-[3px]" />
              <span className="relative z-20 hover:text-gold-50">
                Work With Us
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96' : 'max-h-0'
          }`}
          initial={false}
          animate={{
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut', delay: 0.5 }}
        >
          <div className="py-4 space-y-4 border-t border-slate-800/50">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-slate-300 hover:text-white transition-colors duration-300 font-medium py-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : -20,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.div
              className="pt-4 relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: 0.4, duration: 0.3 }}
            >
              <Link
                href={'#contact'}
                className="absolute inset-0 z-10 left-0 top-0 w-full h-full"
              />
              <Button
                className="w-full bg-gradient-to-r from-lime-600 to-lime-600 hover:from-lime-500 hover:to-lime-500 text-white rounded-full font-semibold"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Work With Us
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
