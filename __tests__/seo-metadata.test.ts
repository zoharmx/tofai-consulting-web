/**
 * SEO & Metadata validation tests for TOFAI Consulting
 * Validates that the layout exports correct metadata for search engines and LLMs
 */

describe('SEO Metadata — TOFAI Consulting', () => {
  let metadata: any

  beforeAll(async () => {
    const layoutModule = await import('@/app/layout')
    metadata = layoutModule.metadata
  })

  it('metadataBase points to tofaiconsulting.com', () => {
    expect(metadata.metadataBase.toString()).toContain('tofaiconsulting.com')
  })

  it('default title contains TOFAI Consulting', () => {
    expect(metadata.title.default).toContain('TOFAI Consulting')
  })

  it('description mentions enterprise AI services', () => {
    const desc = metadata.description.toLowerCase()
    expect(desc).toContain('enterprise')
    expect(desc).toContain('ai')
  })

  it('description is at least 100 characters for good SEO', () => {
    expect(metadata.description.length).toBeGreaterThanOrEqual(100)
  })

  it('description is under 165 characters for SERP display', () => {
    expect(metadata.description.length).toBeLessThanOrEqual(165)
  })

  it('keywords include all 5 star products', () => {
    const keywords = (metadata.keywords as string[]).map((k: string) => k.toLowerCase()).join(' ')
    expect(keywords).toContain('voice ai')
    expect(keywords).toContain('red teaming')
    expect(keywords).toContain('ai ethics')
    expect(keywords).toContain('legacy')
  })

  it('openGraph has correct TOFAI URL', () => {
    expect(metadata.openGraph.url).toContain('tofaiconsulting.com')
  })

  it('openGraph has og-image set', () => {
    const images = metadata.openGraph.images
    expect(images).toBeDefined()
    expect(images.length).toBeGreaterThanOrEqual(1)
    expect(images[0].url).toContain('og-image')
  })

  it('openGraph image has correct dimensions (1200x630)', () => {
    const image = metadata.openGraph.images[0]
    expect(image.width).toBe(1200)
    expect(image.height).toBe(630)
  })

  it('Twitter card type is summary_large_image', () => {
    expect(metadata.twitter.card).toBe('summary_large_image')
  })

  it('robots allows indexing', () => {
    expect(metadata.robots.index).toBe(true)
    expect(metadata.robots.follow).toBe(true)
  })

  it('authors include both TOFAI founders', () => {
    const authorNames = (metadata.authors as Array<{name: string}>).map(a => a.name)
    expect(authorNames.some((n: string) => n.includes('Diosdado') || n.includes('Rodríguez') || n.includes('Rodriguez'))).toBe(true)
  })

  it('creator is TOFAI Consulting LLC', () => {
    expect(metadata.creator).toContain('TOFAI')
  })

  it('canonical URL is set', () => {
    expect(metadata.alternates?.canonical).toContain('tofaiconsulting.com')
  })
})
