<script lang="ts">
  import { onMount } from 'svelte';
  import { ArrowUp } from 'lucide-svelte';
  import { language } from '$lib/stores';
  let visible = false;
  onMount(() => {
    const update = () => { visible = window.scrollY > 8; };
    update();
    window.addEventListener('scroll', update, { passive:true });
    return () => window.removeEventListener('scroll', update);
  });
  function backToTop() {
    const reading = document.querySelector<HTMLElement>('.entries');
    if (reading) reading.scrollTop = 0;
    window.scrollTo({top:0, behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  }
</script>
{#if visible}
  <button class="back-top" on:click={backToTop} aria-label={$language === 'zh' ? '返回顶部' : 'Back to top'} title={$language === 'zh' ? '返回顶部' : 'Back to top'}><ArrowUp size={16} strokeWidth={1.6}/><span>{$language === 'zh' ? '返回顶部' : 'Back to top'}</span></button>
{/if}
<style>
.back-top{position:fixed;left:50%;translate:-50% 0;bottom:max(24px,env(safe-area-inset-bottom));z-index:40;display:flex;align-items:center;gap:7px;border:1px solid hsl(var(--border));border-radius:30px;padding:10px 14px;background:hsl(var(--background));color:hsl(var(--foreground));box-shadow:0 3px 14px #00000008;font-size:11px;line-height:1.4}
.back-top:hover{border-color:hsl(var(--foreground))}.back-top:focus-visible{outline:2px solid currentColor;outline-offset:3px}
@media(max-width:639px){.back-top{bottom:max(16px,env(safe-area-inset-bottom));padding:11px}.back-top span{display:none}}
@media(prefers-reduced-motion:no-preference){.back-top{animation:arrive .18s ease-out;transition:border-color .15s}@keyframes arrive{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}}
</style>
