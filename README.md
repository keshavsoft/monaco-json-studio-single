# monaco-json-studio-single

Dedicated 1-pane static Monaco JSON Studio generator built on `monaco-json-studio-base`.

- **npm**: [https://www.npmjs.com/package/monaco-json-studio-single](https://www.npmjs.com/package/monaco-json-studio-single)
- **Suite Story & Docs**: [https://keshavsoft.github.io/monaco-json-studio-docs/single.html](https://keshavsoft.github.io/monaco-json-studio-docs/single.html)
- **Repo Docs**: [./docs/index.html](./docs/index.html) | [https://keshavsoft.github.io/monaco-json-studio-single/](https://keshavsoft.github.io/monaco-json-studio-single/)

## Why It Exists

In a 1-pane editor, stacking a separate pane header below the studio bar wastes vertical space. `monaco-json-studio-single` places `Select File` or dataset selection directly in the top studio header and keeps the editor full-height, with non-overwriting output folders (`-1`, `-2`, …).

## CLI Usage

```bash
npx monaco-json-studio-single
npx monaco-json-studio-single file-picker cursor
npx monaco-json-studio-single select note
npx monaco-json-studio-single title none
```

## Programmatic Usage

```js
import { createSingleStudio } from 'monaco-json-studio-single';

createSingleStudio({ header: 'file-picker', footer: 'cursor' });
```
