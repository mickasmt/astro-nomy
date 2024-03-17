import db from "@astrojs/db";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-nomy.vercel.app",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: {
        theme: "github-dark-dimmed",
      },
      gfm: true,
    }),
    icon(),
    sitemap(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    db(),
  ],
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});
