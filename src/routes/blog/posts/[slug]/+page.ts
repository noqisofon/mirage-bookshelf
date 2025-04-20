import type { Post, PostModule } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }: { params: { slug: string } }) => {
    const posts = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });
    const path = Object.keys(posts).find((path) => path.includes(params.slug));

    if (!path) {
        throw new Error(`Post not found: ${params.slug}`);
    }

    const post = posts[path];
    const { metadata } = post;

    return {
        post: {
            ...metadata,
            date: metadata.date ? new Date(metadata.date) : null,
            content: post.default
        }
    };
};
