<script>
        import SEOHead from '$lib/components/SEOHead.svelte';
        import Header from '$lib/components/Header.svelte';
        import Footer from '$lib/components/Footer.svelte';
        import ProductCard from '$lib/components/ProductCard.svelte';
        import CategoryCard from '$lib/components/CategoryCard.svelte';
        import { siteConfig } from '$lib/seo.js';
        import { categories, getFeaturedProducts } from '$lib/data/products.js';
        
        const featuredProducts = getFeaturedProducts();
        
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

<Header />

<main>
        <!-- Hero Section -->
        <section class="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
                <div class="absolute inset-0">
                        <img 
                                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg" 
                                alt="Modern eCommerce Shopping" 
                                class="w-full h-full object-cover opacity-20"
                        />
                </div>
                <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                        <div class="text-center">
                                <h1 class="text-4xl md:text-6xl font-bold mb-6">
                                        Discover Premium Products
                                        <span class="block text-3xl md:text-5xl text-blue-300">Curated Just for You</span>
                                </h1>
                                <p class="text-xl md:text-2xl mb-8 max-w-3xl mx-auto text-gray-200">
                                        Hand-picked products, exclusive deals, and honest reviews. Your trusted source for smart shopping decisions.
                                </p>
                                <div class="flex flex-col sm:flex-row gap-4 justify-center">
                                        <a href="#featured" class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                                                Shop Featured Products
                                        </a>
                                        <a href="#categories" class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                                                Browse Categories
                                        </a>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Featured Categories -->
        <section id="categories" class="py-16 bg-gray-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-12">
                                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Shop by Category</h2>
                                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                                        Explore our carefully curated categories featuring the best products in each segment.
                                </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {#each categories as category}
                                        <CategoryCard {category} />
                                {/each}
                        </div>
                </div>
        </section>

        <!-- Featured Products -->
        <section id="featured" class="py-16 bg-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-12">
                                <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
                                <p class="text-lg text-gray-600 max-w-2xl mx-auto">
                                        Top-rated products with exclusive deals. Limited time offers you don't want to miss.
                                </p>
                        </div>
                        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {#each featuredProducts as product}
                                        <ProductCard {product} />
                                {/each}
                        </div>
                        <div class="text-center mt-12">
                                <a href="/products" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                                        View All Products
                                </a>
                        </div>
                </div>
        </section>

        <!-- Trust Indicators -->
        <section class="py-16 bg-gray-900 text-white">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="text-center mb-12">
                                <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose KCEVA?</h2>
                                <p class="text-lg text-gray-300 max-w-2xl mx-auto">
                                        Your trusted partner for informed shopping decisions and exclusive deals.
                                </p>
                        </div>
                        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div class="text-center">
                                        <div class="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                                </svg>
                                        </div>
                                        <h3 class="text-xl font-semibold mb-2">Trusted Reviews</h3>
                                        <p class="text-gray-300">Honest, unbiased reviews from real users to help you make informed decisions.</p>
                                </div>
                                <div class="text-center">
                                        <div class="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                                                </svg>
                                        </div>
                                        <h3 class="text-xl font-semibold mb-2">Best Prices</h3>
                                        <p class="text-gray-300">We track prices across multiple retailers to ensure you get the best deals.</p>
                                </div>
                                <div class="text-center">
                                        <div class="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                        </div>
                                        <h3 class="text-xl font-semibold mb-2">Fast Updates</h3>
                                        <p class="text-gray-300">Get notified about flash sales, new arrivals, and limited-time offers instantly.</p>
                                </div>
                        </div>
                </div>
        </section>

        <!-- Newsletter Signup -->
        <section class="py-16 bg-blue-50">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div class="max-w-2xl mx-auto text-center">
                                <h2 class="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                                <p class="text-lg text-gray-600 mb-8">
                                        Get exclusive deals, product recommendations, and early access to sales delivered to your inbox.
                                </p>
                                <form class="flex flex-col sm:flex-row gap-4">
                                        <input 
                                                type="email" 
                                                placeholder="Enter your email address"
                                                class="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                required
                                        />
                                        <button 
                                                type="submit"
                                                class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                                        >
                                                Subscribe
                                        </button>
                                </form>
                                <p class="text-sm text-gray-500 mt-4">
                                        No spam, unsubscribe anytime. We respect your privacy.
                                </p>
                        </div>
                </div>
        </section>
</main>

<Footer />