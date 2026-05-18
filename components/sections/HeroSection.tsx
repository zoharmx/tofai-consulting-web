'use client'

import { motion } from 'framer-motion'
import { Calendar, Play, Shield, Zap } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    { number: 12000, suffix: '+', label: 'Calls Processed' },
    { number: 16, suffix: '', label: 'Safety Benchmarks' },
    { number: 5, suffix: '', label: 'LLMs Benchmarked' },
    { number: 7, suffix: 'yr', label: 'AI R&D Experience' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Particles — reduced count for mobile performance */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full"
            initial={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Gradient Blurs */}
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[150px] opacity-20 animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-cyan rounded-full blur-[150px] opacity-20 animate-pulse animation-delay-400" />

      <div className="relative z-10 text-center px-4 sm:px-6 w-full max-w-5xl min-w-0" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-6 px-3 sm:px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full text-primary-400 text-xs sm:text-sm"
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
          </span>
          AI Systems Operational · Delaware LLC
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[2.2rem] leading-[1.15] sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-4 sm:mb-6 break-words"
        >
          Intelligence{' '}
          <span className="gradient-text">
            that converts.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm sm:text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          <span className="font-semibold text-white">TOFAI Consulting</span> — enterprise AI from{' '}
          <span className="text-white font-semibold">voice agents</span> and intelligent automation to{' '}
          <span className="text-white font-semibold">AI safety & alignment</span>, red teaming, and{' '}
          <span className="text-primary-400 font-semibold">legacy modernization</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center"
        >
          <a
            href="https://cal.com/desarrollo-marketing-y-tecnologia-lqmiht"
            target="_blank"
            rel="noopener noreferrer"
            className="group btn-primary justify-center"
          >
            <Calendar className="w-5 h-5 flex-shrink-0" />
            Schedule a Strategy Call
            <motion.span
              className="inline-block"
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </a>
          <a
            href="https://vocalisia.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2 justify-center"
          >
            <Play className="w-5 h-5 flex-shrink-0" />
            VocalisAI Live Demo
          </a>
          <a
            href="#services"
            className="text-slate-400 hover:text-primary-400 transition-colors text-sm flex items-center justify-center gap-2"
          >
            Explore Services →
          </a>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 sm:mt-12 overflow-hidden w-full"
        >
          <div className="flex gap-6 sm:gap-8 animate-[marquee_30s_linear_infinite] w-max">
            {[
              'Multi-LLM Agent Systems', 'AI Ethics & Alignment', 'Red Teaming & Safety Audits',
              'Voice AI Agents', 'Legacy System Modernization', 'Intelligent Automation',
              'LLM Pipeline Engineering', 'AI Architecture Design', 'Revenue Automation',
              'Enterprise AI Consulting', 'Multi-LLM Agent Systems', 'AI Ethics & Alignment',
              'Red Teaming & Safety Audits', 'Voice AI Agents', 'Legacy System Modernization',
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest whitespace-nowrap">
                <span className="text-primary-400">◆</span>
                {item}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mt-12 sm:mt-16 max-w-4xl mx-auto"
          ref={ref}
        >
          {metrics.map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              className="text-center p-4 rounded-xl bg-slate-900/50 border border-primary-500/10 backdrop-blur-sm"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-400 font-display">
                {inView && (
                  <CountUp
                    end={metric.number}
                    duration={2.5}
                    separator=","
                    suffix={metric.suffix}
                  />
                )}
              </div>
              <div className="text-sm text-slate-400 mt-2">{metric.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-10 sm:mt-12 flex flex-wrap gap-2 sm:gap-3 justify-center"
        >
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 border border-primary-500/20 rounded-full text-xs text-slate-400">
            <Shield className="w-3 h-3 text-primary-400 flex-shrink-0" />
            Google Cloud x Datadog Hackathon Finalist
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 border border-primary-500/20 rounded-full text-xs text-slate-400">
            <Zap className="w-3 h-3 text-accent-cyan flex-shrink-0" />
            Google Gemini Live Hackathon Finalist
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/50 border border-primary-500/20 rounded-full text-xs text-slate-400">
            <Shield className="w-3 h-3 text-accent-purple flex-shrink-0" />
            Responsible Disclosure — AI Safety
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-400/50 rounded-full flex justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
