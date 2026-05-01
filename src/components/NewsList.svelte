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

<div class="space-y-2">
  {#each news as item, i}
    <div
      class="news-item group relative flex items-start gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:scale-[1.02] animate-slide-up cursor-default"
      style="animation-delay: {i * 50}ms"
    >
      <div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
        <Newspaper class="h-4 w-4 text-primary transition-transform duration-300 group-hover:-rotate-12" />
      </div>

      <div class="flex-1 space-y-1">
        <div class="flex flex-wrap items-center gap-2">
          <Badge variant={getTagColor(item.tag)} class="transition-all duration-300 group-hover:shadow-sm">
            {item.date}
          </Badge>
        </div>

        <p class="text-sm font-medium transition-colors duration-300 group-hover:text-foreground">
          {#if item.titleLink}
            <a href={item.titleLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {item.title}
            </a>
          {:else}
            {item.title}
          {/if}
        </p>

        <p class="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {#if item.descriptionLink}
            <a href={item.descriptionLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {item.description}
            </a>
          {:else}
            {item.description}
          {/if}
        </p>
      </div>

      <div class="absolute left-0 top-0 h-full w-1 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  {/each}
</div>

<style>
  .news-item {
    position: relative;
    overflow: hidden;
  }

  .news-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent);
    opacity: 0;
    transition: opacity 300ms;
  }

  .news-item:hover::before {
    opacity: 1;
  }

  @keyframes slide-up {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-slide-up {
    animation: slide-up 0.4s ease-out forwards;
    opacity: 0;
  }
</style>
