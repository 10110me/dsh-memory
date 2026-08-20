import { defineConfig } from 'tsdown'

/**
 * Client externals: resolved from the loader module table at runtime, never
 * bundled. `react` and friends are DSH platform modules provided by the host
 * page; the client bundle reaches them through the injected `require`.
 */
const PLATFORM_MODULES = [
  'react',
  'react/jsx-runtime',
  'react-dom',
  'react-dom/client',
  '@deepseek-ai/cordis',
  '@deepseek-ai/dsh-client-ui-slots',
  '@deepseek-ai/dsh-client-runtime',
  '@deepseek-ai/dsh-client-runtime/client',
  '@deepseek-ai/dsh-client-web-react',
  '@deepseek-ai/dsh-client-ui-primitives',
  '@deepseek-ai/dsh-client-ui-attachment',
  '@deepseek-ai/dsh-client-schema-form',
]

export default defineConfig([
  // Host bundle: ESM for the Node side → lib/index.js
  {
    entry: { index: 'src/index.ts' },
    outDir: 'lib',
    format: 'esm',
    platform: 'node',
    clean: true,
    dts: true,
    outExtensions: () => ({ js: '.js' }),
  },
  // Client bundle: a closure-factory artifact for window.__ModuleLoader__
  // → client/client.js
  {
    entry: { client: 'src/client/index.tsx' },
    outDir: 'client',
    format: 'cjs',
    platform: 'browser',
    outExtensions: () => ({ js: '.js' }),
    deps: { neverBundle: [...PLATFORM_MODULES] },
    banner: 'window.__ModuleLoader__.load({ id: "dsh-memory", factory: (require) => {',
    footer: 'return module.exports; } });',
    outputOptions: {
      intro: 'var module = { exports: {} }; var exports = module.exports;',
    },
  },
])