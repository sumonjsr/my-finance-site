import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // আপনার Netlify সাইটের ইউআরএল
  site: 'https://quickfincalc.com',
  
  // 'always' থেকে পরিবর্তন করে 'ignore' করা হয়েছে যাতে স্ল্যাশ নিয়ে ঝামেলা না হয়
  trailingSlash: 'ignore', 

  output: 'static',

  // সitemap এখন খালি রাখা হয়েছে
  integrations: [],

  // Build settings
  build: {
    format: 'directory', 
  }
});