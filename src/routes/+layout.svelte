<script>
        import '../app.css';
        import { page } from '$app/stores';
        import { siteConfig } from '$lib/seo.js';
        
        export let data;
        
        // Default meta tags
        $: metaTags = {
                title: siteConfig.name,
                description: siteConfig.description,
                'og:title': siteConfig.name,
                'og:description': siteConfig.description,
                'og:image': siteConfig.ogImage,
                'og:url': siteConfig.url,
                'twitter:title': siteConfig.name,
                'twitter:description': siteConfig.description,
                'twitter:image': siteConfig.ogImage,
                canonical: siteConfig.url + $page.url.pathname
        };
</script>

<svelte:head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={siteConfig.keywords.join(', ')} />
        
        <!-- Open Graph -->
        <meta property="og:title" content={metaTags['og:title']} />
        <meta property="og:description" content={metaTags['og:description']} />
        <meta property="og:image" content={metaTags['og:image']} />
        <meta property="og:url" content={metaTags['og:url']} />
        
        <!-- Twitter -->
        <meta name="twitter:title" content={metaTags['twitter:title']} />
        <meta name="twitter:description" content={metaTags['twitter:description']} />
        <meta name="twitter:image" content={metaTags['twitter:image']} />
        
        <!-- Canonical -->
        <link rel="canonical" href={metaTags.canonical} />
</svelte:head>

<slot></slot>