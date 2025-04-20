<script lang="ts">
  export let currentPage: number;
  export let totalPages: number;
  export let baseUrl: string = '';
</script>

{#if totalPages > 1}
  <div class="mt-8 flex justify-center space-x-4">
    {#if currentPage > 1}
      <a
        href="{baseUrl}?page={currentPage - 1}"
        class="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        前のページ
      </a>
    {/if}

    <span class="flex items-center px-4 py-2">
      ページ {currentPage} / {totalPages}
    </span>

    {#if currentPage < totalPages}
      <a
        href="{baseUrl}?page={currentPage + 1}"
        class="rounded-md bg-gray-200 px-4 py-2 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
      >
        次のページ
      </a>
    {/if}
  </div>
{/if}
