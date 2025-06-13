// Enhanced SEO utilities and constants
export const siteConfig = {
	name: 'KC Eva',
	description: 'Discover premium lifestyle and chess gear hand-picked for families, kids, and enthusiasts. Curated collections, exclusive deals, and fun educational finds.',
	url: 'https://www.kceva.com',
	ogImage: 'https://www.kceva.com/images/og-cover.jpg',
	twitterHandle: '@kceva',
	keywords: [
		'premium lifestyle gear',
		'chess equipment',
		'family products',
		'educational toys',
		'curated collections',
		'exclusive deals',
		'kids chess sets',
		'lifestyle accessories'
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
	const fullTitle = title ? `${title} | ${siteConfig.name}` : `${siteConfig.name} – Premium Lifestyle & Chess Gear`;
	
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
		image: [product.image],
		brand: {
			'@type': 'Brand',
			name: product.brand
		},
		offers: {
			'@type': 'Offer',
			price: product.price.toString(),
			priceCurrency: 'USD',
			availability: product.inStock ? 'https://schema.org/InStock' : 'https://schema.org/OutOfStock',
			url: product.affiliateUrl,
			priceValidUntil: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
		},
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: product.rating.toString(),
			reviewCount: product.reviewCount.toString(),
			bestRating: '5',
			worstRating: '1'
		},
		sku: `KCEVA-${product.id}`,
		mpn: `${product.brand}-${product.id}`,
		category: product.category
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

export function generateOrganizationSchema() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		logo: `${siteConfig.url}/logo.png`,
		contactPoint: {
			'@type': 'ContactPoint',
			contactType: 'customer service',
			availableLanguage: 'English'
		},
		sameAs: [
			'https://twitter.com/kceva',
			'https://facebook.com/kceva',
			'https://instagram.com/kceva'
		]
	};
}