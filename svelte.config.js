import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter({
            routes: {
                include: ['/*'],
                exclude: ['<all>']
            },
            platformProxy: {
                configPath: 'wrangler.toml',
                environment: undefined,
                experimentalJsonConfig: false,
                persist: false
            }
        })
    },
    extensions: ['.svelte', '.md'],
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md']
        })
    ]
};

export default config;
