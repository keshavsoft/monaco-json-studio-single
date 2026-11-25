#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES, createSingleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Single (v2)

Usage:
  npx monaco-json-studio-single [header] [footer]

Options:
  header : ${HEADER_TYPES.join(' | ')} (default: file-picker)
  footer : ${FOOTER_TYPES.join(' | ')} (default: cursor)

Examples:
  npx monaco-json-studio-single
  npx monaco-json-studio-single file-picker cursor
  npx monaco-json-studio-single select stats
  npx monaco-json-studio-single actions status
`);
    process.exit(0);
}

const [header = 'file-picker', footer = 'cursor'] = args;

try {
    const targetDir = createSingleStudio({ header, footer });
    console.log(`Generated Single Studio v2 (${header} / ${footer}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Single Studio: ${error.message}`);
    process.exit(1);
}
