<script lang="ts">
  import { language } from '$lib/stores';
  import { profileDataEn } from '$lib/data';
  import { projects } from '$lib/projects';
  import { paperDetails, projectDetails } from '$lib/portfolio';
  import { publicationResources } from '$lib/publication-resources';
  import { Badge } from './ui/badge';
  import Authors from './Authors.svelte';
  export let kind: 'research' | 'projects';
  $: zh = $language === 'zh';
  $: details = kind === 'research' ? paperDetails : projectDetails;
</script>
<main id="main" class="mx-auto max-w-6xl py-10 sm:py-14">
  <header class="mb-9 border-b pb-7"><p lang="en" class="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">Selected work</p><div class="flex flex-wrap items-center gap-4"><h1 class="text-3xl font-semibold tracking-tight sm:text-4xl">{kind === 'research' ? (zh ? '学术研究' : 'Research') : (zh ? '开源项目' : 'Projects')}</h1><span lang="en" class="inline-flex items-center gap-2.5 rounded-full border bg-muted/40 px-3.5 py-1.5 text-xs font-medium"><span class="text-base font-semibold tabular-nums">{details.length}</span><span class="text-muted-foreground">{kind === 'research' ? 'Research works' : 'Projects'}</span></span></div><p class="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">{kind === 'research' ? (zh ? '论文、研究问题与方法。' : 'Papers, research questions, and methods.') : (zh ? '从智能教学到编译器与系统内核，记录项目的设计、实现和真实界面。' : 'From teaching assistants to compilers and kernels: the design, implementation, and interfaces behind each project.')}</p></header>
  <div class="space-y-5">
    {#each details as detail, index}
      {@const publication = detail.metadata ?? profileDataEn.publications.find(p => detail.match && p.title.startsWith(detail.match))}
      {@const project = projects.find(p => p.repo === detail.repo)}
      {@const title = kind === 'research' ? publication?.title : project?.name}
      {@const href = kind === 'research' ? publication?.link : `https://github.com/TochusC/${project?.repo}`}
      {@const preview = detail.preview ?? detail.images[0]}
      {@const resources = kind === 'research' && publication ? publicationResources(publication) : project ? [{label:'GitHub',href:`https://github.com/TochusC/${project.repo}`}] : []}
      <article class="grid overflow-hidden rounded-xl border bg-card transition-shadow hover:shadow-sm md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.35fr)]">
        {#if preview}<div class="flex w-full items-center justify-center overflow-hidden border-b bg-[#f4f4f1] md:border-b-0 md:border-r"><img src={preview.src} width={preview.width} height={preview.height} alt={preview.caption[$language]} loading="lazy" class="h-auto w-full object-contain"/></div>{/if}
        <div class="flex min-w-0 flex-col justify-center p-5 sm:p-6 lg:p-7"><div class="mb-4 flex items-start justify-between gap-4"><div lang="en" class="flex flex-wrap gap-1.5">{#if kind === 'research'}{#each publication?.venue.split(' · ') ?? [] as venue}<Badge variant="secondary">{venue}</Badge>{/each}{:else}{#each detail.stack?.slice(0,3) ?? [] as tech}<Badge variant="outline">{tech}</Badge>{/each}{/if}</div><span class="shrink-0 border-l pl-3 font-mono text-lg font-medium leading-6 tabular-nums text-muted-foreground/60" aria-label={`${zh ? '条目' : 'Item'} ${index+1}`}>{String(index+1).padStart(2,'0')}</span></div><div class="leading-7"><h2 class="inline text-lg font-semibold tracking-tight sm:text-xl"><a href={href} target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">{title}</a></h2>{#each resources as resource}<a href={resource.href} target="_blank" rel="noreferrer" lang="en" aria-label={`${resource.label}: ${title}`} class="ml-2 inline-block whitespace-nowrap text-xs text-muted-foreground underline underline-offset-4 hover:text-foreground">[{resource.label}]</a>{/each}</div>{#if kind === 'research' && publication}<p class="mt-3 text-xs leading-6 text-muted-foreground"><Authors names={publication.authors}/></p>{/if}<p class="mt-3 text-sm leading-7 text-muted-foreground">{detail.summary[$language]}</p></div>
      </article>
    {/each}
  </div>
</main>
