<script lang="ts">
  import { language } from '$lib/stores';
  import type { Publication } from '$lib/data';
  import type { WorkDetail } from '$lib/portfolio';
  import type { OpenSourceProject } from '$lib/projects';
  import { publicationResources } from '$lib/publication-resources';
  import { Badge } from './ui/badge';
  import { ArrowLeft, ArrowUpRight } from 'lucide-svelte';
  import Authors from './Authors.svelte';
  export let detail: WorkDetail;
  export let publication: Publication | undefined = undefined;
  export let project: OpenSourceProject | undefined = undefined;
  $: lang = $language;
  $: zh = lang === 'zh';
  $: title = publication?.title ?? project?.name ?? '';
  $: category = publication ? 'Research' : 'Projects';
  $: back = publication ? '/research/' : '/projects/';
  $: overviewImages = detail.preview && detail.images.length > 1 ? [detail.preview] : detail.images.slice(0,1);
  $: galleryImages = detail.preview && detail.images.length > 1 ? detail.images : detail.images.slice(1);
  $: links = publication ? [...publicationResources(publication), ...(publication.link && !publicationResources(publication).some(r => r.href === publication.link) ? [{label:'Publication',href:publication.link}] : []), ...(detail.extraLinks ?? [])] : [{label:'GitHub',href:`https://github.com/TochusC/${project?.repo}`}];
</script>
<main id="main" class="mx-auto max-w-6xl py-8 sm:py-12">
  <a href={back} class="mb-7 inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground"><ArrowLeft size={14}/>{zh ? '返回' : 'Back to'} {category}</a>
  <div class="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_12rem] lg:gap-14">
    <article class="min-w-0">
      <header class="border-b pb-7">
        <div lang="en" class="mb-4 flex flex-wrap items-center gap-2"><Badge variant="secondary">{category}</Badge>{#if publication}{#each publication.venue.split(' · ') as venue}<Badge variant="outline">{venue}</Badge>{/each}{:else}{#each detail.stack ?? [] as tech}<Badge variant="outline">{tech}</Badge>{/each}{/if}</div>
        <h1 class="text-2xl font-semibold leading-tight tracking-tight sm:text-4xl sm:leading-tight">{title}</h1>
        {#if publication}<p class="mt-4 text-sm leading-7 text-muted-foreground"><Authors names={publication.authors}/></p>{/if}
        <p class="mt-5 text-base leading-8 text-muted-foreground sm:text-lg">{detail.summary[lang]}</p>
        <div lang="en" class="mt-5 flex flex-wrap gap-x-5 gap-y-2">{#each links as link}<a href={link.href} target="_blank" rel="noreferrer" class="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4">{link.label}<ArrowUpRight size={13}/></a>{/each}</div>
        {#if detail.versions?.length}<div class="mt-6 space-y-3 rounded-lg border bg-muted/20 p-4">{#each detail.versions as version}<div><span lang="en" class="mb-1 block text-xs text-muted-foreground">{version.label}</span><a href={version.href} target="_blank" rel="noreferrer" class="text-sm font-medium leading-6 underline underline-offset-4">{version.title}</a><p class="mt-1 text-xs leading-6 text-muted-foreground"><Authors names={version.authors}/></p></div>{/each}</div>{/if}
      </header>
      {#each overviewImages as img}
        <figure class="mt-8 overflow-hidden rounded-xl border">
          <a href={img.src} target="_blank" rel="noreferrer" aria-label={zh ? '打开完整图片' : 'Open full image'} class="block bg-white p-4 sm:p-6"><img src={img.src} width={img.width} height={img.height} alt={img.caption[lang]} class="max-h-[520px] w-full object-contain" fetchpriority="high"/></a>
          <figcaption class="border-t bg-muted/30 px-4 py-3 text-xs leading-5 text-muted-foreground sm:px-6">{img.caption[lang]} <a href={img.source} target="_blank" rel="noreferrer" class="ml-1 underline underline-offset-4">{zh ? '来源' : 'Source'} ↗</a></figcaption>
        </figure>
      {/each}
      <div class="mt-9 space-y-9">{#each detail.sections as section,i}<section id={`section-${i}`} class="scroll-mt-8"><h2 class="mb-3 text-lg font-semibold tracking-tight">{section.heading[lang]}</h2>{#each section.paragraphs as paragraph}<p class="text-sm leading-8 text-muted-foreground sm:text-base">{paragraph[lang]}</p>{/each}{#if section.bullets}<ul class="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-muted-foreground">{#each section.bullets as point}<li>{point[lang]}</li>{/each}</ul>{/if}</section>{/each}</div>
      {#if galleryImages.length}<section id="gallery" class="mt-10"><h2 class="mb-4 text-lg font-semibold">{publication ? (zh ? '更多图表' : 'More figures') : (zh ? '更多界面' : 'A closer look')}</h2>{#each galleryImages as img}<figure class="mb-6 overflow-hidden rounded-xl border"><a href={img.src} target="_blank" rel="noreferrer" class="block bg-white p-3"><img src={img.src} width={img.width} height={img.height} alt={img.caption[lang]} loading="lazy" class="max-h-[680px] w-full object-contain"/></a><figcaption class="border-t px-4 py-3 text-xs leading-5 text-muted-foreground">{img.caption[lang]} <a href={img.source} target="_blank" rel="noreferrer" class="underline underline-offset-4">{zh ? '来源' : 'Source'} ↗</a></figcaption></figure>{/each}</section>{/if}
      <div class="mt-10 border-t pt-5"><a href={back} class="inline-flex items-center gap-2 text-sm"><ArrowLeft size={14}/>{zh ? '浏览更多' : 'More'} {category}</a></div>
    </article>
    <aside class="hidden border-l pl-5 lg:sticky lg:top-8 lg:block" aria-label={zh ? '页面目录' : 'On this page'}><p class="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{zh ? '本页内容' : 'On this page'}</p><nav class="space-y-3 text-xs leading-5 text-muted-foreground">{#each detail.sections as section,i}<a class="block hover:text-foreground" href={`#section-${i}`}>{section.heading[lang]}</a>{/each}{#if galleryImages.length}<a class="block hover:text-foreground" href="#gallery">{publication ? (zh ? '更多图表' : 'More figures') : (zh ? '更多界面' : 'A closer look')}</a>{/if}</nav></aside>
  </div>
</main>
