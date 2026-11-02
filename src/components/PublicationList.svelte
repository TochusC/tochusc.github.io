<script lang="ts">
  import type { Publication } from '$lib/data';
  import { paperDetail } from '$lib/portfolio';
  import { language } from '$lib/stores';
  import { publicationResources } from '$lib/publication-resources';
  import { Badge } from './ui/badge';
  import Authors from './Authors.svelte';
  export let publications: Publication[];
</script>
<div class="divide-y">
  {#each publications as p}
    {@const detail = paperDetail(p.title)}
    {@const preview = detail?.preview ?? detail?.images[0]}
    <article class="py-4 first:pt-0 last:pb-0">
      <div class={preview ? 'grid gap-3 min-[375px]:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] sm:gap-4' : ''}>
        {#if preview && detail}
          <div class="block w-full self-center overflow-hidden rounded-md border bg-[#f4f4f1]"><img src={preview.src} width={preview.width} height={preview.height} alt={preview.caption[$language]} loading="lazy" class="h-auto w-full object-contain"/></div>
        {/if}
        <div class="min-w-0 self-center">
          <div lang="en" class="mb-2 flex flex-wrap items-center gap-1.5">{#each p.venue.split(' · ') as venue,index}<Badge variant={index === 0 && p.status !== 'preprint' ? 'default' : 'secondary'}>{venue}</Badge>{/each}</div>
          <div class="leading-6"><h2 class="inline text-sm font-semibold tracking-tight"><a href={p.link} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{p.title}</a></h2>{#each publicationResources(p) as resource}<a href={resource.href} target="_blank" rel="noreferrer" lang="en" aria-label={`${resource.label}: ${p.title}`} class="ml-2 inline-block whitespace-nowrap text-xs font-normal tracking-normal text-muted-foreground underline underline-offset-4 hover:text-foreground">[{resource.label}]</a>{/each}</div>
          <p class="mt-1.5 text-xs leading-5 text-muted-foreground"><Authors names={p.authors}/></p>
        </div>
      </div>
    </article>
  {/each}
</div>
