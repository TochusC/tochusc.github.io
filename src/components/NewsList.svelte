<script lang="ts">
  import type { NewsItem } from '$lib/data';
  import Badge from './ui/badge.svelte';
  import { Newspaper } from 'lucide-svelte';

  export let news: NewsItem[];

  function getTagColor(tag: string) {
    switch (tag) {
      case 'gold':
        return 'warning';
      case 'blue':
        return 'info';
      case 'green':
        return 'success';
      default:
        return 'secondary';
    }
  }
</script>

<div class="space-y-1.5">
  {#each news as item, i}
    <div
      class="news-item group relative flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-primary/5 animate-slide-up"
      style="animation-delay: {i * 40}ms"
    >
      <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
        <Newspaper class="h-3.5 w-3.5 text-primary" />
      </div>

      <div class="flex-1 min-w-0">
        <div class="mb-0.5">
          <Badge variant={getTagColor(item.tag)} class="text-[11px] px-2 py-0">
            {item.date}
          </Badge>
        </div>

        <p class="text-[13px] font-medium mb-0.5">
          {#if item.titleLink}
            <a href={item.titleLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {item.title}
            </a>
          {:else}
            {item.title}
          {/if}
        </p>

        <p class="text-[11px] text-muted-foreground line-clamp-2">
          {#if item.descriptionLink}
            <a href={item.descriptionLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {item.description}
            </a>
          {:else}
            {item.description}
          {/if}
        </p>
      </div>

      <div class="absolute left-0 top-0 h-full w-0.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  {/each}
</div>

<style>
  .news-item {
    position: relative;
  }

  .line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(8px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-up {
    animation: slide-up 0.3s ease-out forwards;
    opacity: 0;
  }
</style>
