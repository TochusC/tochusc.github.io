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

<div class="space-y-1.5">
  {#each awards as award, i}
    <div
      class="award-item group relative flex items-start gap-3 rounded-lg px-3 py-2.5 transition-all duration-200 hover:bg-primary/5 animate-slide-up"
      style="animation-delay: {i * 40}ms"
    >
      <div class="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
        <AwardIcon class="h-3.5 w-3.5 text-primary" />
      </div>

      <div class="flex-1 min-w-0">
        <div class="flex flex-wrap items-center gap-1.5 mb-0.5">
          <Badge variant={getTierColor(award.tier)} class="text-[11px] px-2 py-0">
            {award.rank}
          </Badge>
          <span class="text-[11px] text-muted-foreground">
            {award.date}
          </span>
        </div>

        <div class="mb-0.5">
          {#if award.projectLink}
            <a
              href={award.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              class="text-[13px] font-medium hover:text-primary hover:underline inline-flex items-center gap-1"
            >
              <span class="truncate">{award.name}</span>
              <ExternalLink class="h-3 w-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          {:else}
            <p class="text-[13px] font-medium truncate">{award.name}</p>
          {/if}
        </div>

        <p class="text-[11px] text-muted-foreground truncate">
          {#if award.competitionLink}
            <a href={award.competitionLink} target="_blank" rel="noopener noreferrer" class="hover:text-primary hover:underline">
              {award.competition}
            </a>
          {:else}
            {award.competition}
          {/if}
        </p>
      </div>

      <div class="absolute left-0 top-0 h-full w-0.5 rounded-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
    </div>
  {/each}
</div>

<style>
  .award-item {
    position: relative;
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
