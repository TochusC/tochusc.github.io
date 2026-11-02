<script lang="ts">
  import { onMount } from 'svelte';
  import { language } from '$lib/stores';
  import { Button } from './ui/button';
  import { Languages, Moon, Sun, Feather } from 'lucide-svelte';
  export let active = 'home';
  let dark = false;
  $: zh = $language === 'zh';
  const links = [
    { key: 'blog', label: 'Blog', href: '/blog/' },
  ];
  onMount(() => {
    try {
      dark = localStorage.getItem('theme') === 'dark';
      const saved = localStorage.getItem('language');
      if (saved === 'zh' || saved === 'en') language.set(saved);
    } catch {}
    document.documentElement.classList.toggle('dark', dark);
    return language.subscribe(lang => {
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
      try { localStorage.setItem('language', lang); } catch {}
    });
  });
  function toggleTheme() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }
</script>

<header class="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border-b py-3 sm:min-h-16 sm:py-0">
  <a href="/" class="shrink-0 text-sm font-semibold tracking-tight" aria-label="Zuyao Xu home">Zuyao Xu</a>
  <div class="order-3 flex items-center gap-1">
    <Button variant="ghost" size="icon" aria-label={zh ? 'Switch to English' : '切换到中文'} on:click={() => language.toggle()}><Languages size={18} aria-hidden="true" /></Button>
    <Button variant="ghost" size="icon" aria-label={zh ? (dark ? '切换浅色模式' : '切换深色模式') : (dark ? 'Switch to light theme' : 'Switch to dark theme')} on:click={toggleTheme}>{#if dark}<Sun size={17} />{:else}<Moon size={17} />{/if}</Button>
  </div>
  <nav aria-label={zh ? '主导航' : 'Main navigation'} lang="en" class="order-2 mr-auto flex gap-5 text-sm sm:ml-5">
    {#each links as link}<a href={link.href} aria-current={active === link.key ? 'page' : undefined} class="inline-flex items-center gap-1.5 border-b-2 py-2 transition-colors {active === link.key ? 'border-foreground font-medium text-foreground' : 'border-transparent text-muted-foreground hover:text-foreground'}"><Feather size={14} strokeWidth={1.5} aria-hidden="true"/>{link.label}</a>{/each}
  </nav>
</header>
