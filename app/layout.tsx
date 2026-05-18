import { Metadata } from 'next'
import { Space_Grotesk, JetBrains_Mono, Lexend } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tofaiconsulting.com'),
  title: {
    default: 'TOFAI Consulting — Enterprise AI Systems & Safety',
    template: '%s | TOFAI Consulting'
  },
  description: 'TOFAI Consulting LLC delivers enterprise-grade AI: voice agents, multi-LLM systems, AI ethics & alignment research, red teaming, adversarial audits, legacy system modernization, and full-funnel marketing intelligence. Delaware LLC.',
  keywords: [
    'AI consulting', 'voice AI agents', 'multi-LLM systems', 'AI ethics', 'AI alignment',
    'red teaming', 'adversarial audits', 'legacy modernization', 'AI safety', 'TOF Research Engine',
    'VocalisAI', 'enterprise AI', 'Delaware LLC', 'TOFAI Consulting', 'Tikun Olam Framework',
    'BinahSigma', 'LLM pipeline', 'AI governance', 'responsible AI', 'full-funnel marketing'
  ],
  authors: [
    { name: 'José Cruz Diosdado Murillo', url: 'https://tofaiconsulting.com' },
    { name: 'Jesús Eduardo Rodríguez Saucedo', url: 'https://tofaiconsulting.com' }
  ],
  creator: 'TOFAI Consulting LLC',
  publisher: 'TOFAI Consulting LLC',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://tofaiconsulting.com',
    title: 'TOFAI Consulting — Enterprise AI Systems & Safety',
    description: 'Multi-agent AI systems, AI safety & alignment, red teaming, voice automation, legacy modernization. Production-grade. Delaware LLC.',
    siteName: 'TOFAI Consulting',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'TOFAI Consulting — Enterprise AI Systems',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TOFAI Consulting — Enterprise AI Systems & Safety',
    description: 'Multi-agent AI, AI ethics & alignment, red teaming, voice automation. Delaware LLC.',
    images: ['/og-image.png'],
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
  alternates: {
    canonical: 'https://tofaiconsulting.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://tofaiconsulting.com/#organization',
      name: 'TOFAI Consulting LLC',
      url: 'https://tofaiconsulting.com',
      logo: 'https://tofaiconsulting.com/logo.png',
      description: 'TOFAI Consulting LLC is a Delaware-registered AI consulting firm specializing in enterprise AI systems, AI safety & alignment research, red teaming, adversarial audits, voice AI agents, and legacy system modernization.',
      foundingDate: '2024',
      legalName: 'TOFAI Consulting LLC',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
        addressRegion: 'DE',
      },
      founders: [
        {
          '@type': 'Person',
          name: 'José Cruz Diosdado Murillo',
          jobTitle: 'CEO',
        },
        {
          '@type': 'Person',
          name: 'Jesús Eduardo Rodríguez Saucedo',
          jobTitle: 'CTO',
        }
      ],
      sameAs: [
        'https://vocalisia.web.app',
      ],
      knowsAbout: [
        'Artificial Intelligence',
        'AI Safety',
        'AI Ethics',
        'AI Alignment',
        'Red Teaming',
        'Voice AI Agents',
        'Multi-LLM Systems',
        'Legacy System Modernization',
        'Enterprise AI Consulting',
        'AI Governance',
        'Large Language Models',
        'Tikun Olam Framework',
        'BinahSigma',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'TOFAI Consulting Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'TOF Research Engine — AI Ethics & Safety Framework',
              description: 'Proprietary multi-LLM ethical reasoning architecture with 10-Sefirot pipeline and BinahSigma civilizational bias detection. Evaluates AI decisions across political, moral, and cultural dimensions simultaneously.',
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'VocalisAI Platform — Core AI Product',
              description: 'Enterprise voice AI platform with multi-agent orchestration. Akiva meta-agent supervising 6 specialized agents with TOF ethical layer on every call. Handles 12,000+ calls per month.',
              url: 'https://vocalisia.web.app',
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Red Teaming & Adversarial Audits',
              description: 'Systematic adversarial testing of LLM systems: prompt injection, jailbreak vectors, political bias failures, safety bypass reproduction, and hallucination mapping with CVE-grade findings.',
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Legacy System Modernization',
              description: 'Migration of outdated monolithic systems to AI-augmented, cloud-native architectures. Full audit, redesign, and phased migration with minimal disruption.',
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Full-Funnel Marketing Intelligence',
              description: 'AI-driven campaign management across Google, Meta, TikTok, and LinkedIn with intelligent audience segmentation and performance-aligned compensation.',
            }
          },
        ]
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://tofaiconsulting.com/#website',
      url: 'https://tofaiconsulting.com',
      name: 'TOFAI Consulting',
      description: 'Enterprise AI Systems, Safety & Alignment — Delaware LLC',
      publisher: { '@id': 'https://tofaiconsulting.com/#organization' },
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${lexend.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo.png" />
        <link rel="canonical" href="https://tofaiconsulting.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body antialiased bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
        {children}
      </body>
    </html>
  )
}
