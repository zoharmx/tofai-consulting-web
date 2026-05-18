/**
 * Security test suite — validates no sensitive data is hardcoded in source files
 */
import * as fs from 'fs'
import * as path from 'path'
import * as glob from 'glob'

const SOURCE_DIRS = ['app', 'components']
const PROJECT_ROOT = path.join(process.cwd())

function getAllSourceFiles(): string[] {
  const files: string[] = []
  for (const dir of SOURCE_DIRS) {
    const dirPath = path.join(PROJECT_ROOT, dir)
    if (fs.existsSync(dirPath)) {
      const found = glob.sync(`${dir}/**/*.{ts,tsx,js,jsx}`, { cwd: PROJECT_ROOT })
      files.push(...found)
    }
  }
  return files
}

function readFileContent(filePath: string): string {
  return fs.readFileSync(path.join(PROJECT_ROOT, filePath), 'utf-8')
}

const SECRET_PATTERNS: Array<{ name: string; pattern: RegExp }> = [
  { name: 'OpenAI API Key', pattern: /sk-[a-zA-Z0-9]{20,}/ },
  { name: 'Google API Key', pattern: /AIza[a-zA-Z0-9_-]{35}/ },
  { name: 'Generic API Key assignment', pattern: /api[_-]?key\s*[:=]\s*["'][a-zA-Z0-9_-]{16,}["']/i },
  { name: 'Hardcoded password', pattern: /password\s*[:=]\s*["'][^"']{6,}["']/i },
  { name: 'Hardcoded secret', pattern: /secret\s*[:=]\s*["'][^"']{8,}["']/i },
  { name: 'JWT token', pattern: /eyJ[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}\.[a-zA-Z0-9_-]{10,}/ },
  { name: 'Twilio Auth Token pattern (32 hex chars)', pattern: /auth[_-]?token\s*[:=]\s*["'][0-9a-f]{32}["']/i },
  { name: 'Bearer token', pattern: /Bearer\s+[a-zA-Z0-9_-]{20,}/ },
  { name: 'Private key block', pattern: /-----BEGIN (RSA |EC )?PRIVATE KEY-----/ },
]

describe('Security — No Hardcoded Sensitive Data', () => {
  const sourceFiles = getAllSourceFiles()

  it('discovers source files to check', () => {
    expect(sourceFiles.length).toBeGreaterThan(0)
  })

  sourceFiles.forEach(filePath => {
    SECRET_PATTERNS.forEach(({ name, pattern }) => {
      it(`[${filePath}] has no hardcoded: ${name}`, () => {
        const content = readFileContent(filePath)
        expect(content).not.toMatch(pattern)
      })
    })
  })

  it('contact page does not hardcode an API key for email service', () => {
    const content = readFileContent('app/contact/page.tsx')
    expect(content).not.toMatch(/sk-[a-zA-Z0-9]{20,}/)
    expect(content).not.toMatch(/AIza[a-zA-Z0-9_-]{35}/)
    expect(content).not.toMatch(/SG\.[a-zA-Z0-9_-]{22}/)
  })

  it('layout.tsx does not contain any secret tokens', () => {
    const content = readFileContent('app/layout.tsx')
    expect(content).not.toMatch(/sk-[a-zA-Z0-9]{20,}/)
    expect(content).not.toMatch(/secret.*=.*['"][^'"]{10,}['"]/i)
  })

  it('env variables are referenced via process.env, not hardcoded', () => {
    const contactPage = readFileContent('app/contact/page.tsx')
    const apiRoute = fs.existsSync(path.join(PROJECT_ROOT, 'app/api/contact/route.ts'))
      ? readFileContent('app/api/contact/route.ts')
      : ''
    if (apiRoute) {
      expect(apiRoute).toMatch(/process\.env\./i)
    }
  })
})
