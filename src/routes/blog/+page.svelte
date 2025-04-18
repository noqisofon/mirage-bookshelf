<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Blog Posts</title>
</svelte:head>

<div class="max-w-4xl mx-auto">
	<h1 class="text-4xl font-bold mb-8">Blog Posts</h1>

	<div class="space-y-8">
		{#each data.posts as post}
			<article class="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
				<h2 class="text-2xl font-semibold mb-2">
					<a href="/blog/posts/{post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400">
						{post.title}
					</a>
				</h2>
				<div class="text-gray-600 dark:text-gray-400 mb-4">
					{new Date(post.date).toLocaleDateString()}
				</div>
				<p class="text-gray-700 dark:text-gray-300">
					{post.description}
				</p>
			</article>
		{/each}
	</div>
</div>
