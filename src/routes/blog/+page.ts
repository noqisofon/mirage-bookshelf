import type { Post, PostModule } from '$lib/types';

export async function load() {
    const posts: Post[] = [];
    const paths = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
        const metadata = file.metadata;
        const post = { ...metadata, slug, date: metadata.date ? new Date(metadata.date) : null };
        posts.push(post);
    }

    return {
        posts: posts.sort((a, b) => {
            if (!a.date) return 1;
            if (!b.date) return -1;
            return b.date.getTime() - a.date.getTime();
        })
    };
}
