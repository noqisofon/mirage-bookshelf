<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Load Prism.js and its components
    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-typescript.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-javascript.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-json.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-bash.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      document.head.appendChild(script);
    });
  });
</script>

<div class="min-h-screen">
  <Header />

  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>

  <Footer />
</div>
