import { GoogleAuth } from 'google-auth-library';
import fs from 'fs';

const KEY = JSON.parse(process.env.GOOGLE_INDEXING_KEY);
const auth = new GoogleAuth({
  credentials: KEY,
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

// List of URLs to notify — see Step 5 for how you generate this
const urls = JSON.parse(fs.readFileSync('changed-urls.json', 'utf-8'));

const client = await auth.getClient();

for (const url of urls) {
  try {
    const res = await client.request({
      url: 'https://indexing.googleapis.com/v3/urlNotifications:publish',
      method: 'POST',
      data: {
        url,
        type: 'URL_UPDATED', // use 'URL_DELETED' for removed pages
      },
    });
    console.log(`✅ Notified: ${url}`);
  } catch (err) {
    console.error(`❌ Failed for ${url}:`, err.response?.data || err.message);
  }
}
