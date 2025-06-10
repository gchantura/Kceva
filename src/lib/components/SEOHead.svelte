<script>
        import { generateMetaTags } from '$lib/seo.js';
        
        export let title;
        export let description;
        export let keywords;
        export let ogImage;
        export let ogType = 'website';
        export let canonical;
        export let noindex = false;
        export let structuredData;
        
        $: metaTags = generateMetaTags({
                title,
                description,
                keywords,
                ogImage,
                ogType,
                canonical,
                noindex
        });
</script>

<svelte:head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="robots" content={metaTags.robots} />
        
        <!-- Open Graph -->
        <meta property="og:title" content={metaTags['og:title']} />
        <meta property="og:description" content={metaTags['og:description']} />
        <meta property="og:image" content={metaTags['og:image']} />
        <meta property="og:type" content={metaTags['og:type']} />
        <meta property="og:url" content={metaTags['og:url']} />
        
        <!-- Twitter -->
        <meta name="twitter:title" content={metaTags['twitter:title']} />
        <meta name="twitter:description" content={metaTags['twitter:description']} />
        <meta name="twitter:image" content={metaTags['twitter:image']} />
        
        <!-- Canonical -->
        {#if metaTags.canonical}
                <link rel="canonical" href={metaTags.canonical} />
        {/if}
        
        <!-- Structured Data -->
        {#if structuredData}
                {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
        {/if}
</svelte:head>