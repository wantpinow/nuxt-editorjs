# nuxt-editorjs

[![Npm package version](https://badgen.net/npm/v/nuxt-editorjs)](https://npmjs.com/package/nuxt-editorjs)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

Nuxt3 components for `@editorjs/editorjs`.

## Installation

- Run `yarn add nuxt-editorjs` to install from NPM.
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
- Add the ability to use custom Editor.js modules
- Add preview component (using EditorJS -> HTML package)
- Add custom styling (override standard CSS)
- Why is `<client-only>` needed?`</client>` to render a v-model?
