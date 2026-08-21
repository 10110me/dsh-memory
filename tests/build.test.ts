import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, it, expect } from 'vitest'

const root = resolve(import.meta.dirname, '..')

describe('dsh-memory build artifacts', () => {
  it('host bundle exports the plugin contract', async () => {
    const mod = await import('../lib/index.js')
    expect(mod.name).toBe('dsh-memory')
    expect(Array.isArray(mod.inject)).toBe(true)
    expect(mod.inject).toContain('tools')
    expect(typeof mod.apply).toBe('function')
  })

  it('host bundle keeps the fast keyword search + tools', () => {
    const src = readFileSync(resolve(root, 'lib/index.js'), 'utf8')
    expect(src).toContain('defineTool')
    expect(src).toContain('doKeywordSearch')
    expect(src).toContain('memory_save')
    expect(src).toContain('memory_search')
  })

  it('host bundle ships the self-update endpoints', () => {
    const src = readFileSync(resolve(root, 'lib/index.js'), 'utf8')
    expect(src).toContain('/memory/api/update/check')
    expect(src).toContain('/memory/api/update/ignore')
    expect(src).toContain('/memory/api/update/run')
    expect(src).toContain('raw.githubusercontent.com/10110me/dsh-memory')
  })

  it('client bundle renders the update banner with three actions', () => {
    const src = readFileSync(resolve(root, 'client/client.js'), 'utf8')
    expect(src).toContain('dshm-update')
    expect(src).toContain('/update/ignore')
    expect(src).toContain('/update/run')
  })

  it('client bundle is a __ModuleLoader__ closure factory', () => {
    const src = readFileSync(resolve(root, 'client/client.js'), 'utf8')
    // banner
    expect(src.startsWith('window.__ModuleLoader__.load({ id: "dsh-memory"')).toBe(true)
    // footer
    expect(src.trimEnd().endsWith('return module.exports; } });')).toBe(true)
    // external react reached via the injected require, not bundled
    expect(src).toContain('react' as string) // still references react
  })

  it('client bundle exposes the slots plugin with the memory section', () => {
    const src = readFileSync(resolve(root, 'client/client.js'), 'utf8')
    expect(src).toContain('inject: ["slots"]')
    expect(src).toContain('settings.section')
    expect(src).toContain('Memory')
  })

  it('client bundle keeps graph + search features intact', () => {
    const src = readFileSync(resolve(root, 'client/client.js'), 'utf8')
    expect(src).toContain('minDist') // force-directed separation
    expect(src).toContain('seqRef') // debounced auto-search
    expect(src).toContain('ErrorBoundary') // render guard
  })
})