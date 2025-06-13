<script>
        import "../app.css";
        import { page } from "$app/stores";
        import { siteConfig, generateMetaTags } from "$lib/seo.js";

        export const data = {};

        // Enhanced meta tags with proper SEO
        $: metaTags = generateMetaTags({
                title: '',
                description: siteConfig.description,
                canonical: siteConfig.url + $page.url.pathname,
        });
</script>

<svelte:head>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta name="keywords" content={metaTags.keywords} />
        <meta name="robots" content={metaTags.robots} />

        <!-- Open Graph -->
        <meta property="og:title" content={metaTags["og:title"]} />
        <meta property="og:description" content={metaTags["og:description"]} />
        <meta property="og:image" content={metaTags["og:image"]} />
        <meta property="og:url" content={metaTags["og:url"]} />
        <meta property="og:type" content={metaTags["og:type"]} />
        <meta property="og:site_name" content={siteConfig.name} />

        <!-- Twitter Card -->
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={siteConfig.twitterHandle} />
        <meta name="twitter:creator" content={siteConfig.twitterHandle} />
        <meta name="twitter:title" content={metaTags["twitter:title"]} />
        <meta name="twitter:description" content={metaTags["twitter:description"]} />
        <meta name="twitter:image" content={metaTags["twitter:image"]} />

        <!-- Canonical URL -->
        <link rel="canonical" href={metaTags.canonical} />

        <!-- Favicon and manifest -->
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        <!-- Performance optimizations -->
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        
        <!-- Resource hints for better performance -->
        <link rel="dns-prefetch" href="//amazon.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />

        <!-- Organization Schema -->
        <script type="application/ld+json">
                {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": siteConfig.name,
                        "description": siteConfig.description,
                        "url": siteConfig.url,
                        "logo": `${siteConfig.url}/logo.png`,
                        "contactPoint": {
                                "@type": "ContactPoint",
                                "contactType": "customer service",
                                "availableLanguage": "English"
                        },
                        "sameAs": [
                                "https://twitter.com/kceva",
                                "https://facebook.com/kceva",
                                "https://instagram.com/kceva"
                        ]
                })}
        </script>
</svelte:head>

<slot />