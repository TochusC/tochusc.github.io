<script lang="ts">
  import type { Award } from '$lib/data';
  import { Badge } from './ui/badge';
  export let awards: Award[];
</script>
<div class="divide-y">
  {#each awards as award}
    <article class="flex flex-col gap-3 py-5 first:pt-0 sm:flex-row sm:justify-between">
      <div class="min-w-0"><div class="mb-2"><Badge lang="en">{award.rank}</Badge></div><h2 class="text-sm font-semibold leading-6">{#if award.projectLink}<a href={award.projectLink} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{award.name}</a>{:else}{award.name}{/if}</h2><p class="mt-1 text-xs leading-6 text-muted-foreground">{#if award.competitionLink}<a href={award.competitionLink} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{award.competition}</a>{:else}{award.competition}{/if}</p></div>
      <time class="shrink-0 text-xs text-muted-foreground" datetime={award.date}>{award.date}</time>
    </article>
  {/each}
</div>
