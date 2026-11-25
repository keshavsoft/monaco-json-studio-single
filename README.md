# monaco-json-studio-single

1-pane static Monaco JSON Studio generator composing base-header, base-body, and base-footer.

- **npm**: [https://www.npmjs.com/package/monaco-json-studio-single](https://www.npmjs.com/package/monaco-json-studio-single)
- **GitHub**: [https://github.com/keshavsoft/monaco-json-studio-single](https://github.com/keshavsoft/monaco-json-studio-single)
- **Docs**: [https://keshavsoft.github.io/monaco-json-studio-single/](https://keshavsoft.github.io/monaco-json-studio-single/) ([Story](./docs/story.html) · [npx](./docs/npx-usage.html) · [npm](./docs/npm-usage.html) · [Dependencies](./docs/dependencies.html))
- **Suite**: [Studio Docs](https://keshavsoft.github.io/monaco-json-studio-docs/single.html)

## CLI (`npx`)

```bash
npx monaco-json-studio-single
npx monaco-json-studio-single file-picker cursor
npx monaco-json-studio-single select stats
npx monaco-json-studio-single actions status
```

## Programmatic (`npm`)

```bash
npm install monaco-json-studio-single
```

```js
import { createSingleStudio } from 'monaco-json-studio-single';

createSingleStudio({ header: 'file-picker', footer: 'cursor' });
```
