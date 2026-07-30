import fs from 'fs';

const SITEMAP_URL = 'https://quickfincalc.com/sitemap-index.xml';

async function getAllUrls() {
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();

  // Check if this is a sitemap INDEX (points to other sitemaps)
  const subSitemaps = [...xml.matchAll(/<loc>(.*?\.xml)<\/loc>/g)].map(m => m[1]);

  let allUrls = [];

  if (subSitemaps.length > 0) {
    // It's an index — fetch each sub-sitemap and collect URLs
    for (const sitemapUrl of subSitemaps) {
      const subRes = await fetch(sitemapUrl);
      const subXml = await subRes.text();
      const urls = [...subXml.matchAll(/<loc>(.*?)<\/loc>/g)]
        .map(m => m[1])
        .filter(u => !u.endsWith('.xml'));
      allUrls.push(...urls);
    }
  } else {
    // It's a flat sitemap — just extract URLs directly
    allUrls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
      .map(m => m[1])
      .filter(u => !u.endsWith('.xml'));
  }

  return allUrls;
}

const urls = await getAllUrls();
fs.writeFileSync('changed-urls.json', JSON.stringify(urls, null, 2));
console.log(`✅ Found ${urls.length} URLs, saved to changed-urls.json`);
