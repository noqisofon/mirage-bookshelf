<script lang="ts">
  import { format } from 'date-fns';

  export let title: string;
  export let description: string;
  export let date: Date | null = null;
  export let slug: string;
  export let tags: string[] = [];
</script>

<article class="rounded-lg bg-white p-6 shadow dark:bg-gray-800">
  <h2 class="mb-2 text-2xl font-semibold">
    <a href="/blog/posts/{slug}" class="hover:text-blue-600 dark:hover:text-blue-400">
      {title}
    </a>
  </h2>
  <div class="mb-4 text-gray-600 dark:text-gray-400">
    {#if date}
      {format(date, "yyyy-MM-dd'T'HH:mm")}
    {/if}
  </div>
  <p class="text-gray-700 dark:text-gray-300">
    {description}
  </p>
  {#if tags && tags.length > 0}
    <div class="mt-2 flex flex-wrap gap-2">
      {#each tags as tag}
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
