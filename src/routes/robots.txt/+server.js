import { siteConfig } from '$lib/seo.js';

export async function GET() {
	const robots = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /_app/
Disallow: /checkout/
Disallow: /account/

# Allow important crawlers
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap.xml

# Crawl delay
Crawl-delay: 1`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
}