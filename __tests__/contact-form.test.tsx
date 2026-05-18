import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ContactPage from '@/app/contact/page'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/contact',
}))

global.fetch = jest.fn()

describe('Contact Page — TOFAI Consulting', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders the page title about building AI systems', () => {
    render(<ContactPage />)
    expect(screen.getByText(/Let's build your/i)).toBeInTheDocument()
  })

  it('renders TOFAI Consulting LLC badge', () => {
    render(<ContactPage />)
    expect(screen.getAllByText(/TOFAI Consulting LLC/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders all 5 TOFAI service options in dropdown', async () => {
    render(<ContactPage />)
    const select = screen.getByRole('combobox', { name: /service/i })
    expect(select).toBeInTheDocument()

    const options = select.querySelectorAll('option')
    const optionTexts = Array.from(options).map(o => o.textContent || '')

    expect(optionTexts.some(t => t.includes('TOF Research Engine'))).toBe(true)
    expect(optionTexts.some(t => t.includes('VocalisAI'))).toBe(true)
    expect(optionTexts.some(t => t.includes('Red Teaming'))).toBe(true)
    expect(optionTexts.some(t => t.includes('Legacy System Modernization'))).toBe(true)
    expect(optionTexts.some(t => t.includes('Marketing Intelligence'))).toBe(true)
  })

  it('renders all budget range options', () => {
    render(<ContactPage />)
    const select = screen.getByRole('combobox', { name: /budget/i })
    const options = select.querySelectorAll('option')
    const optionTexts = Array.from(options).map(o => o.textContent || '')
    expect(optionTexts.some(t => t.includes('$2,500'))).toBe(true)
    expect(optionTexts.some(t => t.includes('$25,000'))).toBe(true)
  })

  it('shows validation errors when submitting empty form', async () => {
    render(<ContactPage />)
    const submitButton = screen.getByRole('button', { name: /Send Message/i })
    fireEvent.click(submitButton)

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument()
    })
  })

  it('cal.com scheduling link is available', () => {
    render(<ContactPage />)
    const calLink = document.querySelector('a[href*="cal.com"]')
    expect(calLink).not.toBeNull()
  })

  it('email contact information is shown', () => {
    render(<ContactPage />)
    const emailLinks = document.querySelectorAll('a[href*="mailto:"]')
    expect(emailLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('VocalisAI demo link is present', () => {
    render(<ContactPage />)
    const vocalisLink = document.querySelector('a[href*="vocalisia"]')
    expect(vocalisLink).not.toBeNull()
  })

  it('WhatsApp contact link is present', () => {
    render(<ContactPage />)
    const waLink = document.querySelector('a[href*="wa.me"]')
    expect(waLink).not.toBeNull()
  })

  it('form submission calls the /api/contact endpoint', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByPlaceholderText(/Your name/i), 'Test User')
    await user.type(screen.getByPlaceholderText(/your@email.com/i), 'test@example.com')

    const serviceSelect = screen.getByRole('combobox', { name: /service/i })
    await user.selectOptions(serviceSelect, 'vocalisai')

    const budgetSelect = screen.getByRole('combobox', { name: /budget/i })
    await user.selectOptions(budgetSelect, '$5,000 - $10,000 USD')

    await user.type(
      screen.getByPlaceholderText(/goals, timeline/i),
      'We need a voice AI agent for our call center with 100+ agents monthly.'
    )

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith('/api/contact', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      }))
    })
  })

  it('success state is shown after successful submission', async () => {
    ;(global.fetch as jest.Mock).mockResolvedValueOnce({ ok: true })
    const user = userEvent.setup()
    render(<ContactPage />)

    await user.type(screen.getByPlaceholderText(/Your name/i), 'Test User')
    await user.type(screen.getByPlaceholderText(/your@email.com/i), 'test@example.com')
    const serviceSelect = screen.getByRole('combobox', { name: /service/i })
    await user.selectOptions(serviceSelect, 'vocalisai')
    const budgetSelect = screen.getByRole('combobox', { name: /budget/i })
    await user.selectOptions(budgetSelect, '$5,000 - $10,000 USD')
    await user.type(
      screen.getByPlaceholderText(/goals, timeline/i),
      'We need a voice AI agent for our call center.'
    )

    fireEvent.click(screen.getByRole('button', { name: /Send Message/i }))

    await waitFor(() => {
      expect(screen.getByText(/Message Sent!/i)).toBeInTheDocument()
    })
  })

  it('does not leak API keys in form component', () => {
    render(<ContactPage />)
    const html = document.body.innerHTML
    expect(html).not.toMatch(/sk-[a-zA-Z0-9]{20,}/)
    expect(html).not.toMatch(/AIza[a-zA-Z0-9_-]{35}/)
    expect(html).not.toMatch(/password\s*=\s*["'][^"']{6,}["']/i)
  })
})
