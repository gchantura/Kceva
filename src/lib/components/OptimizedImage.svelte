<script>
  import { onMount } from 'svelte';
  
  export let src;
  export let alt;
  export let width = undefined;
  export let height = undefined;
  export let loading = "lazy";
  export let priority = false;
  export let sizes = undefined;
  export let className = "";
  export let aspectRatio = undefined;

  // Generate optimized URLs for different sizes
  function generateSrcSet(originalSrc) {
    if (!originalSrc) return '';
    
    // For Unsplash images
    if (originalSrc.includes('unsplash.com')) {
      const baseUrl = originalSrc.split('?')[0];
      return [
        `${baseUrl}?auto=format&fit=crop&w=400&q=75 400w`,
        `${baseUrl}?auto=format&fit=crop&w=800&q=75 800w`,
        `${baseUrl}?auto=format&fit=crop&w=1200&q=75 1200w`,
        `${baseUrl}?auto=format&fit=crop&w=1600&q=75 1600w`
      ].join(', ');
    }
    
    // For Pexels images
    if (originalSrc.includes('pexels.com')) {
      const baseUrl = originalSrc.split('?')[0];
      return [
        `${baseUrl}?auto=compress&cs=tinysrgb&w=400&h=300 400w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=800&h=600 800w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=1200&h=900 1200w`,
        `${baseUrl}?auto=compress&cs=tinysrgb&w=1600&h=1200 1600w`
      ].join(', ');
    }
    
    return '';
  }

  // Generate optimized src for default size
  function generateOptimizedSrc(originalSrc, targetWidth = 800) {
    if (!originalSrc) return originalSrc;
    
    if (originalSrc.includes('unsplash.com')) {
      return `${originalSrc.split('?')[0]}?auto=format&fit=crop&w=${targetWidth}&q=80`;
    }
    
    if (originalSrc.includes('pexels.com')) {
      const aspectHeight = Math.round(targetWidth * 0.75); // 4:3 aspect ratio
      return `${originalSrc.split('?')[0]}?auto=compress&cs=tinysrgb&w=${targetWidth}&h=${aspectHeight}`;
    }
    
    return originalSrc;
  }

  $: srcSet = generateSrcSet(src);
  $: optimizedSrc = generateOptimizedSrc(src, width || 800);
  $: effectiveLoading = priority ? "eager" : loading;
  $: fetchpriority = priority ? "high" : "auto";
  $: defaultSizes = sizes || "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";

  let imgElement;
  let loaded = false;
  let error = false;

  onMount(() => {
    if (imgElement && priority) {
      // Preload critical images
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.href = optimizedSrc;
      document.head.appendChild(link);
    }
  });

  function handleLoad() {
    loaded = true;
  }

  function handleError() {
    error = true;
  }
</script>

<div class="relative overflow-hidden {className}" style={aspectRatio ? `aspect-ratio: ${aspectRatio}` : ''}>
  <picture>
    <!-- WebP format for modern browsers -->
    {#if srcSet}
      <source 
        srcset={srcSet.replace(/\.(jpg|jpeg|png)/gi, '.webp')} 
        type="image/webp" 
        sizes={defaultSizes}
      />
    {/if}
    
    <!-- Fallback format -->
    <img
      bind:this={imgElement}
      src={optimizedSrc}
      srcset={srcSet}
      {alt}
      {width}
      {height}
      loading={effectiveLoading}
      {fetchpriority}
      sizes={defaultSizes}
      class="w-full h-full object-cover transition-opacity duration-300 {loaded ? 'opacity-100' : 'opacity-0'}"
      on:load={handleLoad}
      on:error={handleError}
      decoding="async"
    />
  </picture>
  
  <!-- Loading placeholder -->
  {#if !loaded && !error}
    <div class="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
      <svg class="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  {/if}
  
  <!-- Error fallback -->
  {#if error}
    <div class="absolute inset-0 bg-gray-100 flex items-center justify-center">
      <span class="text-gray-500 text-sm">Image unavailable</span>
    </div>
  {/if}
</div>