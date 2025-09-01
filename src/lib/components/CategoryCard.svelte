<script>
  import OptimizedImage from './OptimizedImage.svelte';
  
  export let category;
</script>

<a href="/category/{category.slug}" class="group block focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 rounded-xl">
  <article class="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all duration-300 overflow-hidden group-hover:scale-102 hover-lift">
    <div class="relative overflow-hidden">
      <OptimizedImage
        src={category.image}
        alt={category.name}
        width="400"
        height="240"
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        aspectRatio="5/3"
      />
      <div class="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-10 transition-all duration-300"></div>
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
        <h3 class="text-2xl font-medium mb-3 text-center tracking-tight">{category.name}</h3>
        <p class="text-sm text-center opacity-90 leading-relaxed">{category.description}</p>
      </div>
    </div>
  </article>
</a>