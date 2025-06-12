import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit()
	],
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					// Only vendor dependencies (remove 'components' chunk)
					vendor: ['svelte']
				}
			}
		},
		cssCodeSplit: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,  // Remove console.* in production
				drop_debugger: true // Remove debugger statements
			}
		}
	},
	// Removed optimizeDeps (SvelteKit handles this automatically)
	server: {
		// Enable pre-transform for faster HMR (optional)
		preTransformRequests: true
	}
});