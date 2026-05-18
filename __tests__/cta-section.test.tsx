import { render, screen } from '@testing-library/react'
import CTASection from '@/components/sections/CTASection'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}))

jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
    h2: ({ children, ...props }: any) => <h2 {...props}>{children}</h2>,
    p: ({ children, ...props }: any) => <p {...props}>{children}</p>,
    span: ({ children, ...props }: any) => <span {...props}>{children}</span>,
    section: ({ children, ...props }: any) => <section {...props}>{children}</section>,
  },
}))

describe('CTASection — TOFAI Consulting', () => {
  it('renders the main CTA headline', () => {
    render(<CTASection />)
    expect(screen.getByText(/From challenge to/i)).toBeInTheDocument()
  })

  it('renders the Schedule Strategy Call button', () => {
    render(<CTASection />)
    expect(screen.getByText(/Schedule Strategy Call/i)).toBeInTheDocument()
  })

  it('Schedule Call links to cal.com', () => {
    render(<CTASection />)
    const calLink = document.querySelector('a[href*="cal.com"]')
    expect(calLink).not.toBeNull()
  })

  it('renders Email Us Directly CTA', () => {
    render(<CTASection />)
    expect(screen.getByText(/Email Us Directly/i)).toBeInTheDocument()
  })

  it('email CTA points to official TOFAI email', () => {
    render(<CTASection />)
    const mailLink = document.querySelector('a[href*="mailto:"]')
    expect(mailLink).not.toBeNull()
    const href = mailLink?.getAttribute('href') || ''
    expect(href).toContain('tofaiconsulting.com')
    expect(href).not.toContain('password')
    expect(href).not.toContain('secret')
  })

  it('renders Free Discovery Call step', () => {
    render(<CTASection />)
    expect(screen.getByText(/Free Discovery Call/i)).toBeInTheDocument()
  })

  it('renders Architecture Proposal step', () => {
    render(<CTASection />)
    expect(screen.getByText(/Architecture Proposal/i)).toBeInTheDocument()
  })

  it('renders Production Deployment step', () => {
    render(<CTASection />)
    expect(screen.getByText(/Production Deployment/i)).toBeInTheDocument()
  })

  it('renders LinkedIn, GitHub and WhatsApp social links', () => {
    render(<CTASection />)
    expect(screen.getByText('LinkedIn')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('WhatsApp')).toBeInTheDocument()
  })

  it('enterprise AI deployment message is correct', () => {
    render(<CTASection />)
    expect(screen.getByText(/TOFAI Consulting ships AI systems/i)).toBeInTheDocument()
  })
})
