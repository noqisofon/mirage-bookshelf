<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let isDarkMode = false;

  onMount(() => {
    // Check if user has a theme preference in localStorage
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  });

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<header class="bg-white shadow dark:bg-gray-800">
  <nav class="container mx-auto px-4 py-6">
    <div class="flex items-center justify-between">
      <a href="/" class="text-2xl font-bold">うぃーくりー・あんだーわーるど・にゅーす</a>
      <div class="flex items-center space-x-4">
        <a
          href="/"
          class="hover:text-gray-600 dark:hover:text-gray-300 {$page.url.pathname === '/'
            ? 'text-blue-600 dark:text-blue-400'
            : ''}"
        >
          Home
        </a>
        <a
          href="/blog"
          class="hover:text-gray-600 dark:hover:text-gray-300 {$page.url.pathname.startsWith(
            '/blog'
          )
            ? 'text-blue-600 dark:text-blue-400'
            : ''}"
        >
          Blog
        </a>
        <button
          on:click={toggleDarkMode}
          class="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-700"
          aria-label="Toggle dark mode"
        >
          {#if isDarkMode}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          {:else}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          {/if}
        </button>
      </div>
    </div>
  </nav>
</header>
