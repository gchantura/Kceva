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
					vendor: ['svelte']
				}
			}
		},
		cssCodeSplit: true,
		minify: 'terser',
		terserOptions: {
			compress: {
				drop_console: true,
				drop_debugger: true,
				pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
			},
			mangle: {
				safari10: true
			}
		},
		// Optimize chunk size
		chunkSizeWarningLimit: 1000,
		// Enable source maps for production debugging
		sourcemap: false
	},
	server: {
		preTransformRequests: true
	},
	// CSS optimization
	css: {
		devSourcemap: true
	},
	// Optimize dependencies
	optimizeDeps: {
		include: ['svelte/store', 'svelte/internal']
	}
});