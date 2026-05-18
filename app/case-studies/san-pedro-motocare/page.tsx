import { Metadata } from 'next'
import { ArrowLeft, CheckCircle, Wrench, Cloud, Smartphone, BarChart3, Clock, Users, Zap, Database, Calendar, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'San Pedro MotoCare — Legacy System Modernization | TOFAI Consulting',
  description: 'Complete digital transformation of a traditional motorcycle service business. From paper records and WhatsApp to a cloud-native AI-augmented platform with CRM, inventory, scheduling and billing automation.',
}

export default function SanPedroMotoCareCaseStudy() {
  const metrics = [
    { icon: <CheckCircle className="w-6 h-6" />, value: '100%', label: 'Processes Digitized' },
    { icon: <Clock className="w-6 h-6" />, value: '60%', label: 'Fewer No-Shows' },
    { icon: <Zap className="w-6 h-6" />, value: '3×', label: 'Faster Billing' },
    { icon: <Users className="w-6 h-6" />, value: '<5s', label: 'Customer History Access' },
  ]

  const beforeAfter = [
    {
      area: 'Customer Records',
      before: 'Paper notebooks, inconsistent handwriting, impossible to search. Customer history lost when notebooks fill up.',
      after: 'Firestore CRM: full motorcycle history, photos, service notes, contact data — searchable in under 2 seconds.',
    },
    {
      area: 'Appointment Scheduling',
      before: 'WhatsApp messages, verbal agreements, double-bookings, forgotten appointments, no reminders.',
      after: 'Google Calendar integration with automated WhatsApp Business reminders 24h and 1h before service.',
    },
    {
      area: 'Parts Inventory',
      before: 'Excel spreadsheet updated manually once a week. Frequent stock-outs discovered only when a customer needed a part.',
      after: 'Real-time Firestore inventory with low-stock alerts via email/WhatsApp. Purchase orders auto-drafted when minimum threshold hit.',
    },
    {
      area: 'Billing & Receipts',
      before: 'Carbon-copy paper invoices. No totals tracking, no tax record, lost copies.',
      after: 'PDF receipts generated in 1 click with QR code for digital verification. Monthly revenue reports auto-exported to BigQuery.',
    },
    {
      area: 'Customer Follow-Up',
      before: 'Zero systematic follow-up. Customers forgot annual maintenance dates. Revenue lost to competitors.',
      after: 'Automated follow-up sequences: post-service satisfaction, 6-month checkup reminder, annual maintenance alert.',
    },
    {
      area: 'Business Analytics',
      before: 'No data. Owner had zero visibility into which services generated most revenue, peak hours, or customer retention rates.',
      after: 'BigQuery dashboard: revenue by service type, technician performance, peak hours, customer LTV, repeat rate tracking.',
    },
  ]

  const techStack = [
    { name: 'Next.js 14', desc: 'Admin dashboard & customer-facing portal', color: 'text-primary-400 border-primary-500/20 bg-primary-500/10' },
    { name: 'Firebase Firestore', desc: 'Real-time CRM, inventory & appointment data', color: 'text-amber-400 border-amber-500/20 bg-amber-500/10' },
    { name: 'Cloud Run', desc: 'Serverless API for automation workflows', color: 'text-accent-cyan border-accent-cyan/20 bg-accent-cyan/10' },
    { name: 'BigQuery', desc: 'Business analytics & revenue reporting', color: 'text-accent-purple border-accent-purple/20 bg-accent-purple/10' },
    { name: 'WhatsApp Business API', desc: 'Automated reminders & customer notifications', color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10' },
    { name: 'Google Calendar API', desc: 'Appointment scheduling & technician calendar', color: 'text-blue-400 border-blue-500/20 bg-blue-500/10' },
    { name: 'Tailwind CSS', desc: 'Mobile-first responsive UI', color: 'text-pink-400 border-pink-500/20 bg-pink-500/10' },
    { name: 'AI Diagnosis Assistant', desc: 'Gemini-powered symptom-to-service suggestion', color: 'text-primary-400 border-primary-500/20 bg-primary-500/10' },
  ]

  const migrationPhases = [
    {
      phase: '01',
      title: 'Discovery & Audit',
      duration: '1 week',
      tasks: [
        'On-site process mapping — every manual touchpoint documented',
        'Pain point severity scoring with the owner and 2 technicians',
        'Data recovery: 3 years of paper records digitized and structured',
        'Tech debt assessment: existing WhatsApp history parsed for customer patterns',
      ],
    },
    {
      phase: '02',
      title: 'Core Platform Build',
      duration: '3 weeks',
      tasks: [
        'Firestore schema design for customers, motorcycles, services, parts, invoices',
        'Next.js admin dashboard: customer lookup, service intake form, technician assignment',
        'Mobile-first design: technicians use tablets in the workshop, not desktops',
        'PDF invoice generator with QR-code verification and company branding',
      ],
    },
    {
      phase: '03',
      title: 'Automation Layer',
      duration: '2 weeks',
      tasks: [
        'WhatsApp Business API integration: appointment confirmations & service-ready alerts',
        'Google Calendar sync: technician schedules, customer appointments, parts deliveries',
        'Cloud Run scheduled jobs: daily inventory check, weekly revenue digest email',
        'Automated follow-up sequences: 3-day post-service satisfaction, 6-month checkup nudge',
      ],
    },
    {
      phase: '04',
      title: 'Analytics & AI Layer',
      duration: '1 week',
      tasks: [
        'BigQuery pipeline: Firestore → BigQuery nightly export via Dataflow',
        'Revenue dashboard: by service type, technician, day of week, motorcycle brand',
        'AI Diagnosis Assistant: customer describes symptoms → Gemini suggests likely service',
        'Predictive inventory: BigQuery ML flags parts likely to stock-out based on seasonality',
      ],
    },
    {
      phase: '05',
      title: 'Training & Go-Live',
      duration: '1 week',
      tasks: [
        '2-hour training session with all staff — zero technical knowledge required',
        'Parallel run: 2 weeks operating both old and new systems simultaneously',
        'Hard cutover: paper system retired, full digital operation from day one',
        '30-day hypercare support with direct WhatsApp line to TOFAI engineering',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Navigation />

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-slate-400 hover:text-accent-cyan transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </Link>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-cyan/10 border border-accent-cyan/30 rounded-full text-accent-cyan text-sm mb-6">
            <Wrench className="w-4 h-4" />
            Legacy System Modernization
          </div>

          <h1 className="text-4xl sm:text-5xl font-display font-bold mb-4 leading-tight">
            San Pedro MotoCare
          </h1>
          <p className="text-xl text-slate-300 mb-4">
            From paper notebooks and WhatsApp chaos to a cloud-native, AI-augmented motorcycle service platform — zero downtime migration.
          </p>
          <div className="flex flex-wrap gap-3 mb-12 text-sm text-slate-400">
            <span>📍 San Pedro Garza García, NL, México</span>
            <span>·</span>
            <span>🏍️ Motorcycle Service & Repair</span>
            <span>·</span>
            <span>⏱️ 8-week delivery</span>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
            {metrics.map((m, i) => (
              <div key={i} className="p-4 bg-slate-800/50 border border-accent-cyan/20 rounded-xl text-center">
                <div className="text-accent-cyan mb-2 flex justify-center">{m.icon}</div>
                <div className="text-3xl font-bold text-white font-display">{m.value}</div>
                <div className="text-xs text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>

          {/* Problem */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">The Problem</h2>
            <div className="p-6 bg-red-500/5 border border-red-500/20 rounded-xl">
              <p className="text-slate-300 mb-4">
                San Pedro MotoCare is a well-established motorcycle repair shop with a loyal client base built over a decade. Despite strong technical expertise, the business was hemorrhaging revenue and customer satisfaction through operational inefficiency rooted in manual, disconnected workflows.
              </p>
              <p className="text-slate-300 mb-4">
                The owner managed everything from memory and paper: customer names, motorcycle specs, service histories, parts levels, pricing. When he wasn&apos;t in the shop, nothing could move. A single technician calling in sick could create a cascade of missed appointments, angry customers, and lost revenue — because nothing was documented in an accessible system.
              </p>
              <p className="text-slate-300">
                The most damaging invisible cost: zero customer retention system. Loyal clients who serviced annually weren&apos;t being reminded. No-shows happened weekly. Parts stock-outs were discovered only when a customer was already waiting.
              </p>
            </div>
          </div>

          {/* Before / After */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Before & After</h2>
            <div className="space-y-4">
              {beforeAfter.map((item, i) => (
                <div key={i} className="rounded-xl border border-slate-700/50 overflow-hidden">
                  <div className="px-5 py-3 bg-slate-800/60 border-b border-slate-700/50">
                    <span className="font-semibold text-white text-sm">{item.area}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-700/50">
                    <div className="p-5 bg-red-500/5">
                      <div className="text-xs text-red-400 font-bold uppercase tracking-wider mb-2">Before</div>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.before}</p>
                    </div>
                    <div className="p-5 bg-emerald-500/5">
                      <div className="text-xs text-emerald-400 font-bold uppercase tracking-wider mb-2">After</div>
                      <p className="text-slate-300 text-sm leading-relaxed">{item.after}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Migration Phases */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Migration Roadmap</h2>
            <div className="space-y-6">
              {migrationPhases.map((phase, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/30 flex items-center justify-center text-accent-cyan font-bold text-sm">
                    {phase.phase}
                  </div>
                  <div className="flex-1 pb-6 border-b border-slate-700/30 last:border-0">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-bold text-white">{phase.title}</h3>
                      <span className="text-xs text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 px-2 py-0.5 rounded-full">
                        {phase.duration}
                      </span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-slate-400">
                          <CheckCircle className="w-4 h-4 text-accent-cyan flex-shrink-0 mt-0.5" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Tech Stack</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {techStack.map((t, i) => (
                <div key={i} className={`flex items-start gap-3 p-4 rounded-xl border ${t.color}`}>
                  <div className={`font-bold text-sm ${t.color.split(' ')[0]}`}>{t.name}</div>
                  <div className="text-slate-400 text-sm">{t.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Insight */}
          <div className="p-8 bg-gradient-to-r from-accent-cyan/10 to-primary-500/10 border-2 border-accent-cyan/30 rounded-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Cloud className="w-8 h-8 text-accent-cyan" />
              <h3 className="text-xl font-bold text-white">The Invisible ROI: Data as a Business Asset</h3>
            </div>
            <p className="text-slate-300 mb-4">
              The most transformative outcome wasn&apos;t the efficiency gains — it was the data. Before migration, the owner had no answer to &quot;which service is most profitable?&quot; or &quot;when is my busiest week?&quot; After 90 days on the platform, BigQuery revealed:
            </p>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold flex-shrink-0">→</span>
                Full engine tune-ups were 4× more profitable per hour than tire changes — but were underpriced.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold flex-shrink-0">→</span>
                62% of no-shows happened on Fridays. A Friday appointment pricing adjustment reduced it to 18%.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-cyan font-bold flex-shrink-0">→</span>
                Honda CB500 owners had a 91% return rate. Yamaha MT owners had 34%. Different follow-up strategies deployed for each.
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-cyan text-slate-950 font-bold rounded-xl hover:bg-accent-cyan/90 transition-all"
            >
              Modernize Your Business
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800/50 border border-slate-700 rounded-xl text-slate-300 hover:border-accent-cyan/50 transition-all"
            >
              View All Case Studies
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
