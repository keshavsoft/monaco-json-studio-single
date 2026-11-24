#!/usr/bin/env node
import { HEADER_TYPES, FOOTER_TYPES } from 'monaco-json-studio-base';
import { createSingleStudio } from '../src/index.js';

const args = process.argv.slice(2);

if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Monaco JSON Studio · Single

Usage:
  npx monaco-json-studio-single [header] [footer]

Options:
  header : ${HEADER_TYPES.join(' | ')} (default: file-picker)
  footer : ${FOOTER_TYPES.join(' | ')} (default: cursor)

Examples:
  npx monaco-json-studio-single
  npx monaco-json-studio-single file-picker cursor
  npx monaco-json-studio-single select note
  npx monaco-json-studio-single title none
`);
    process.exit(0);
}

const [header = 'file-picker', footer = 'cursor'] = args;

try {
    const targetDir = createSingleStudio({ header, footer });
    console.log(`Generated Single Studio (${header} / ${footer}).`);
    console.log(`Open: ${targetDir}/index.html`);
} catch (error) {
    console.error(`Could not generate Single Studio: ${error.message}`);
    process.exit(1);
}
