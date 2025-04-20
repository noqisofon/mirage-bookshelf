<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import { onMount } from 'svelte';
  import Prism from 'prismjs';
  import 'prismjs/components/prism-typescript';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/components/prism-json';
  import 'prismjs/components/prism-bash';
  import 'prismjs/plugins/line-numbers/prism-line-numbers';

  onMount(() => {
    Prism.highlightAll();
  });
</script>

<div class="min-h-screen">
  <Header />

  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>

  <footer class="mt-8 bg-white shadow dark:bg-gray-800">
    <div class="container mx-auto px-4 py-6 text-center">
      <p>&copy; 2025 うぃーくりー・あんだーわーるど・にゅーす. All rights reserved.</p>
    </div>
  </footer>
</div>
