<script lang="ts">
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>うぃーくりー・あんだーわーるど・にゅーす - Blog Posts</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<h1 class="mb-8 text-4xl font-bold">Blog Posts</h1>

	<div class="space-y-8">
		{#each data.posts as post}
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
