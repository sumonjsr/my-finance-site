import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://quickfincalc.com',
  trailingSlash: 'never',
  output: 'static',
  integrations: [sitemap()],
  build: {
    format: 'file', // এটি 'directory' থেকে পরিবর্তন করে 'file' করা হলো
  }
});