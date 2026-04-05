import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // This setting ensures that /about and /about/ both work correctly
  trailingSlash: 'ignore',

  // If you are deploying to a specific folder (like GitHub Pages), 
  // you might need to add a 'site' property here later.
  // site: 'https://your-domain.com',

  output: 'static', // Ensures your site is built as a fast, static website
});