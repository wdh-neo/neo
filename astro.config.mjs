import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// When deploying to GitHub Pages for this repo (wdh-neo/neo),
// the site is served from https://wdh-neo.github.io/neo/
// so we need the /neo base path. For custom domain (neo.engineer) we use root.
const isGitHubPages = !!process.env.GITHUB_PAGES;

export default defineConfig({
  site: 'https://neo.engineer',
  base: isGitHubPages ? '/neo' : '/',
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
  ],
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true,
    },
  },
});