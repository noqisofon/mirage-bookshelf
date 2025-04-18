<script>
	/** @type {import('./$types').PageData} */
	export let data;

	// 記事のメタデータを取得する関数
	async function getPosts() {
		const posts = [];
		const paths = import.meta.glob('/src/routes/blog/posts/*.md', { eager: true });

		for (const path in paths) {
			const file = paths[path];
			const slug = path.split('/').at(-1)?.replace('.md', '');
			const metadata = file.metadata;
			const post = { ...metadata, slug };
			posts.push(post);
		}

		return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
	}

	const posts = await getPosts();
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<h1 class="mb-8 text-4xl font-bold">Blog Posts</h1>

	<div class="space-y-8">
		{#each posts as post}
			<article class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
				<h2 class="mb-2 text-2xl font-semibold">
					<a href="/blog/posts/{post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400">
						{post.title}
					</a>
				</h2>
				<div class="mb-4 text-gray-600 dark:text-gray-400">
					{new Date(post.date).toLocaleDateString()}
				</div>
				<p class="text-gray-700 dark:text-gray-300">
					{post.description}
				</p>
			</article>
		{/each}
	</div>
</div>
