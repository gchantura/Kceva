<script>
  import OptimizedImage from "./OptimizedImage.svelte";

  export let product;
  export let showDiscount = true;

  const formatPrice = (price) => `$${price.toFixed(2)}`;
  const formatDiscount = (discount) => `${discount}% OFF`;
</script>

<article
  class="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group product-card hover-lift"
>
  <div class="relative overflow-hidden">
    <OptimizedImage
      src={product.image}
      alt={product.name}
      width="400"
      height="300"
      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      aspectRatio="4/3"
    />
    {#if showDiscount && product.discount > 0}
      <div
        class="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-sm font-semibold"
      >
        {formatDiscount(product.discount)}
      </div>
    {/if}
    <div
      class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>
  </div>

  <div class="p-4">
    <h3 class="font-semibold text-gray-800 mb-2 line-clamp-2 text-sm">
      {product.name}
    </h3>
    <p class="text-gray-600 text-xs mb-3 line-clamp-2">{product.description}</p>

    <!-- Rating -->
    <div class="flex items-center mb-2">
      <div
        class="flex items-center"
        role="img"
        aria-label="Rating: {product.rating} out of 5 stars"
      >
        {#each Array(5) as _, i}
          <svg
            class="w-4 h-4 {i < Math.floor(product.rating)
              ? 'text-yellow-400'
              : 'text-gray-300'}"
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
      <span class="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
    </div>

    <!-- Price with improved contrast -->
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-center space-x-2">
        <span class="text-lg font-bold price-text"
          >{formatPrice(product.price)}</span
        >
        {#if product.originalPrice > product.price}
          <span class="text-sm text-gray-500 line-through"
            >{formatPrice(product.originalPrice)}</span
          >
        {/if}
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex space-x-2">
      <a
        href="/products/{product.id}"
        class="flex-1 bg-blue-600 text-white text-center py-2 px-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        aria-label="View details for {product.name}"
      >
        View Details
      </a>
      <a
        href={product.affiliateUrl}
        target="_blank"
        rel="noopener noreferrer sponsored"
        class="flex-1 bg-green-600 text-white text-center py-2 px-3 rounded-md hover:bg-green-700 transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Buy {product.name} now for {formatPrice(product.price)}"
      >
        View on Amazon
      </a>
    </div>
  </div>
</article>
