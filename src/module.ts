import { resolve } from "path";
import { fileURLToPath } from "url";
import { defineNuxtModule, addComponentsDir } from "@nuxt/kit";

export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "nuxt-editorjs",
    configKey: "nuxtEditorJS",
  },
  defaults: {},
  setup(options, nuxt) {
    const components_dir = fileURLToPath(
      new URL("./runtime/components", import.meta.url)
    );
    const css_dir = fileURLToPath(
      new URL("./runtime/assets/css", import.meta.url)
    );
    addComponentsDir({
      path: components_dir,
    });
    nuxt.options.css.push(resolve(css_dir, "editor.css"));
  },
});
