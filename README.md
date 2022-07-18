# nuxt-editorjs

This Nuxt3 module wraps `@editorjs/editorjs` and provides a single component (`<editor-js />`) for block styled text editing in Nuxt3.

## Installation

- Run `yarn install nuxt-editorjs` to install from NPM.
- Add the module to your `nuxt.config.ts` file and optimise with vite:

```javascript
export default defineNuxtConfig({
  ...
  modules: ["nuxt-editorjs"],
  vite: {
    optimizeDeps: {
      include: ["@editorjs/editorjs"],
    },
  },
  ...
});
```

## Usage

- We expose a single `<editor-js />` component.

## Development

- Run `yarn` to install required dependencies.
- Run `yarn dev:prepare` to generate type stubs.
- Use `yarn dev` to start [playground](./playground) in development mode.
- Use `yarn prepack` to build the module.

## Todo

- Add more Editor.js modules (Header, List, ...)
- Add preview component (using EditorJS -> HTML package)
- Add custom styling (override standard CSS)
- Why is <client only> needed?</client>
