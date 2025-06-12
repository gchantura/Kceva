<script>
  export let src;
  export let alt;
  export let width = undefined;
  export let height = undefined;
  export let loading = "lazy";
  export let priority = false;
  export let sizes = undefined;
  export let className = "";

  // Generate WebP and fallback URLs
  $: webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, ".webp");
  $: effectiveLoading = priority ? "eager" : loading;
  $: fetchpriority = priority ? "high" : "auto";
</script>

<picture>
  <source srcset={webpSrc} type="image/webp" {sizes} />
  <img
    {src}
    {alt}
    {width}
    {height}
    loading={effectiveLoading}
    {fetchpriority}
    class={className}
    {sizes}
  />
</picture>
