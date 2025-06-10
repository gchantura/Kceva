<script>
  import { page } from '$app/stores';
  import SEOHead from '$lib/components/SEOHead.svelte';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import ProductCard from '$lib/components/ProductCard.svelte';
  import { getProductById, allProducts, generateProductSchema } from '$lib/data/products.js';
  import { generateBreadcrumbSchema } from '$lib/seo.js';
  
  $: productId = $page.params.id;
  $: product = getProductById(productId);
  $: relatedProducts = product ? allProducts.filter(p => 
    p.category === product.category && p.id !== product.id
  ).slice(0, 3) : [];
  
  $: breadcrumbs = product ? [
    { name: 'Home', url: 'https://kceva.com/' },
    { name: 'Products', url: 'https://kceva.com/products' },
    { name: product.name, url: `https://kceva.com/products/${product.id}` }
  ] : [];
  
  $: productSchema = product ? generateProductSchema(product) : null;
  $: breadcrumbSchema = breadcrumbs.length > 0 ? generateBreadcrumbSchema(breadcrumbs) : null;

  function addToWishlist() {
    // Wishlist functionality - would integrate with store
    alert('Added to wishlist!');
  }

  function addToCart() {
    // Cart functionality - would integrate with store
    alert('Added to cart!');
  }
</script>

{#if product}
  <SEOHead
    title="{product.name} - Best Price & Reviews"
    description={product.description}
    keywords={[product.name, product.brand, product.category, 'review', 'best price']}
    ogImage={product.image}
    structuredData={[productSchema, breadcrumbSchema]}
  />
{:else}
  <SEOHead
    title="Product Not Found"
    description="The product you're looking for could not be found."
    noindex={true}
  />
{/if}

<Header />

<main class="min-h-screen bg-gray-50">
  {#if product}
    <!-- Breadcrumbs -->
    <div class="bg-white border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav class="flex" aria-label="Breadcrumb">
          <ol class="flex items-center space-x-4">
            <li>
              <a href="/" class="text-gray-400 hover:text-gray-600">Home</a>
            </li>
            <li>
              <svg class="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li>
              <a href="/category/{product.category}" class="text-gray-400 hover:text-gray-600 capitalize">{product.category.replace('-', ' ')}</a>
            </li>
            <li>
              <svg class="flex-shrink-0 h-5 w-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </li>
            <li class="text-gray-700 font-medium">{product.name}</li>
          </ol>
        </nav>
      </div>
    </div>

    <!-- Product Details -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
        <!-- Product Image -->
        <div class="flex flex-col-reverse">
          <div class="w-full aspect-square">
            <img
              src={product.image}
              alt={product.name}
              class="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <!-- Product Info -->
        <div class="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
          <h1 class="text-3xl font-bold tracking-tight text-gray-900">{product.name}</h1>
          
          <!-- Rating -->
          <div class="mt-3 flex items-center">
            <div class="flex items-center">
              {#each Array(5) as _, i}
                <svg 
                  class="h-5 w-5 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}" 
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              {/each}
            </div>
            <span class="ml-2 text-sm text-gray-600">{product.rating} ({product.reviewCount} reviews)</span>
          </div>

          <!-- Price -->
          <div class="mt-4">
            <div class="flex items-center">
              <span class="text-3xl font-bold text-green-600">${product.price.toFixed(2)}</span>
              {#if product.originalPrice > product.price}
                <span class="ml-4 text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                <span class="ml-2 bg-red-100 text-red-800 text-sm font-medium px-2.5 py-0.5 rounded">
                  {product.discount}% OFF
                </span>
              {/if}
            </div>
            <p class="mt-1 text-sm text-gray-600">Free shipping on orders over $50</p>
          </div>

          <!-- Description -->
          <div class="mt-6">
            <h3 class="sr-only">Description</h3>
            <p class="text-base text-gray-700">{product.description}</p>
          </div>

          <!-- Features -->
          <div class="mt-6">
            <h3 class="text-sm font-medium text-gray-900">Key Features</h3>
            <ul class="mt-4 grid grid-cols-1 gap-y-2">
              {#each product.features as feature}
                <li class="flex items-center">
                  <svg class="h-5 w-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="text-sm text-gray-700">{feature}</span>
                </li>
              {/each}
            </ul>
          </div>

          <!-- Actions -->
          <div class="mt-8 flex flex-col space-y-4">
            <a
              href={product.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              class="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Buy Now - ${product.price.toFixed(2)}
            </a>
            <div class="flex space-x-4">
              <button
                on:click={addToCart}
                class="flex-1 bg-gray-100 border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                Add to Cart
              </button>
              <button
                on:click={addToWishlist}
                class="flex-1 bg-gray-100 border border-gray-300 rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              >
                <svg class="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                Wishlist
              </button>
            </div>
          </div>

          <!-- Stock Status -->
          <div class="mt-4">
            {#if product.inStock}
              <p class="text-green-600 text-sm flex items-center">
                <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
                In Stock - Fast Shipping
              </p>
            {:else}
              <p class="text-red-600 text-sm">Currently Out of Stock</p>
            {/if}
          </div>

          <!-- Affiliate Disclosure -->
          <div class="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-md">
            <p class="text-xs text-yellow-800">
              <strong>Affiliate Disclosure:</strong> We may earn a commission from qualifying purchases made through our affiliate links. This comes at no additional cost to you and helps support our website.
            </p>
          </div>
        </div>
      </div>

      <!-- Related Products -->
      {#if relatedProducts.length > 0}
        <div class="mt-16">
          <h2 class="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {#each relatedProducts as relatedProduct}
              <ProductCard product={relatedProduct} />
            {/each}
          </div>
        </div>
      {/if}
    </div>
  {:else}
    <!-- Product Not Found -->
    <div class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-4xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p class="text-lg text-gray-600 mb-8">The product you're looking for could not be found.</p>
        <a href="/" class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
          Return Home
        </a>
      </div>
    </div>
  {/if}
</main>

<Footer />