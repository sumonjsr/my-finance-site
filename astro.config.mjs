import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap'; // যদি ইনস্টল করা থাকে

// https://astro.build/config
export default defineConfig({
  // আপনার Netlify সাইটের ইউআরএল এখানে দিন (SEO এর জন্য জরুরি)
  site: 'https://financecalhub.netlify.app/',
  
  trailingSlash: 'always', // SEO এর জন্য সাধারণত 'always' বা 'never' ভালো, 'ignore' এর চেয়ে।

  output: 'static',

  // সোপান (Sitemap) এবং অন্যান্য ইন্টিগ্রেশন
  integrations: [sitemap()],

  // Build settings
  build: {
    format: 'directory', // এটি /privacy কে /privacy/index.html হিসেবে বিল্ড করবে, যা ক্লিন ইউআরএল দেয়।
  }
});