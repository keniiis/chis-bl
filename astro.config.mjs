import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import partytown from '@astrojs/partytown';

export default defineConfig({
  site: 'https://www.chismesito.cl',
  integrations: [
    tailwind(),
    sitemap(),
    robotsTxt(),
    partytown({
      // Configuración específica para Adsterra
      resolution: {
        thirdPartyScripts: {
          adsterra: {
            src: '//pl24515639.cpmrevenuegate.com/32/ec/79/32ec79a288cf197483f5dafe35671e3a.js',
            async: true,
          },
          banner: {
            src: '//pl24515694.cpmrevenuegate.com/12/7f/4f/127f4f19c0f0cc46a167b2eb2b003f9f.js',
            async: true,
          }
        },
      },
    }),
  ],
  trailingSlash: 'always',
  output: 'static',
  adapter: vercelStatic(),
});