<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  import { format } from 'date-fns';
</script>

<svelte:head>
  <title>{data.post.title} - うぃーくりー・あんだーわーるど・にゅーす</title>
</svelte:head>

<article class="mx-auto max-w-4xl">
  <header class="mb-8">
    <h1 class="mb-2 text-4xl font-bold">{data.post.title}</h1>
    <div class="text-gray-600 dark:text-gray-400">
      {format(new Date(data.post.date), "yyyy-MM-dd'T'HH:mm")}
    </div>
    {#if data.post.tags && data.post.tags.length > 0}
      <div class="mt-2 flex flex-wrap gap-2">
        {#each data.post.tags as tag}
          <span class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
            {tag}
          </span>
        {/each}
      </div>
    {/if}
  </header>

  <div class="prose dark:prose-invert max-w-none">
    <svelte:component this={data.post.content} />
  </div>
</article>
