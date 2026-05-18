import { render, screen } from '@testing-library/react'
import HeroSection from '@/components/sections/HeroSection'

jest.mock('react-countup', () => ({
  __esModule: true,
  default: ({ end, suffix }: { end: number; suffix: string }) => (
    <span>{end}{suffix}</span>
  ),
}))

jest.mock('react-intersection-observer', () => ({
  useInView: () => [null, true],
}))

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h1: ({ children, ...props }: any) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
  AnimatePresence: ({ children }: any) => children,
}))

describe('HeroSection — TOFAI Consulting', () => {
  it('renders the main headline "Intelligence"', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Intelligence/i)).toBeInTheDocument()
  })

  it('renders the "that converts" headline', () => {
    render(<HeroSection />)
    expect(screen.getByText(/that converts/i)).toBeInTheDocument()
  })

  it('renders the TOFAI Consulting description', () => {
    render(<HeroSection />)
    expect(screen.getByText(/TOFAI Consulting/i)).toBeInTheDocument()
  })

  it('renders the Schedule a Strategy Call CTA', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Schedule a Strategy Call/i)).toBeInTheDocument()
  })

  it('Schedule Call links to cal.com', () => {
    render(<HeroSection />)
    const calLink = document.querySelector('a[href*="cal.com"]')
    expect(calLink).not.toBeNull()
  })

  it('renders VocalisAI live demo link', () => {
    render(<HeroSection />)
    expect(screen.getByText(/VocalisAI Live Demo/i)).toBeInTheDocument()
  })

  it('VocalisAI demo links to vocalisia.web.app', () => {
    render(<HeroSection />)
    const vocalisLink = document.querySelector('a[href*="vocalisia"]')
    expect(vocalisLink).not.toBeNull()
  })

  it('renders the 4 key metrics', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Calls Processed/i)).toBeInTheDocument()
    expect(screen.getByText(/Safety Benchmarks/i)).toBeInTheDocument()
    expect(screen.getByText(/LLMs Benchmarked/i)).toBeInTheDocument()
    expect(screen.getByText(/AI R&D Experience/i)).toBeInTheDocument()
  })

  it('renders the Delaware LLC badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Delaware LLC/i)).toBeInTheDocument()
  })

  it('renders the Google Cloud x Datadog Hackathon badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Google Cloud x Datadog Hackathon/i)).toBeInTheDocument()
  })

  it('renders the Responsible Disclosure badge', () => {
    render(<HeroSection />)
    expect(screen.getByText(/Responsible Disclosure/i)).toBeInTheDocument()
  })

  it('does not show "Eduardo Rodriguez" in any text', () => {
    render(<HeroSection />)
    expect(screen.queryByText(/Eduardo Rodriguez/i)).not.toBeInTheDocument()
  })

  it('does not expose any API keys or secrets', () => {
    render(<HeroSection />)
    const fullText = document.body.innerHTML
    expect(fullText).not.toMatch(/sk-[a-zA-Z0-9]{20,}/)
    expect(fullText).not.toMatch(/api_key\s*=\s*["'][^"']+["']/i)
    expect(fullText).not.toMatch(/secret\s*=\s*["'][^"']+["']/i)
    expect(fullText).not.toMatch(/password\s*=\s*["'][^"']+["']/i)
  })
})
