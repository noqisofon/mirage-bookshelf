import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeHighlight from 'rehype-highlight';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),
        files: {
            assets: 'static'
        }
    },
    extensions: ['.svelte', '.md'],
    preprocess: [
        vitePreprocess(),
        mdsvex({
            extensions: ['.md'],
            rehypePlugins: [rehypeHighlight]
        })
    ]
};

export default config;
