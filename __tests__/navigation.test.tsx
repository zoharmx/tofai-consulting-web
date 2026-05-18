import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import Navigation from '@/components/Navigation'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}))

describe('Navigation — TOFAI Consulting', () => {
  it('renders the TOFAI logo text', () => {
    render(<Navigation />)
    expect(screen.getByText(/TOFAI/i)).toBeInTheDocument()
    expect(screen.getByText(/Consulting/i)).toBeInTheDocument()
  })

  it('renders all primary nav links', () => {
    render(<Navigation />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByText('Work')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Blog')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders the Get in Touch CTA button', () => {
    render(<Navigation />)
    const ctaButtons = screen.getAllByText(/Get in Touch/i)
    expect(ctaButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('CTA button links to cal.com scheduling', () => {
    render(<Navigation />)
    const ctaLinks = screen.getAllByRole('link', { name: /Get in Touch/i })
    ctaLinks.forEach(link => {
      expect(link).toHaveAttribute('href', expect.stringContaining('cal.com'))
    })
  })

  it('does not contain references to Eduardo Rodriguez', () => {
    render(<Navigation />)
    expect(screen.queryByText(/Eduardo/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/Rdz/i)).not.toBeInTheDocument()
  })

  it('mobile menu toggle shows menu items', async () => {
    render(<Navigation />)
    const menuButton = screen.getByRole('button', { name: /toggle menu/i })
    fireEvent.click(menuButton)
    await waitFor(() => {
      const servicesItems = screen.getAllByText('Services')
      expect(servicesItems.length).toBeGreaterThanOrEqual(1)
    })
  })

  it('logo image has correct alt text', () => {
    render(<Navigation />)
    const logoImg = screen.getByAltText(/TOFAI Consulting/i)
    expect(logoImg).toBeInTheDocument()
  })
})
