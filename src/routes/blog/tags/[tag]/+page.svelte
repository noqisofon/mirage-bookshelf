<script lang="ts">
  /** @type {import('./$types').PageData} */
  export let data;
  import { format } from 'date-fns';
</script>

<svelte:head>
  <title>タグ: {data.tag} - うぃーくりー・あんだーわーるど・にゅーす</title>
</svelte:head>

<div class="mx-auto max-w-4xl">
  <div class="mb-8 flex items-center justify-between">
    <h1 class="text-4xl font-bold">タグ: {data.tag}</h1>
    <a href="/blog" class="text-blue-600 hover:underline dark:text-blue-400">← ブログ一覧に戻る</a>
  </div>

  {#if data.posts.length === 0}
    <div class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
      <p class="text-gray-700 dark:text-gray-300">
        タグ「{data.tag}」に一致する記事はありません。
      </p>
    </div>
  {:else}
    <div class="space-y-8">
      {#each data.posts as post}
        <article class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
          <h2 class="mb-2 text-2xl font-semibold">
            <a href="/blog/posts/{post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400">
              {post.title}
            </a>
          </h2>
          <div class="mb-4 text-gray-600 dark:text-gray-400">
            {format(new Date(post.date), "yyyy-MM-dd'T'HH:mm")}
          </div>
          <p class="text-gray-700 dark:text-gray-300">
            {post.description}
          </p>
          {#if post.tags && post.tags.length > 0}
            <div class="mt-2 flex flex-wrap gap-2">
              {#each post.tags as tag}
                <a
                  href="/blog/tags/{tag}"
                  class="rounded-full bg-gray-200 px-2 py-1 text-xs text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                >
                  {tag}
                </a>
              {/each}
            </div>
          {/if}
        </article>
      {/each}
    </div>
  {/if}
</div>
