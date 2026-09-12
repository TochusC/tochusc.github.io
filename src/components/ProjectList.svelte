<script lang="ts">
  import { language } from '$lib/stores';
  import { projects, starsCheckedAt } from '$lib/projects';
  import { Badge } from './ui/badge';
  import { ArrowUpRight, Star } from 'lucide-svelte';
  $: zh = $language === 'zh';
</script>

<div class="divide-y">
  {#each projects as project}
    <article class="py-5 first:pt-0">
      <div class="mb-3 flex items-center justify-between gap-3">
        <div class="flex flex-wrap gap-2"><Badge variant="outline">{project.language}</Badge>{#if project.courseScore}<Badge variant="secondary">{zh ? '课设' : 'Course project'} · {project.courseScore}{zh ? ' 分' : '/100'}</Badge>{/if}</div>
        <span class="inline-flex items-center gap-1.5 text-sm font-medium" aria-label={`${project.stars} GitHub stars`}><Star size={15} />{project.stars}</span>
      </div>
      <h2 class="text-sm font-semibold leading-6"><a href={`https://github.com/TochusC/${project.repo}`} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{project.name}<ArrowUpRight class="ml-1 inline h-4 w-4" /></a></h2>
      <p class="mt-2 text-sm leading-6 text-muted-foreground">{project.description[zh ? 'zh' : 'en']}</p>
    </article>
  {/each}
  <div class="pt-4 text-xs leading-6 text-muted-foreground">
    <p>{zh ? 'Star 数量截至' : 'Star counts as of'} {starsCheckedAt}</p>
    <a class="inline-flex items-center text-foreground underline underline-offset-4" href="https://github.com/TochusC?tab=repositories" target="_blank" rel="noreferrer">{zh ? '查看全部开源项目' : 'All repositories'}<ArrowUpRight class="ml-1 h-3 w-3" /></a>
  </div>
</div>
