#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES, createSingleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Single (v5)

Usage:
  npx monaco-json-studio-single [header] [footer] [--url <endpoint>]

Options:
  header : ${HEADER_TYPES.join(' | ')} (default: file-picker)
  footer : ${FOOTER_TYPES.join(' | ')} (default: cursor)
  --url  : Optional JSON endpoint or path to load initially

Examples:
  npx monaco-json-studio-single
  npx monaco-json-studio-single file-picker cursor
  npx monaco-json-studio-single file-picker cursor --url https://keshavsoft.github.io/declarative-definitions/json/v2/definitions.json
`);
    process.exit(0);
}

const urlIndex = args.indexOf('--url');
const url = urlIndex !== -1 ? (args[urlIndex + 1] ?? '') : '';
const positional = args.filter((arg, i) => arg !== '--url' && (urlIndex === -1 || i !== urlIndex + 1));
const [header = 'file-picker', footer = 'cursor'] = positional;

try {
    const targetDir = createSingleStudio({ header, footer, url });
    console.log(`Generated Single Studio v5 (${header} / ${footer}${url ? ` / url=${url}` : ''}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Single Studio: ${error.message}`);
    process.exit(1);
}
