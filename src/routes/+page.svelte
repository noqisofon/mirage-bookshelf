<script lang="ts">
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>うぃーくりー・あんだーわーるど・にゅーす</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
	<div class="mb-12 text-center">
		<h1 class="mb-4 text-5xl font-bold">うぃーくりー・あんだーわーるど・にゅーす</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400">
			週刊アンダーワールドニュース - ファンタジー世界の最新情報をお届けします
		</p>
	</div>

	<div class="mb-12 rounded-lg bg-white p-8 shadow dark:bg-gray-800">
		<h2 class="mb-4 text-3xl font-bold">最新の記事</h2>
		<p class="mb-6 text-gray-700 dark:text-gray-300">
			最新のファンタジー世界のニュースや出来事をお届けします。
		</p>
		<a
			href="/blog"
			class="inline-block rounded-md bg-blue-600 px-6 py-3 text-white transition-colors hover:bg-blue-700"
		>
			ブログ記事を見る
		</a>
	</div>

	<div class="grid gap-8 md:grid-cols-2">
		<div class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
			<h3 class="mb-3 text-2xl font-bold">魔法の研究</h3>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				最新の魔法研究や新しい呪文の発見についての情報をお届けします。
			</p>
			<a href="/blog" class="text-blue-600 hover:underline dark:text-blue-400">もっと見る →</a>
		</div>

		<div class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
			<h3 class="mb-3 text-2xl font-bold">冒険者ニュース</h3>
			<p class="mb-4 text-gray-700 dark:text-gray-300">
				冒険者たちの活躍や、新しく発見されたダンジョンについての情報をお届けします。
			</p>
			<a href="/blog" class="text-blue-600 hover:underline dark:text-blue-400">もっと見る →</a>
		</div>
	</div>
</div>
