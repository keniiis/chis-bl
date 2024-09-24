import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';

import sitemap from '@astrojs/sitemap';

import robotsTxt from 'astro-robots-txt';

import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://chismesito.cl',
  integrations: [tailwind(), sitemap(), robotsTxt(), partytown()],
  output: 'static',
  adapter: vercelStatic(),
});