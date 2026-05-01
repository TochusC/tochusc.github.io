<script lang="ts">
  import type { Publication } from '$lib/data';
  import Badge from './ui/badge.svelte';
  import { FileText, ExternalLink, BookOpen } from 'lucide-svelte';

  export let publications: Publication[];
</script>

<div class="space-y-3">
  {#each publications as pub, i}
    <div
      class="pub-item group relative flex items-start gap-3 rounded-lg px-3 py-3 transition-all duration-200 hover:bg-primary/5 animate-slide-up"
      style="animation-delay: {i * 60}ms"
    >
      <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
        <FileText class="h-3.5 w-3.5 text-primary" />
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex flex-wrap items-center gap-1.5 mb-1.5">
          <Badge variant={pub.status === 'published' ? 'default' : 'secondary'} class="text-[11px] px-2 py-0">
            {pub.status === 'published' ? 'Published' : 'Preprint'}
          </Badge>
          <Badge variant="outline" class="text-[11px] px-2 py-0">
            {pub.venue}
          </Badge>
          <span class="text-[11px] text-muted-foreground">{pub.year}</span>
        </div>

        <div class="mb-1">
          {#if pub.link}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[13px] font-medium hover:text-primary hover:underline inline-flex items-center gap-1"
            >
              <span class="line-clamp-2">{pub.title}</span>
              <ExternalLink class="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          {:else}
            <p class="text-[13px] font-medium line-clamp-2">{pub.title}</p>
          {/if}
        </div>

        <p class="text-[11px] text-muted-foreground line-clamp-1">
          {pub.authors}
        </p>
      </div>

      <div class="absolute left-0 top-0 h-full w-0.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  {/each}
</div>

<style>
  .pub-item {
    position: relative;
  }

  .line-clamp-1 {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
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
