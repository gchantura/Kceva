import { sequence } from '@sveltejs/kit/hooks';

// SEO and Security Headers
const securityHeaders = async ({ event, resolve }) => {
	const response = await resolve(event);
	
	// Security headers
	response.headers.set('X-Frame-Options', 'DENY');
	response.headers.set('X-Content-Type-Options', 'nosniff');
	response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
	response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
	
	// SEO headers
	response.headers.set('X-Robots-Tag', 'index, follow');
	
	return response;
};

export const handle = sequence(securityHeaders);