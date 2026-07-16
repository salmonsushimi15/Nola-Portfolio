// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  // Production domain (Rumahweb registration, DNS + hosting on Cloudflare).
  // Used for sitemap.xml / canonical / hreflang / OG absolute URLs.
  site: 'https://nolaarchitect.my.id',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare()
});