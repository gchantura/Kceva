<script>
  import { page } from '$app/stores';
  let searchQuery = '';
  let isMobileMenuOpen = false;

  function toggleMobileMenu() {
    isMobileMenuOpen = !isMobileMenuOpen;
  }

  function handleSearch() {
    if (searchQuery.trim()) {
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  }
</script>

<header class="bg-white shadow-md sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <a href="/" class="flex items-center">
          <div class="text-2xl font-bold text-blue-600">KCEVA</div>
          <div class="text-xs text-gray-500 ml-1">Affiliate Store</div>
        </a>
      </div>

      <!-- Desktop Navigation -->
      <nav class="hidden md:flex space-x-8">
        <a href="/" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
        <a href="/category/electronics" class="text-gray-700 hover:text-blue-600 transition-colors">Electronics</a>
        <a href="/category/fashion" class="text-gray-700 hover:text-blue-600 transition-colors">Fashion</a>
        <a href="/category/home-garden" class="text-gray-700 hover:text-blue-600 transition-colors">Home & Garden</a>
        <a href="/category/sports-outdoors" class="text-gray-700 hover:text-blue-600 transition-colors">Sports</a>
        <a href="/blog" class="text-gray-700 hover:text-blue-600 transition-colors">Blog</a>
      </nav>

      <!-- Search Bar -->
      <div class="hidden md:flex flex-1 max-w-lg mx-8">
        <div class="relative w-full">
          <input
            type="text"
            bind:value={searchQuery}
            on:keydown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search products..."
            class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg class="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <button
            on:click={handleSearch}
            class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-blue-600"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5-5 5M6 12h12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Right side buttons -->
      <div class="hidden md:flex items-center space-x-4">
        <button class="text-gray-700 hover:text-blue-600 transition-colors relative">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
        </button>
        <button class="text-gray-700 hover:text-blue-600 transition-colors relative">
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4-2l-1-5H3m4 13a1 1 0 102 0 1 1 0 00-2 0zm10 0a1 1 0 102 0 1 1 0 00-2 0z" />
          </svg>
          <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
        </button>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          type="button"
          on:click={toggleMobileMenu}
          class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="mobile-menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span class="sr-only">Open main menu</span>
          <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {#if isMobileMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    {#if isMobileMenuOpen}
      <div class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
          <!-- Mobile search -->
          <div class="mb-4">
            <input
              type="text"
              bind:value={searchQuery}
              on:keydown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search products..."
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          
          <a href="/" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
          <a href="/category/electronics" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Electronics</a>
          <a href="/category/fashion" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Fashion</a>
          <a href="/category/home-garden" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home & Garden</a>
          <a href="/category/sports-outdoors" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Sports</a>
          <a href="/blog" class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Blog</a>
          
          <div class="flex items-center space-x-4 px-3 py-2">
            <button class="text-gray-700 hover:text-blue-600 transition-colors relative">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span class="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
            <button class="text-gray-700 hover:text-blue-600 transition-colors relative">
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m-.4-2l-1-5H3m4 13a1 1 0 102 0 1 1 0 00-2 0zm10 0a1 1 0 102 0 1 1 0 00-2 0z" />
              </svg>
              <span class="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </button>
          </div>
        </div>
      </div>
    {/if}
  </div>
</header>