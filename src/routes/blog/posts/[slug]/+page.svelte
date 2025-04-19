<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
</script>

<svelte:head>
  <title>{data.post.title} - うぃーくりー・あんだーわーるど・にゅーす</title>
</svelte:head>

<article class="mx-auto max-w-4xl">
  <header class="mb-8">
    <h1 class="mb-2 text-4xl font-bold">{data.post.title}</h1>
    <div class="text-gray-600 dark:text-gray-400">
      {new Date(data.post.date).toLocaleString('ja-JP', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }).replace(/\//g, '-').replace(',', 'T')}
    </div>
  </header>

  <div class="prose dark:prose-invert max-w-none">
    <svelte:component this={data.post.content} />
  </div>
</article>
