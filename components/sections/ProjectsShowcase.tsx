'use client'

import { motion } from 'framer-motion'
import { Rocket, ArrowRight, ExternalLink, Star } from 'lucide-react'
import Link from 'next/link'
import StorySection from './StorySection'

type ColorKey = 'emerald' | 'cyan' | 'purple'

interface Project {
  id: string
  title: string
  company: string
  metric: string
  metricLabel: string
  impact: string
  color: ColorKey
  tags: string[]
  description: string
  featured?: boolean
  externalUrl?: string
}

const projects: Project[] = [
  {
    id: 'tikun-olam',
    title: 'TOF Research Engine — AI Ethics & Safety Framework',
    company: 'Finalist — Google Cloud x Datadog Hackathon',
    metric: '73%',
    metricLabel: 'Bias Delta Detected',
    impact: '10-Sefirot pipeline with 5 AI providers. NO_GO on Anthropic × Pentagon $2.4B contract. 16 public benchmark scenarios.',
    color: 'emerald',
    tags: ['Python', 'Vertex AI', 'Datadog', 'BinahSigma', 'GPT-4o', 'Grok', 'Mistral', 'Gemini'],
    description: 'Proprietary multi-LLM ethical reasoning architecture with 10-Sefirot pipeline. BinahSigma detects civilizational bias across 5 AI providers simultaneously. ERI (Ethical Risk Index) on every decision. 16 public benchmark scenarios validated.',
    featured: true,
  },
  {
    id: 'vocalisai',
    title: 'VocalisAI Platform — Core AI Product',
    company: 'Google Gemini Live Hackathon Finalist',
    metric: '12K+',
    metricLabel: 'Calls Processed',
    impact: 'Akiva meta-agent orchestrating 6 specialists with TOF ethical layer on every call. Google Gemini Live API.',
    color: 'purple',
    tags: ['Gemini Live API', 'ElevenLabs', 'Twilio', 'Stripe', 'TOF Ethical Layer', 'FastAPI'],
    description: 'Enterprise voice AI platform. Akiva meta-agent supervises Alex, Nova, Diana, Marco, Sara & Raul. Every interaction evaluated through 5 Sefirotic ethical dimensions in real time. Multi-industry: healthcare, legal, logistics, e-commerce.',
    featured: true,
    externalUrl: 'https://vocalisia.web.app',
  },
  {
    id: 'san-pedro-motocare',
    title: 'San Pedro MotoCare — Legacy System Modernization',
    company: 'Legacy System Modernization',
    metric: '100%',
    metricLabel: 'Process Digitized',
    impact: 'Full migration from manual workflows to AI-augmented cloud-native motorcycle service management platform.',
    color: 'cyan',
    tags: ['Next.js', 'Firebase', 'Cloud Run', 'Tailwind', 'AI Automation'],
    description: 'Complete digitization of a traditional motorcycle care business. CRM, appointment scheduling, inventory management, billing automation and customer follow-up — all AI-augmented and cloud-native.',
    featured: false,
  },
  {
    id: 'tof-dataset',
    title: 'TOFAI Benchmark Dataset — 16 Public Scenarios',
    company: 'AI Safety Research',
    metric: '36',
    metricLabel: 'Validated Runs',
    impact: 'Cross-Cultural Convergence Theorem (CCCT) validated with n=4. First arXiv-ready AI ethics benchmark dataset.',
    color: 'emerald',
    tags: ['Python', 'AI Safety', 'Benchmarking', 'CCCT', 'BinahSigma', 'Research'],
    description: 'Public corpus of 16 AI safety scenarios with 36 validated pipeline runs. Documents the Cross-Cultural Convergence Theorem across deception-adjacent scenarios. Includes first GO verdict in corpus (OMS Pandemia x-14) and CBD = -95 extreme case (Zerkalo).',
    featured: true,
  },
  {
    id: 'tofai-evals',
    title: 'TOFAI Evals — Adversarial LLM Testing Suite',
    company: 'Red Teaming & Adversarial Audits',
    metric: 'CVE',
    metricLabel: 'Grade Findings',
    impact: 'Systematic adversarial testing suite for frontier LLMs with responsible disclosure protocol.',
    color: 'purple',
    tags: ['Red Teaming', 'Prompt Injection', 'Jailbreak Testing', 'Safety Bypass', 'Benchmark Suite'],
    description: 'Production-grade adversarial evaluation framework. Tests frontier LLMs across: prompt injection, jailbreak vectors, political bias failures, safety bypass reproduction, and hallucination mapping — with CVE-grade findings and remediation roadmaps.',
    featured: false,
  },
  {
    id: 'hoymismo-gps',
    title: 'HoyMismoGPS V2 — Enterprise Fleet Management',
    company: 'Enterprise Logistics',
    metric: '500+',
    metricLabel: 'Assets Monitored',
    impact: 'Google Cloud architecture: Cloud Run, BigQuery, Firestore, Pub/Sub for enterprise fleet',
    color: 'cyan',
    tags: ['Cloud Run', 'BigQuery', 'Firestore', 'Pub/Sub', 'Python Asyncio'],
    description: 'V2: Full Google Cloud architecture. Cloud Run for APIs, BigQuery for analytics, Firestore for real-time state, Pub/Sub for event streaming. Enterprise fleet management at scale.',
  },
  {
    id: 'binah-sigma',
    title: 'Binah-Σ — Cognitive Decision Engine',
    company: 'Enterprise API',
    metric: '0.92',
    metricLabel: 'Binah-Σ Index',
    impact: 'Auditable AI infrastructure for structured decision evaluation across governance, ESG, and policy.',
    color: 'emerald',
    tags: ['FastAPI', 'Pydantic', 'OpenAI SDK', 'Docker', 'Railway'],
    description: 'Cognitive evaluation engine producing structured, auditable outputs for enterprise governance, ESG compliance, and policy analysis. Core component of the TOF Research Engine.',
    featured: true,
  },
  {
    id: 'signaflow',
    title: 'SignaFlow — Legal Tech SaaS',
    company: 'SaaS Platform',
    metric: 'SHA-256',
    metricLabel: 'Audit Trail',
    impact: 'Digital signature platform with legal validity powered by AI contract generation.',
    color: 'purple',
    tags: ['React 19', 'Gemini Pro', 'Firebase Auth', 'Canvas API'],
    description: 'Uses AI (Gemini) for contract drafting and Canvas API for biometric signatures with cryptographic audit seals. Full legal validity.',
  },
]

const colorStyles: Record<ColorKey, { border: string; text: string; bg: string }> = {
  emerald: {
    border: 'border-primary-500/20 hover:border-primary-500/50',
    text: 'text-primary-400',
    bg: 'bg-primary-500/10',
  },
  cyan: {
    border: 'border-accent-cyan/20 hover:border-accent-cyan/50',
    text: 'text-accent-cyan',
    bg: 'bg-accent-cyan/10',
  },
  purple: {
    border: 'border-accent-purple/20 hover:border-accent-purple/50',
    text: 'text-accent-purple',
    bg: 'bg-accent-purple/10',
  }
}

export default function ProjectsShowcase() {
  return (
    <StorySection
      id="projects"
      chapter={4}
      icon={<Rocket className="w-8 h-8" />}
      color="purple"
      title="Real work. "
      highlight="Real results."
    >
      <p className="text-xl text-slate-300 leading-relaxed mb-12">
        From frontier AI safety research to production voice platforms —
        every project we ship is{' '}
        <span className="text-accent-purple font-semibold">auditable, ethical, and measurable</span>.
      </p>

      <div className="space-y-6">
        {projects.map((project, i) => {
          const styles = colorStyles[project.color]

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`group p-6 bg-slate-800/50 border ${styles.border} rounded-xl backdrop-blur-sm transition-all ${project.featured ? 'ring-2 ring-primary-500/30' : ''}`}
            >
              {project.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
                  <span className="text-xs text-primary-400 font-semibold uppercase tracking-wider">Featured Project</span>
                </div>
              )}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-white mb-1 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <div className={`${styles.text} text-sm mb-3`}>
                    {project.company}
                  </div>
                  <p className="text-slate-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1 ${styles.bg} ${styles.text} text-xs rounded-full border ${styles.border}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="text-center md:text-right min-w-[140px]">
                  <div className={`text-3xl md:text-4xl font-bold ${styles.text} font-display`}>
                    {project.metric}
                  </div>
                  <div className="text-slate-400 text-sm mt-1">
                    {project.metricLabel}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
                <div className="text-slate-400 text-sm">
                  {project.impact}
                </div>
                <div className="flex gap-3">
                  {project.externalUrl && (
                    <a
                      href={project.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2 ${styles.bg} ${styles.text} border ${styles.border} rounded-lg font-semibold hover:scale-105 transition-all text-sm`}
                    >
                      Live Demo
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                  <Link
                    href={`/case-studies/${project.id}`}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 ${styles.bg} ${styles.text} border-2 ${styles.border} rounded-lg font-semibold hover:scale-105 transition-all shadow-lg`}
                  >
                    Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        viewport={{ once: true }}
        className="mt-12 text-center"
      >
        <Link
          href="/case-studies"
          className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 border border-primary-500/30 rounded-lg hover:border-primary-500/50 hover:bg-slate-800/70 transition-all group"
        >
          View all case studies
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </motion.div>
    </StorySection>
  )
}
