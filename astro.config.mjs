// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Placeholder production URL — PRD Bagian 8 defers the custom domain, so
  // this assumes the free Netlify subdomain planned for Tahap 7. Needed for
  // sitemap.xml / canonical / OG absolute URLs to be correct; swap this one
  // line for the real domain later (no rebuild-breaking change either way).
  site: 'https://nolaamallia.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
