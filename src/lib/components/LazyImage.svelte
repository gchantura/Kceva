<script>
  import { onMount } from 'svelte';
  
  export let src;
  export let alt;
  export let width = undefined;
  export let height = undefined;
  export let className = '';
  export let placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PC9zdmc+';
  
  let imgElement;
  let loaded = false;
  let inView = false;
  
  onMount(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            inView = true;
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '50px' }
    );
    
    if (imgElement) {
      observer.observe(imgElement);
    }
    
    return () => observer.disconnect();
  });
  
  function handleLoad() {
    loaded = true;
  }
</script>

<div bind:this={imgElement} class="relative overflow-hidden {className}">
  {#if inView}
    <img
      {src}
      {alt}
      {width}
      {height}
      class="transition-opacity duration-300 {loaded ? 'opacity-100' : 'opacity-0'}"
      on:load={handleLoad}
      loading="lazy"
      decoding="async"
    />
  {/if}
  
  {#if !loaded}
    <img
      src={placeholder}
      {alt}
      {width}
      {height}
      class="absolute inset-0 w-full h-full object-cover"
      aria-hidden="true"
    />
  {/if}
</div>