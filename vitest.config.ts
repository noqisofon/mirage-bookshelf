import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
    plugins: [svelte({ hot: !process.env.VITEST })],
    test: {
        globals: true,
        environment: 'jsdom',
        include: ['src/**/*.{test,spec}.{js,ts}'],
        setupFiles: ['./vitest.setup.ts'],
        coverage: {
            reporter: ['text', 'json', 'html'],
            exclude: ['node_modules/', 'vitest.setup.ts']
        }
    }
});
