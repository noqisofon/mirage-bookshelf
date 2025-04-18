interface Post {
	title: string;
	date: string;
	description: string;
	slug: string;
}

interface PostModule {
	metadata: Post;
}

export async function load() {
	const posts: Post[] = [];
	const paths = import.meta.glob<PostModule>('/src/routes/blog/posts/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '') ?? '';
		const metadata = file.metadata;
		const post = { ...metadata, slug };
		posts.push(post);
	}

	return {
		posts: posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
	};
}
