<script lang="ts">
  import type { Award } from '$lib/data';
  import Badge from './ui/badge.svelte';
  import { Award as AwardIcon, ExternalLink } from 'lucide-svelte';

  export let awards: Award[];

  function getTierColor(tier: string) {
    switch (tier) {
      case 'national':
        return 'warning';
      case 'provincial':
        return 'info';
      case 'school':
        return 'success';
      default:
        return 'secondary';
    }
  }
</script>

<div class="space-y-2">
  {#each awards as award, i}
    <div
      class="award-item group relative flex items-start gap-3 rounded-lg p-3 transition-all duration-300 hover:bg-primary/5 hover:shadow-md hover:scale-[1.02] animate-slide-up cursor-default"
      style="animation-delay: {i * 50}ms"
    >
      <div class="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
        <AwardIcon class="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
      </div>

      <div class="flex-1 space-y-1">
        <div class="flex flex-wrap items-center gap-2">
          <Badge variant={getTierColor(award.tier)} class="transition-all duration-300 group-hover:shadow-sm">
            {award.rank}
          </Badge>
          <span class="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
            {award.date}
          </span>
        </div>

        <div class="flex items-start gap-1">
          {#if award.projectLink}
            <a
              href={award.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-sm font-medium transition-all duration-300 hover:text-primary hover:underline group-hover:text-primary"
            >
              {award.name}
              <ExternalLink class="inline h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          {:else}
            <p class="text-sm font-medium transition-colors duration-300 group-hover:text-foreground">
              {award.name}
            </p>
          {/if}
        </div>

        <p class="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
          {#if award.competitionLink}
            <a href={award.competitionLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {award.competition}
            </a>
          {:else}
            {award.competition}
          {/if}
        </p>
      </div>

      <div class="absolute left-0 top-0 h-full w-1 rounded-full bg-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  {/each}
</div>

<style>
  .award-item {
    position: relative;
    overflow: hidden;
  }

  .award-item::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, hsl(var(--primary) / 0.05), transparent);
    opacity: 0;
    transition: opacity 300ms;
  }

  .award-item:hover::before {
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
