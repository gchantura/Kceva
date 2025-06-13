<script>
  import OptimizedImage from './OptimizedImage.svelte';
  
  export let category;
</script>

<a href="/category/{category.slug}" class="group block focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg">
  <article class="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105 hover-lift">
    <div class="relative overflow-hidden">
      <OptimizedImage
        src={category.image}
        alt={category.name}
        width="400"
        height="240"
        className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
        aspectRatio="5/3"
      />
      <div class="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300"></div>
      <div class="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h3 class="text-xl font-bold mb-2 text-center">{category.name}</h3>
        <p class="text-sm text-center px-4 opacity-90">{category.description}</p>
      </div>
    </div>
  </article>
</a>