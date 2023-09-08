import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://example.com",
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'github-dark-dimmed' },
      // shikiConfig: { theme: 'github-dark' },
      // remarkPlugins: [remarkToc],
      // rehypePlugins: [rehypeMinifyHtml],
      // remarkRehype: { footnoteLabel: 'Footnotes' },
      gfm: false,
    }),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-dimmed',
      // langs: [],
      wrap: true,
    },
  },
});
