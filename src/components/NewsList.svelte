<script lang="ts">
  import type { NewsItem } from '$lib/data';
  import Badge from './ui/badge.svelte';
  import { Newspaper, FileText, Award, GraduationCap, Activity } from 'lucide-svelte';

  export let news: NewsItem[];

  function getTagColor(tag: string) {
    switch (tag) {
      case 'publication':
        return 'default';
      case 'award':
        return 'warning';
      case 'scholarship':
        return 'success';
      case 'activity':
        return 'info';
      default:
        return 'secondary';
    }
  }

  function getTagLabel(tag: string) {
    switch (tag) {
      case 'publication':
        return '论文';
      case 'award':
        return '竞赛';
      case 'scholarship':
        return '奖学金';
      case 'activity':
        return '活动';
      default:
        return '';
    }
  }

  function getTagLabelEn(tag: string) {
    switch (tag) {
      case 'publication':
        return 'Paper';
      case 'award':
        return 'Award';
      case 'scholarship':
        return 'Scholarship';
      case 'activity':
        return 'Activity';
      default:
        return '';
    }
  }

  function getIcon(tag: string) {
    switch (tag) {
      case 'publication':
        return FileText;
      case 'award':
        return Award;
      case 'scholarship':
        return GraduationCap;
      case 'activity':
        return Activity;
      default:
        return Newspaper;
    }
  }
</script>

<div class="space-y-1.5">
  {#each news as item, i}
    {@const Icon = getIcon(item.tag)}
    <div
      class="news-item group relative flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-primary/5 animate-slide-up"
      style="animation-delay: {i * 40}ms"
    >
      <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
        <Icon class="h-3.5 w-3.5 text-primary" />
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-1.5 mb-0.5">
          <Badge variant={getTagColor(item.tag)} class="text-[11px] px-2 py-0">
            {getTagLabel(item.tag)}
          </Badge>
          <span class="text-[11px] text-muted-foreground">{item.date}</span>
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
