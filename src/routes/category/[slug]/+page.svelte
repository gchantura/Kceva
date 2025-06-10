<script>
  import { page } from '$app/stores';
  import SEOHead from '$lib/components/SEOHead.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { categories, getProductsByCategory } from '$lib/data/products.js';
  
  $: categorySlug = $page.params.slug;
  $: category = categories.find(c => c.slug === categorySlug);
  $: products = category ? getProductsByCategory(category.id) : [];
  
  let sortBy = 'name';
  let priceRange = 'all';
  let showFilters = false;
  
  $: filteredProducts = products.filter(product => {
    if (priceRange === 'under-50') return product.price < 50;
    if (priceRange === '50-100') return product.price >= 50 && product.price <= 100;
    if (priceRange === '100-200') return product.price > 100 && product.price <= 200;
    if (priceRange === 'over-200') return product.price > 200;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'discount') return b.discount - a.discount;
    return a.name.localeCompare(b.name);
  });
</script>

{#if category}
  <SEOHead
    title="{category.name} - Best Deals & Reviews"
    description="Discover the best {category.name.toLowerCase()} products with exclusive deals, honest reviews, and expert recommendations."
    keywords={[category.name.toLowerCase(), 'best', 'deals', 'reviews', 'products']}
    ogImage={category.image}
  />
{:else}
  <SEOHead
    title="Category Not Found"
    description="The category you're looking for could not be found."
    noindex={true}
  />
{/if}

<Header />

<main class="min-h-screen bg-gray-50">
  {#if category}
    <!-- Category Header -->
    <div class="relative bg-gray-900 text-white">
      <div class="absolute inset-0">
        <img 
          src={category.image} 
          alt={category.name}
          class="w-full h-full object-cover opacity-30"
        />
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <!-- Breadcrumbs -->
        <nav class="flex mb-8" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-4">
            <li>
              <a href="/" class="text-gray-300 hover:text-white">Home</a>
            </li>
            <li>
              <svg class="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li class="text-white font-medium">{category.name}</li>
          </ol>
        </nav>
        
        <div class="text-center">
          <h1 class="text-4xl md:text-5xl font-bold mb-4">{category.name}</h1>
          <p class="text-xl text-gray-200 max-w-2xl mx-auto">{category.description}</p>
          <p class="mt-4 text-gray-300">{products.length} products available</p>
        </div>
      </div>
    </div>

    <!-- Filters and Sort -->
    <div class="bg-white border-b sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <!-- Mobile Filter Toggle -->
          <button
            on:click={() => showFilters = !showFilters}
            class="sm:hidden bg-gray-100 px-4 py-2 rounded-lg flex items-center"
          >
            <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
            </svg>
            Filters
          </button>

          <!-- Desktop Filters -->
          <div class="hidden sm:flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <label for="price-range" class="text-sm font-medium text-gray-700">Price:</label>
              <select 
                id="price-range"
                bind:value={priceRange}
                class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="over-200">Over $200</option>
              </select>
            </div>
          </div>

          <!-- Sort Options -->
          <div class="flex items-center space-x-2">
            <label for="sort-by" class="text-sm font-medium text-gray-700">Sort by:</label>
            <select 
              id="sort-by"
              bind:value={sortBy}
              class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="name">Name</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="discount">Best Deals</option>
            </select>
          </div>
        </div>

        <!-- Mobile Filters -->
        {#if showFilters}
          <div class="mt-4 p-4 border-t border-gray-200 sm:hidden">
            <div class="flex items-center space-x-2">
              <label for="mobile-price-range" class="text-sm font-medium text-gray-700">Price:</label>
              <select 
                id="mobile-price-range"
                bind:value={priceRange}
                class="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Prices</option>
                <option value="under-50">Under $50</option>
                <option value="50-100">$50 - $100</option>
                <option value="100-200">$100 - $200</option>
                <option value="over-200">Over $200</option>
              </select>
            </div>
          </div>
        {/if}
      </div>
    </div>

    <!-- Products Grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {#if filteredProducts.length > 0}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {#each filteredProducts as product}
            <ProductCard {product} />
          {/each}
        </div>
      {:else}
        <div class="text-center py-16">
          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2m0 0v6h4v-6m0 0h8v6h4v-6"></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">No products found</h3>
          <p class="mt-1 text-sm text-gray-500">Try adjusting your filters to see more results.</p>
        </div>
      {/if}
    </div>
  {:else}
    <!-- Category Not Found -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
        <p class="text-lg text-gray-600 mb-8">The category you're looking for could not be found.</p>
        <a href="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  {/if}
</main>

<Footer />