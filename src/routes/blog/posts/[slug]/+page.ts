interface Post {
    title: string;
    date: string;
    description: string;
}

interface PostModule {
    metadata: Post;
    default: any;
}

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
            content: post.default
        }
    };
};
