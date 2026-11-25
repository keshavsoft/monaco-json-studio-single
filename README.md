# monaco-json-studio-single

1-pane static Monaco JSON Studio generator (`v4`) composing [`monaco-json-studio-base-header`](https://www.npmjs.com/package/monaco-json-studio-base-header), [`monaco-json-studio-base-body`](https://www.npmjs.com/package/monaco-json-studio-base-body) (`v3`), and [`monaco-json-studio-base-footer`](https://www.npmjs.com/package/monaco-json-studio-base-footer).

- **npm**: [https://www.npmjs.com/package/monaco-json-studio-single](https://www.npmjs.com/package/monaco-json-studio-single)
- **GitHub**: [https://github.com/keshavsoft/monaco-json-studio-single](https://github.com/keshavsoft/monaco-json-studio-single)
- **Docs**: [https://keshavsoft.github.io/monaco-json-studio-single/](https://keshavsoft.github.io/monaco-json-studio-single/) ([Story](./docs/story.html) · [npx](./docs/npx-usage.html) · [npm](./docs/npm-usage.html) · [Dependencies](./docs/dependencies.html))
- **Suite**: [Studio Docs](https://keshavsoft.github.io/monaco-json-studio-docs/single.html)

## Features (`v4`)

- **Top-bar controls**: File picker, dataset select, or action buttons sit cleanly inside the top header with no wasted vertical space.
- **Endpoint & local loading**: Load from `./data/pane1.json`, `--url <endpoint>`, or `?url=<endpoint>` in the browser URL.
- **Live source indicator**: Visually badges the loaded source in the header (`LOCAL DATA`, `SAME SERVER`, `REMOTE URL`, `LOCAL FILE`, or `LOAD FAILED`).
- **Non-overwriting output**: Repeated CLI runs auto-increment (`-1`, `-2`, ...) to keep earlier studios intact.

## CLI (`npx`)

```bash
npx monaco-json-studio-single
npx monaco-json-studio-single file-picker cursor
npx monaco-json-studio-single file-picker cursor --url https://keshavsoft.github.io/declarative-definitions/json/v2/definitions.json
npx monaco-json-studio-single select stats
```

## Programmatic (`npm`)

```bash
npm install monaco-json-studio-single
```

```js
import { createSingleStudio } from 'monaco-json-studio-single';

createSingleStudio({
  header: 'file-picker',
  footer: 'cursor',
  url: 'https://keshavsoft.github.io/declarative-definitions/json/v2/definitions.json'
});
```
