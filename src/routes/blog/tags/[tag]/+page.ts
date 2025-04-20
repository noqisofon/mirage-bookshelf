import type { Post, PostModule } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }: { params: { tag: string } }) => {
    const tag = params.tag;
    const posts: Post[] = [];
    const paths = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
        const metadata = file.metadata;

        // タグが存在し、指定されたタグを含む記事のみを追加
        if (metadata.tags && metadata.tags.includes(tag)) {
            const post = { ...metadata, slug, date: new Date(metadata.date) };
            posts.push(post);
        }
    }

    return {
        tag,
        posts: posts.sort((a, b) => b.date.getTime() - a.date.getTime())
    };
};
