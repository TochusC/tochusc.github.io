import { getCollection } from 'astro:content';
import { paperDetails, projectDetails } from '../lib/portfolio';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft && !data.externalUrl);
  const paths = ['/', '/research/', '/projects/', '/blog/',
    ...paperDetails.map(p => `/research/${p.slug}/`),
    ...projectDetails.map(p => `/projects/${p.slug}/`),
    ...posts.map(p => `/blog/${p.slug}/`)];
  const body = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + paths.map(path => `<url><loc>https://zuyaoxu.art${path}</loc></url>`).join('') + '</urlset>';
  return new Response(body, {headers:{'Content-Type':'application/xml; charset=utf-8'}});
}
