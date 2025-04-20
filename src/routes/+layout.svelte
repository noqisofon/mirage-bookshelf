<script lang="ts">
  import '../app.css';
  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import { onMount } from 'svelte';

  onMount(() => {
    // Load Prism.js from CDN
    const prismScript = document.createElement('script');
    prismScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
    prismScript.onload = () => {
      // Load additional languages and plugins after main script
      const languages = ['typescript', 'javascript', 'json', 'bash'];
      languages.forEach(lang => {
        const script = document.createElement('script');
        script.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${lang}.min.js`;
        document.head.appendChild(script);
      });

      // Load line numbers plugin
      const lineNumbersScript = document.createElement('script');
      lineNumbersScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.js';
      document.head.appendChild(lineNumbersScript);
    };
    document.head.appendChild(prismScript);

    // Load Prism.js CSS from CDN
    const prismCSS = document.createElement('link');
    prismCSS.rel = 'stylesheet';
    prismCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism.min.css';
    document.head.appendChild(prismCSS);

    // Load line numbers CSS
    const lineNumbersCSS = document.createElement('link');
    lineNumbersCSS.rel = 'stylesheet';
    lineNumbersCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/line-numbers/prism-line-numbers.min.css';
    document.head.appendChild(lineNumbersCSS);
  });
</script>

<div class="min-h-screen">
  <Header />

  <main class="container mx-auto px-4 py-8">
    <slot />
  </main>

  <Footer />
</div>
