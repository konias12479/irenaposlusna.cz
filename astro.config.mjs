import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://irenaposlusna.cz',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ changefreq: 'monthly', lastmod: new Date() })],
});
