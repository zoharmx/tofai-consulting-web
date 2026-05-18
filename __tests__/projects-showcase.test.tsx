import { render, screen } from '@testing-library/react'
import ProjectsShowcase from '@/components/sections/ProjectsShowcase'

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: jest.fn() }),
  usePathname: () => '/',
}))

describe('ProjectsShowcase — TOFAI Consulting', () => {
  it('renders the TOF Research Engine project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/TOF Research Engine/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the VocalisAI Platform project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/VocalisAI Platform/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders San Pedro MotoCare (legacy modernization)', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/San Pedro MotoCare/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders TOFAI Benchmark Dataset project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/TOFAI Benchmark Dataset/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders TOFAI Evals adversarial testing project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/TOFAI Evals/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders HoyMismoGPS fleet management project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/HoyMismoGPS/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders Binah-Σ cognitive decision engine', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/Binah/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders SignaFlow legal tech project', () => {
    render(<ProjectsShowcase />)
    expect(screen.getAllByText(/SignaFlow/i).length).toBeGreaterThanOrEqual(1)
  })

  it('renders "Featured Project" badges for key projects', () => {
    render(<ProjectsShowcase />)
    const featuredBadges = screen.getAllByText(/Featured Project/i)
    expect(featuredBadges.length).toBeGreaterThanOrEqual(3)
  })

  it('VocalisAI project has external live demo link', () => {
    render(<ProjectsShowcase />)
    const liveDemoLinks = document.querySelectorAll('a[href*="vocalisia"]')
    expect(liveDemoLinks.length).toBeGreaterThanOrEqual(1)
  })

  it('has View all case studies link', () => {
    render(<ProjectsShowcase />)
    expect(screen.getByText(/View all case studies/i)).toBeInTheDocument()
  })

  it('does not show personal personal portfolio text', () => {
    render(<ProjectsShowcase />)
    expect(screen.queryByText(/personal portfolio/i)).not.toBeInTheDocument()
  })
})
