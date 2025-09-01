<script>
  import OptimizedImage from "./OptimizedImage.svelte";

  export let product;
  export let showDiscount = true;

  const formatPrice = (price) => `$${price.toFixed(2)}`;
  const formatDiscount = (discount) => `${discount}% OFF`;
</script>

<article
  class="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group product-card hover-lift"
>
  <div class="relative overflow-hidden">
    <OptimizedImage
      src={product.image}
      alt={product.name}
      width="400"
      height="300"
      className="w-full h-56 object-cover group-hover:scale-102 transition-transform duration-500"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      aspectRatio="4/3"
    />
    {#if showDiscount && product.discount > 0}
      <div class="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        {formatDiscount(product.discount)}
      </div>
    {/if}
  </div>

  <div class="p-6">
    <h3 class="font-medium text-gray-900 mb-2 line-clamp-2 text-lg leading-snug">
      {product.name}
    </h3>
    <p class="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">{product.description}</p>

    <!-- Apple-style Rating -->
    <div class="flex items-center mb-4">
      <div class="flex items-center" role="img" aria-label="Rating: {product.rating} out of 5 stars">
        {#each Array(5) as _, i}
          <svg
            class="w-4 h-4 {i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}"
            fill="currentColor"
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        {/each}
      </div>
      <span class="text-sm text-gray-500 ml-2">({product.reviewCount})</span>
    </div>

    <!-- Apple-style Price -->
    <div class="flex items-center justify-between mb-6">
      <div class="flex items-center space-x-2">
        <span class="text-2xl font-semibold price-text">{formatPrice(product.price)}</span>
        {#if product.originalPrice > product.price}
          <span class="text-lg text-gray-500 line-through">{formatPrice(product.originalPrice)}</span>
        {/if}
      </div>
    </div>

    <!-- Apple-style Action Buttons -->
    <div class="flex space-x-3">
      <a
        href="/products/{product.id}"
        class="flex-1 bg-gray-100 text-gray-900 text-center py-3 px-4 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        aria-label="View details for {product.name}"
      >
        View Details
      </a>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="flex-1 bg-apple-blue text-white text-center py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-apple-blue focus:ring-offset-2"
        aria-label="Buy {product.name} now for {formatPrice(product.price)}"
        style="background-color: var(--apple-blue);"
      >
        Buy Now
      </a>
    </div>
  </div>
</article>
