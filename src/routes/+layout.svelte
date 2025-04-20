<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
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
