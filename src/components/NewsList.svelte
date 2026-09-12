<script lang="ts">
  import type { NewsItem } from '$lib/data';
  export let news: NewsItem[];
</script>
<div class="divide-y">
  {#each news as item}
    <article class="py-5 first:pt-0"><time datetime={item.date} class="text-xs text-muted-foreground">{item.date}</time><h2 class="mt-2 text-sm font-semibold leading-6">{item.title}</h2><p class="mt-1 text-sm leading-6 text-muted-foreground">{#if item.descriptionLink}<a href={item.descriptionLink} target="_blank" rel="noreferrer" class="underline underline-offset-4">{item.description}</a>{:else}{item.description}{/if}</p></article>
  {/each}
</div>
