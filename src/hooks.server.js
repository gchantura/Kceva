import { sequence } from '@sveltejs/kit/hooks';

// Enhanced Security and Performance Headers
const securityHeaders = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	// Security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=(), payment=()');
	
	// Enhanced HSTS with preload
	response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
	
	// Cross-Origin Opener Policy
	response.headers.set('Cross-Origin-Opener-Policy', 'same-origin');
	
	// Content Security Policy
	const csp = [
		"default-src 'self'",
		"img-src 'self' https://images.unsplash.com https://images.pexels.com https://*.unsplash.com https://*.pexels.com data:",
		"script-src 'self' 'unsafe-inline'",
		"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
		"font-src 'self' https://fonts.gstatic.com",
		"connect-src 'self' https://api.unsplash.com https://api.pexels.com",
		"frame-ancestors 'none'",
		"base-uri 'self'",
		"form-action 'self'"
	].join('; ');
	
	response.headers.set('Content-Security-Policy', csp);
	
	// SEO headers
	response.headers.set('X-Robots-Tag', 'index, follow');
	
	// Performance headers
	if (event.url.pathname.endsWith('.css')) {
		response.headers.set('Content-Type', 'text/css; charset=utf-8');
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}
	
	if (event.url.pathname.match(/\.(js|woff2?|png|jpg|jpeg|webp|svg)$/)) {
		response.headers.set('Cache-Control', 'public, max-age=31536000, immutable');
	}
	
	return response;
};

export const handle = sequence(securityHeaders);