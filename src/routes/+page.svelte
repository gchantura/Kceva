<script>
	import SEOHead from '$lib/components/SEOHead.svelte';
	import { siteConfig } from '$lib/seo.js';
	
	const organizationSchema = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: siteConfig.name,
		description: siteConfig.description,
		url: siteConfig.url,
		logo: `${siteConfig.url}/logo.png`,
		sameAs: [
			'https://twitter.com/kceva',
			'https://facebook.com/kceva',
			'https://instagram.com/kceva'
		]
	};
</script>

<SEOHead
	title="Premium Affiliate Store - Curated Products & Exclusive Deals"
	description="Discover hand-picked products, exclusive deals, and honest reviews. Your trusted source for quality recommendations and smart shopping decisions."
	keywords={['affiliate store', 'product reviews', 'deals', 'shopping', 'curated products']}
	structuredData={organizationSchema}
/>

<main>
	<h1>Welcome to KCEVA</h1>
	<p>Premium affiliate store featuring curated products and deals</p>
	<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
</main>