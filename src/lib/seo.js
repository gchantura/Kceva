// SEO utilities and constants
export const siteConfig = {
	name: 'KCEVA',
	description: 'Premium affiliate store featuring curated products, exclusive deals, and honest reviews to help you make informed purchasing decisions.',
	url: 'https://kceva.com',
	ogImage: 'https://kceva.com/og-image.jpg',
	twitterHandle: '@kceva',
	keywords: [
		'affiliate store',
		'product reviews',
		'deals',
		'shopping',
		'curated products',
		'best products',
		'product recommendations'
	]
};

export function generateMetaTags({
	title,
	description = siteConfig.description,
	keywords = siteConfig.keywords,
	ogImage = siteConfig.ogImage,
	ogType = 'website',
	canonical,
	noindex = false
}) {
	const fullTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name;
	
	return {
		title: fullTitle,
		description,
		keywords: keywords.join(', '),
		'og:title': fullTitle,
		'og:description': description,
		'og:image': ogImage,
		'og:type': ogType,
		'og:url': canonical || siteConfig.url,
		'twitter:title': fullTitle,
		'twitter:description': description,
		'twitter:image': ogImage,
		canonical,
		robots: noindex ? 'noindex, nofollow' : 'index, follow'
	};
}

export function generateProductSchema(product) {
	return {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: product.name,
		description: product.description,
		image: product.images,
		brand: {
			'@type': 'Brand',
			name: product.brand
		},
		offers: {
			'@type': 'Offer',
			price: product.price,
			priceCurrency: 'USD',
			availability: 'https://schema.org/InStock',
			url: product.affiliateUrl
		},
		aggregateRating: product.rating ? {
			'@type': 'AggregateRating',
			ratingValue: product.rating.value,
			reviewCount: product.rating.count
		} : undefined
	};
}

export function generateBreadcrumbSchema(breadcrumbs) {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: breadcrumbs.map((crumb, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: crumb.name,
			item: crumb.url
		}))
	};
}