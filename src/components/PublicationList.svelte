<script lang="ts">
  import type { Publication } from '$lib/data';
  import { language } from '$lib/stores';
  import { Badge } from './ui/badge';
  import { ArrowUpRight } from 'lucide-svelte';
  export let publications: Publication[];
  $: zh = $language === 'zh';
  $: labels = zh ? {published:'已发表',accepted:'已录用',preprint:'预印本',poster:'Poster 录用'} : {published:'Published',accepted:'Accepted',preprint:'Preprint',poster:'Poster accepted'};
</script>
<div class="divide-y">
  {#each publications as p}
    <article class="py-6 first:pt-0 last:pb-0">
      <div class="mb-3 flex flex-wrap items-center gap-2"><Badge variant={p.status === 'published' ? 'default' : 'secondary'}>{p.venue}</Badge><span class="text-xs text-muted-foreground">{labels[p.status]}</span></div>
      <h2 class="text-base font-semibold leading-7 tracking-tight">{#if p.link}<a href={p.link} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{p.title}<ArrowUpRight class="ml-1 inline h-4 w-4" /></a>{:else}{p.title}{/if}</h2>
      <p class="mt-2 text-sm leading-6 text-muted-foreground">{p.authors}</p>
      {#if p.role}<p class="mt-1 text-xs font-medium">{p.role}</p>{/if}
      {#if p.note}<p class="mt-3 text-sm leading-6 text-muted-foreground">{p.note}</p>{/if}
    </article>
  {/each}
</div>
