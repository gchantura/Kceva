import { siteConfig } from '$lib/seo.js';

export async function GET() {
	const robots = `User-agent: *
Allow: /

# Block sensitive/private sections
Disallow: /admin/
Disallow: /edit/
Disallow: /api/
Disallow: /checkout/
Disallow: /account/

# Crawl delay to reduce server stress
Crawl-delay: 1

# Sitemap location
Sitemap: ${siteConfig.url}/sitemap.xml`;

	return new Response(robots, {
		headers: {
			'Content-Type': 'text/plain',
			'Cache-Control': 'max-age=86400'
		}
	});
}