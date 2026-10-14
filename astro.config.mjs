// @ts-check
import { defineConfig } from 'astro/config';

// When you have a domain, set `site` (used for canonical URLs and hreflang).
export default defineConfig({
  site: 'https://example.com',
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
