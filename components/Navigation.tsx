'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-lg border-b border-primary-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="TOFAI Consulting"
            width={40}
            height={40}
            className="object-contain"
          />
          <span className="text-xl font-display font-bold text-white hidden sm:block">
            TOFAI <span className="text-primary-400">Consulting</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primary-400 transition-colors relative group text-slate-300"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
          <a
            href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-semibold text-sm transition-all"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-primary-500/20"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-primary-400 transition-colors py-2"
              >
                {item.name}
              </Link>
            ))}
            <a
              href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary-500 text-white rounded-lg font-semibold text-center"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
