'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Github, Mail, ExternalLink, MessageCircle, Shield } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    services: [
      { name: 'TOF Research Engine', href: '#services' },
      { name: 'VocalisAI Platform', href: 'https://vocalisia.web.app', external: true },
      { name: 'Red Teaming & Audits', href: '#services' },
      { name: 'Legacy Modernization', href: '#services' },
      { name: 'Marketing Intelligence', href: '#services' },
    ],
    work: [
      { name: 'Case Studies', href: '#projects' },
      { name: 'Tikun Olam Framework', href: '/case-studies/tikun-olam' },
      { name: 'VocalisAI Case Study', href: '/case-studies/vocalisai' },
      { name: 'Blog', href: '/blog' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
    social: [
      { name: 'LinkedIn', href: 'https://www.linkedin.com/in/eduardo-rodríguez-b364b720b', icon: <Linkedin className="w-5 h-5" /> },
      { name: 'GitHub', href: 'https://github.com/zoharmx', icon: <Github className="w-5 h-5" /> },
      { name: 'Email', href: 'mailto:hoymismofletes@gmail.com', icon: <Mail className="w-5 h-5" /> },
      { name: 'WhatsApp', href: 'https://wa.me/528114202112', icon: <MessageCircle className="w-5 h-5" /> },
    ],
  }

  return (
    <footer className="border-t border-primary-500/20 bg-slate-950/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="TOFAI Consulting"
                width={36}
                height={36}
                className="object-contain"
              />
              <span className="text-xl font-display font-bold text-white">
                TOFAI <span className="text-primary-400">Consulting</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-2">
              Enterprise AI Systems, Safety & Alignment
            </p>
            <p className="text-slate-500 text-xs mb-6">
              TOFAI Consulting LLC — Delaware, USA
            </p>
            <div className="flex gap-3">
              {footerLinks.social.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-slate-800/50 border border-primary-500/20 rounded-lg hover:border-primary-500/50 hover:bg-slate-800/70 transition-all group"
                  aria-label={link.name}
                >
                  <span className="text-slate-400 group-hover:text-primary-400 transition-colors">
                    {link.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  {'external' in link && link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center gap-1"
                    >
                      {link.name}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div>
            <h3 className="font-semibold text-white mb-4">Our Work</h3>
            <ul className="space-y-3">
              {footerLinks.work.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-primary-400 transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Get in Touch</h3>
            <p className="text-slate-400 text-sm mb-3">
              Ready to deploy enterprise AI?
            </p>
            <a
              href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-400 hover:gap-3 transition-all text-sm font-medium mb-4"
            >
              Schedule a Strategy Call
              <ExternalLink className="w-4 h-4" />
            </a>
            <div className="mt-3">
              <a
                href="mailto:hoymismofletes@gmail.com"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                <Mail className="w-4 h-4" />
                hoymismofletes@gmail.com
              </a>
            </div>
            <div className="mt-3">
              <a
                href="https://wa.me/528114202112"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-primary-400 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp +52 811 420 2112
              </a>
            </div>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="py-6 border-t border-slate-800 border-b border-slate-800 mb-6">
          <div className="flex flex-wrap gap-6 justify-center items-center">
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Shield className="w-4 h-4 text-primary-400" />
              Delaware LLC — USA
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Shield className="w-4 h-4 text-primary-400" />
              TOF Research Engine — Proprietary
            </div>
            <div className="flex items-center gap-2 text-slate-500 text-xs">
              <Shield className="w-4 h-4 text-primary-400" />
              AI Safety & Responsible Disclosure
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm text-center md:text-left">
            © {currentYear} TOFAI Consulting LLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400">
            {footerLinks.legal.map((link) => (
              <Link key={link.name} href={link.href} className="hover:text-primary-400 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-slate-800">
          <p className="text-center text-slate-500 text-xs">
            Built with{' '}
            <span className="text-primary-400">React + Next.js + Tailwind + Framer Motion</span>
            {' • '}
            Deployed on <span className="text-primary-400">Vercel</span>
            {' • '}
            <span className="text-primary-400">tofaiconsulting.com</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
