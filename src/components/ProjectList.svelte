<script lang="ts">
  import { language } from '$lib/stores';
  import { projects, starsCheckedAt } from '$lib/projects';
  import { projectDetail } from '$lib/portfolio';
  import { Badge } from './ui/badge';
  import { ArrowUpRight, Star } from 'lucide-svelte';
  $: zh = $language === 'zh';
</script>
<div class="divide-y">
  {#each projects as project}
    {@const detail = projectDetail(project.repo)}
    {@const preview = detail?.preview ?? detail?.images[0]}
    <article class="py-4 first:pt-0 last:pb-0">
      <div class={preview ? 'grid gap-3 min-[375px]:grid-cols-[minmax(0,1fr)_minmax(0,1.55fr)] sm:gap-4' : ''}>
        {#if preview && detail}<div class="block w-full self-center overflow-hidden rounded-md border bg-[#f4f4f1]"><img src={preview.src} width={preview.width} height={preview.height} alt={preview.caption[$language]} loading="lazy" class="h-auto w-full object-contain"/></div>{/if}
        <div class="min-w-0 self-center">
          <div class="mb-2 flex items-center justify-between gap-2"><div lang="en" class="flex flex-wrap gap-1.5"><Badge variant="outline">{project.language}</Badge>{#if project.courseScore}<Badge variant="secondary">Course project · {project.courseScore}/100</Badge>{/if}</div><span class="inline-flex items-center gap-1 text-xs text-muted-foreground" aria-label={`${project.stars} GitHub stars`}><Star size={12}/>{project.stars}</span></div>
          <div class="leading-6"><h2 class="inline text-sm font-semibold"><a href={`https://github.com/TochusC/${project.repo}`} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{project.name}</a></h2><a href={`https://github.com/TochusC/${project.repo}`} target="_blank" rel="noreferrer" aria-label={`GitHub: ${project.name}`} class="ml-2 inline-block text-xs font-normal text-muted-foreground underline underline-offset-4">[GitHub]</a></div>
          <p class="mt-1.5 text-xs leading-5 text-muted-foreground">{project.description[$language]}</p>
        </div>
      </div>
    </article>
  {/each}
  <div class="pt-4 text-xs leading-6 text-muted-foreground"><p>{zh ? 'Star 数量截至' : 'Star counts as of'} {starsCheckedAt}</p><a class="inline-flex items-center text-foreground underline underline-offset-4" href="https://github.com/TochusC?tab=repositories" target="_blank" rel="noreferrer">{zh ? '查看全部开源项目' : 'All repositories'}<ArrowUpRight class="ml-1 h-3 w-3"/></a></div>
</div>
