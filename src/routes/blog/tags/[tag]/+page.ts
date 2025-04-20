interface Post {
    title: string;
    date: string;
    description: string;
    slug: string;
    tags?: string[];
}

interface PostModule {
    metadata: Post;
}

import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
    const tag = params.tag;
    const posts: Post[] = [];
    const paths = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
        const metadata = file.metadata;
        
        // タグが存在し、指定されたタグを含む記事のみを追加
        if (metadata.tags && metadata.tags.includes(tag)) {
            const post = { ...metadata, slug };
            posts.push(post);
        }
    }

    return {
        tag,
        posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    };
}; 
