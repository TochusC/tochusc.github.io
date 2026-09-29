<script lang="ts">
  import type { Publication } from '$lib/data';
  import { Badge } from './ui/badge';
  import { ArrowUpRight } from 'lucide-svelte';
  export let publications: Publication[];
  const labels: Record<Publication['status'], string> = {
    published: 'Published',
    accepted: 'Accepted',
    preprint: 'Preprint',
    poster: 'Poster accepted',
  };
</script>
<div class="divide-y">
  {#each publications as p}
    <article class="py-6 first:pt-0 last:pb-0">
      <div lang="en" class="mb-3 flex flex-wrap items-center gap-2">
        {#each p.venue.split(' · ') as venue, index}
          <Badge variant={index === 0 && p.status !== 'preprint' ? 'default' : 'secondary'}>{venue}</Badge>
        {/each}
        <span class="text-xs text-muted-foreground">{labels[p.status]}</span>
      </div>
      <h2 class="text-base font-semibold leading-7 tracking-tight">{#if p.link}<a href={p.link} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{p.title}<ArrowUpRight class="ml-1 inline h-4 w-4" /></a>{:else}{p.title}{/if}</h2>
      <p class="mt-2 text-sm leading-6 text-muted-foreground">{p.authors}</p>
      {#if p.role}<p class="mt-1 text-xs font-medium">{p.role}</p>{/if}
      {#if p.resources?.length}
        <div lang="en" class="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-xs font-medium">
          {#each p.resources as resource}
            <a href={resource.href} target="_blank" rel="noreferrer" aria-label={`${resource.label}: ${p.title}`} class="inline-flex items-center underline underline-offset-4 hover:opacity-70">{resource.label}<ArrowUpRight size={12} class="ml-1" /></a>
          {/each}
        </div>
      {/if}
    </article>
  {/each}
</div>
