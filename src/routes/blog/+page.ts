import type { Post, PostModule } from '$lib/types';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ url }) => {
    const posts: Post[] = [];
    const paths = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });

    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
        const metadata = file.metadata;
        const post = { ...metadata, slug, date: metadata.date ? new Date(metadata.date) : null };
        posts.push(post);
    }

    // Sort posts by date (newest first)
    const sortedPosts = posts.sort((a, b) => {
        if (!a.date) return 1;
        if (!b.date) return -1;
        return b.date.getTime() - a.date.getTime();
    });

    // Pagination
    const pageSize = 5; // Number of posts per page
    const pageParam = url.searchParams.get('page');
    const currentPage = pageParam ? parseInt(pageParam, 10) : 1;

    // Calculate pagination values
    const totalPosts = sortedPosts.length;
    const totalPages = Math.ceil(totalPosts / pageSize);
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize, totalPosts);

    // Get posts for current page
    const paginatedPosts = sortedPosts.slice(startIndex, endIndex);

    return {
        posts: paginatedPosts,
        pagination: {
            currentPage,
            totalPages,
            hasNextPage: currentPage < totalPages,
            hasPrevPage: currentPage > 1,
            nextPage: currentPage < totalPages ? currentPage + 1 : null,
            prevPage: currentPage > 1 ? currentPage - 1 : null
        }
    };
};
