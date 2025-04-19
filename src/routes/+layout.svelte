<script lang="ts">
  import '../app.css';
</script>

<div class="min-h-screen">
  <header class="bg-white shadow dark:bg-gray-800">
    <nav class="container mx-auto px-4 py-6">
      <div class="flex items-center justify-between">
        <a href="/" class="text-2xl font-bold">うぃーくりー・あんだーわーるど・にゅーす</a>
        <div class="space-x-4">
          <a href="/" class="hover:text-gray-600 dark:hover:text-gray-300">Home</a>
          <a href="/blog" class="hover:text-gray-600 dark:hover:text-gray-300">Blog</a>
        </div>
      </div>
    </nav>
  </header>

  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>

  <footer class="mt-8 bg-white shadow dark:bg-gray-800">
    <div class="container mx-auto px-4 py-6 text-center">
      <p>&copy; 2024 うぃーくりー・あんだーわーるど・にゅーす. All rights reserved.</p>
    </div>
  </footer>
</div>
