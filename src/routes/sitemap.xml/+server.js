import { siteConfig } from '$lib/seo.js';

export async function GET() {
	// Base pages
	const staticPages = [
		'',
		'/about',
		'/contact',
		'/privacy-policy',
		'/terms-of-service',
		'/categories',
		'/deals',
		'/reviews'
	];
	
	// TODO: Add dynamic pages (products, categories, etc.)
	// const products = await getProducts();
	// const categories = await getCategories();
	
	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${staticPages.map(page => `
	<url>
		<loc>${siteConfig.url}${page}</loc>
		<lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
		<changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
		<priority>${page === '' ? '1.0' : '0.8'}</priority>
	</url>`).join('')}
</urlset>`;

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml',
			'Cache-Control': 'max-age=3600'
		}
	});
}