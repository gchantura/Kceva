<script>
  import { page } from "$app/stores";
  import { browser } from "$app/environment";
  import SEOHead from "$lib/components/SEOHead.svelte";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import ProductCard from "$lib/components/ProductCard.svelte";
  import { searchProducts } from "$lib/data/products.js";

  $: searchQuery = browser ? $page.url.searchParams.get("q") || "" : "";
  $: searchResults = searchQuery ? searchProducts(searchQuery) : [];

  let sortBy = "name";
  let priceRange = "all";

  $: filteredResults = searchResults
    .filter((product) => {
      if (priceRange === "under-50") return product.price < 50;
      if (priceRange === "50-100")
        return product.price >= 50 && product.price <= 100;
      if (priceRange === "100-200")
        return product.price > 100 && product.price <= 200;
      if (priceRange === "over-200") return product.price > 200;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "discount") return b.discount - a.discount;
      return a.name.localeCompare(b.name);
    });
</script>

<SEOHead
  title="Search Results for '{searchQuery}' - Kceva"
  description="Find the best products matching '{searchQuery}' with exclusive deals and honest reviews at Kceva."
  keywords={["search", searchQuery, "products", "deals", "reviews"]}
  noindex={!searchQuery}
/>

<Header />

<main class="min-h-screen bg-gray-50">
  <!-- Search Header -->
  <div class="bg-white border-b">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="text-center">
        {#if searchQuery}
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Results for "{searchQuery}"
          </h1>
          <p class="text-lg text-gray-600">
            {filteredResults.length}
            {filteredResults.length === 1 ? "product" : "products"} found
          </p>
        {:else}
          <h1 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Search Products
          </h1>
          <p class="text-lg text-gray-600">
            Enter a search term to find products
          </p>
        {/if}
      </div>
    </div>
  </div>

  {#if searchQuery}
    <!-- Filters and Sort -->
    <div class="bg-white border-b sticky top-16 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div
          class="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0"
        >
          <!-- Filters -->
          <div class="flex items-center space-x-6">
            <div class="flex items-center space-x-2">
              <label for="price-range" class="text-sm font-medium text-gray-700"
                >Price:</label
              >
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
            <label for="sort-by" class="text-sm font-medium text-gray-700"
              >Sort by:</label
            >
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
      </div>
    </div>

    <!-- Search Results -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {#if filteredResults.length > 0}
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {#each filteredResults as product}
            <ProductCard {product} />
          {/each}
        </div>
      {:else if searchResults.length > 0}
        <div class="text-center py-16">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">
            No products match your filters
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            Try adjusting your price range to see more results.
          </p>
        </div>
      {:else}
        <div class="text-center py-16">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
          <h3 class="mt-2 text-sm font-medium text-gray-900">
            No products found
          </h3>
          <p class="mt-1 text-sm text-gray-500">
            We couldn't find any products matching "{searchQuery}". Try
            searching for something else.
          </p>
          <div class="mt-6">
            <a
              href="/"
              class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Browse All Products
            </a>
          </div>
        </div>
      {/if}
    </div>

    <!-- Search Suggestions -->
    {#if filteredResults.length === 0}
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-lg font-medium text-gray-900 mb-4">
            Popular Searches
          </h3>
          <div class="flex flex-wrap gap-2">
            <a
              href="/search?q=headphones"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              headphones
            </a>
            <a
              href="/search?q=shoes"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              shoes
            </a>
            <a
              href="/search?q=watch"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              watch
            </a>
            <a
              href="/search?q=organizer"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              organizer
            </a>
            <a
              href="/search?q=golf"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors"
            >
              golf
            </a>
          </div>
        </div>
      </div>
    {/if}
  {:else}
    <!-- Empty Search State -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="text-center">
        <svg
          class="mx-auto h-12 w-12 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <h3 class="mt-2 text-sm font-medium text-gray-900">
          Start your search
        </h3>
        <p class="mt-1 text-sm text-gray-500">
          Use the search bar above to find products
        </p>

        <!-- Quick Category Links -->
        <div class="mt-8">
          <h4 class="text-sm font-medium text-gray-900 mb-4">
            Or browse by category:
          </h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <a
              href="/category/electronics"
              class="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div class="text-center">
                <svg
                  class="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900"
                  >Electronics</span
                >
              </div>
            </a>
            <a
              href="/category/fashion"
              class="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div class="text-center">
                <svg
                  class="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  ></path>
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900"
                  >Fashion</span
                >
              </div>
            </a>
            <a
              href="/category/home-garden"
              class="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div class="text-center">
                <svg
                  class="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900"
                  >Home & Garden</span
                >
              </div>
            </a>
            <a
              href="/category/sports-outdoors"
              class="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all"
            >
              <div class="text-center">
                <svg
                  class="mx-auto h-8 w-8 text-gray-400 group-hover:text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  ></path>
                </svg>
                <span class="mt-2 block text-sm font-medium text-gray-900"
                  >Sports & Outdoors</span
                >
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  {/if}
</main>

<Footer />
