import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://chismesito.cl',
  integrations: [tailwind(), sitemap(), robotsTxt()],
  output: 'static',
  adapter: vercelStatic(),
});