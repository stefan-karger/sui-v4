import { defineConfig } from "@solidjs/start/config"

import tailwindcss from "@tailwindcss/vite"
/* @ts-expect-error */
import pkg from "@vinxi/plugin-mdx"
import rehypePrettyCode from "rehype-pretty-code"

const { default: mdx } = pkg
export default defineConfig({
  server: {
    preset: "netlify",
    prerender: {
      crawlLinks: true
    }
  },
  extensions: ["mdx", "md"],
  vite: {
    plugins: [
      tailwindcss(),
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
        rehypePlugins: [
          [
            rehypePrettyCode,
            {
              theme: {
                dark: "github-dark",
                light: "github-light-default"
              }
            }
          ]
        ]
      })
    ]
  }
})
