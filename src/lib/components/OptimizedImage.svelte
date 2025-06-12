<script>
  export let src;
  export let alt;
  export let width = undefined;
  export let height = undefined;
  export let loading = 'lazy';
  export let priority = false;
  export let sizes = undefined;
  export let className = '';
  
  // Generate WebP and fallback URLs
  $: webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  $: avifSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.avif');
  
  // Generate responsive srcset if width is provided
  $: srcset = width ? `${webpSrc} 1x, ${webpSrc.replace('.webp', '@2x.webp')} 2x` : undefined;
</script>

<svelte:head>
  {#if priority}
    <link rel="preload" as="image" href={webpSrc} />
  {/if}
</svelte:head>

<picture>
  <source srcset={avifSrc} type="image/avif" />
  <source srcset={srcset || webpSrc} type="image/webp" />
  <img 
    {src}
    {alt}
    {width}
    {height}
    {loading}
    {sizes}
    class={className}
    decoding="async"
  />
</picture>