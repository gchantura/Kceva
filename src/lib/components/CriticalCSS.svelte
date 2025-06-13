<script>
  // Component to inline critical CSS for above-the-fold content
  export let inlineStyles = '';
</script>

<svelte:head>
  {#if inlineStyles}
    <style>
      {inlineStyles}
    </style>
  {/if}
</svelte:head>