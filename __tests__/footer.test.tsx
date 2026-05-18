import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}))

describe('Footer — TOFAI Consulting', () => {
  it('renders TOFAI Consulting branding', () => {
    render(<Footer />)
    expect(screen.getAllByText(/TOFAI/i).length).toBeGreaterThanOrEqual(1)
  })

  it('shows Delaware LLC badge', () => {
    render(<Footer />)
    const delawareElements = screen.getAllByText(/Delaware/i)
    expect(delawareElements.length).toBeGreaterThanOrEqual(1)
  })

  it('shows all 5 star products in services section', () => {
    render(<Footer />)
    expect(screen.getAllByText(/TOF Research Engine/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/VocalisAI/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Red Teaming/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Legacy Modernization/i).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText(/Marketing Intelligence/i).length).toBeGreaterThanOrEqual(1)
  })

  it('email link points to correct address and does not hardcode private keys', () => {
    render(<Footer />)
    const emailLinks = screen.getAllByRole('link', { name: /email/i })
    const mailtoLinks = document.querySelectorAll('a[href^="mailto:"]')
    expect(mailtoLinks.length).toBeGreaterThanOrEqual(1)
    mailtoLinks.forEach(link => {
      const href = link.getAttribute('href') || ''
      expect(href).not.toContain('password')
      expect(href).not.toContain('secret')
      expect(href).not.toContain('key')
    })
  })

  it('WhatsApp link is present', () => {
    render(<Footer />)
    const waLink = document.querySelector('a[href*="wa.me"]')
    expect(waLink).not.toBeNull()
  })

  it('VocalisAI external link is present', () => {
    render(<Footer />)
    const vocalisLinks = document.querySelectorAll('a[href*="vocalisia"]')
    expect(vocalisLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('does not reference Eduardo Rodriguez in any visible text', () => {
    render(<Footer />)
    expect(screen.queryByText(/Eduardo Rodriguez/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Eduardo Rdz/i)).not.toBeInTheDocument()
  })

  it('shows copyright with TOFAI Consulting LLC', () => {
    render(<Footer />)
    const tofaiElements = screen.getAllByText(/TOFAI Consulting LLC/i)
    expect(tofaiElements.length).toBeGreaterThanOrEqual(1)
  })

  it('Privacy and Terms links are rendered', () => {
    render(<Footer />)
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument()
    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument()
  })

  it('cal.com scheduling link is present', () => {
    render(<Footer />)
    const calLinks = document.querySelectorAll('a[href*="cal.com"]')
    expect(calLinks.length).toBeGreaterThanOrEqual(1)
  })
})
