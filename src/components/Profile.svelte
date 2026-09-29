<script lang="ts">
  import { onMount } from 'svelte';
  import { language, getProfileData } from '$lib/stores';
  import { Button, buttonVariants } from './ui/button';
  import * as Card from './ui/card';
  import * as Tabs from './ui/tabs';
  import { Badge } from './ui/badge';
  import { ArrowUpRight, Download, Github, Globe, GraduationCap, Languages, Mail, Microscope, Moon, Sun, ShieldCheck, UsersRound } from 'lucide-svelte';
  import PublicationList from './PublicationList.svelte';
  import AwardList from './AwardList.svelte';
  import NewsList from './NewsList.svelte';
  import ProjectList from './ProjectList.svelte';
  import { projects } from '$lib/projects';

  $: zh = $language === 'zh';
  $: data = getProfileData($language);
  let dark = false;
  let tab = 'publications';
  onMount(() => {
    try { dark = localStorage.getItem('theme') === 'dark'; } catch {}
    document.documentElement.classList.toggle('dark', dark);
  });
  $: if (typeof document !== 'undefined') document.documentElement.lang = zh ? 'zh-CN' : 'en';
  function toggleTheme() {
    dark = !dark;
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch {}
  }
</script>

<div class="profile-shell mx-auto max-w-[1600px] px-5 sm:px-8">
  <a class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:p-3" href="#main">{zh ? '跳转到正文' : 'Skip to content'}</a>
  <header class="profile-header flex min-h-16 items-center justify-between gap-3 border-b">
    <a href="/" class="text-sm font-semibold tracking-tight" aria-label={zh ? '许祖耀主页' : 'Zuyao Xu home'}>Zuyao Xu</a>
    <div class="flex items-center gap-1">
      <Button variant="ghost" size="icon" aria-label={zh ? 'Switch to English' : '切换到中文'} title={zh ? 'Switch to English' : '切换到中文'} on:click={() => language.toggle()}><Languages size={18} aria-hidden="true" /></Button>
      <Button variant="ghost" size="icon" aria-label={zh ? (dark ? '切换浅色模式' : '切换深色模式') : (dark ? 'Switch to light theme' : 'Switch to dark theme')} on:click={toggleTheme}>
        {#if dark}<Sun size={17} />{:else}<Moon size={17} />{/if}
      </Button>
    </div>
  </header>

  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <main id="main" class="profile-main scroll-region py-6" tabindex={0}>
    <div class="profile-primary min-w-0">
    <section aria-labelledby="profile-name" class="profile-hero mb-6 grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-3 gap-y-4 sm:gap-x-6">
      <img src="/portrait-suit-autolevel.png" alt={zh ? '许祖耀' : 'Zuyao Xu'} width="1122" height="1402" class="h-28 w-auto rounded-md border object-contain min-[375px]:h-32 sm:row-span-2 sm:h-40 sm:self-center" />
      <div class="flex min-w-0 max-w-2xl flex-col">
        <div lang="en" class="mt-2 flex flex-wrap gap-1.5 sm:mb-3 sm:mt-0 sm:gap-2"><Badge variant="secondary" class="max-w-full px-2 text-[10px] leading-4 sm:px-2.5 sm:text-xs">Nankai University</Badge><Badge variant="outline" class="max-w-full px-2 text-[10px] leading-4 sm:px-2.5 sm:text-xs">Cybersecurity · Master’s student</Badge></div>
        <h1 id="profile-name" class="order-first text-2xl font-semibold leading-tight tracking-tight sm:order-none sm:text-4xl">{data.name}<span class="mt-1 block text-sm font-normal text-muted-foreground sm:ml-2 sm:mt-0 sm:inline-block sm:text-2xl">{zh ? 'Zuyao Xu' : '许祖耀'}</span></h1>
        <p class="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground sm:mt-3 sm:text-sm"><span>{data.advisorHeader} <a href={data.advisorLink} class="font-medium text-foreground underline underline-offset-4" target="_blank" rel="noreferrer">{data.advisor}</a></span><span class="hidden sm:inline" aria-hidden="true">·</span><span class="basis-full sm:basis-auto">{zh ? '中国 · 天津' : 'Tianjin, China'}</span></p>
      </div>
      <div class="profile-actions col-span-2 grid grid-cols-2 gap-2 sm:col-span-1 sm:col-start-2 sm:flex sm:flex-nowrap">
        <a class={buttonVariants({size:'sm', class: 'px-2 text-xs md:px-3 md:text-sm'})} href={zh ? '/resume_zuyao_ch.pdf' : '/resume_zuyao_en.pdf'} download><Download class="mr-2 h-4 w-4" />{zh ? '下载简历' : 'Download CV'}</a>
        <a class={buttonVariants({variant:'outline',size:'sm', class: 'px-2 text-xs md:px-3 md:text-sm'})} href={data.social.email}><Mail class="mr-2 h-4 w-4" />{zh ? '联系我' : 'Email'}</a>
        <a class={buttonVariants({variant:'outline',size:'sm', class: 'px-2 text-xs md:px-3 md:text-sm'})} href={data.social.github} target="_blank" rel="noreferrer"><Github class="mr-2 h-4 w-4" />GitHub</a>
        <a class={buttonVariants({variant:'outline',size:'sm', class: 'px-2 text-xs md:px-3 md:text-sm'})} href={data.social.scholar} target="_blank" rel="noreferrer"><GraduationCap class="mr-2 h-4 w-4 shrink-0" aria-hidden="true" />Google Scholar</a>
      </div>
      <p class="profile-biography col-span-2 max-w-5xl text-sm leading-7 text-muted-foreground"><Badge variant="secondary" lang="en" class="mr-2 align-middle">Biography</Badge> {data.introduction}</p>
    </section>

    <div class="profile-workspace grid gap-6">
      <!-- The scrollable region needs keyboard focus for arrow/PageDown scrolling. -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <aside class="profile-sidebar scroll-region space-y-5" aria-label={zh ? '教育与研究方向' : 'Education and research interests'} tabindex={0}>
        <Card.Root>
          <Card.Header class="p-4 pb-3"><Card.Title tag="h2" class="flex items-center gap-2 text-sm leading-6 text-primary"><GraduationCap size={18} class="shrink-0" aria-hidden="true" />{zh ? '教育背景' : 'Education'}</Card.Title></Card.Header>
          <Card.Content class="space-y-5 p-4 pt-0 text-sm">
            <div>
              <div class="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary" lang="en">M.S. student</Badge><span class="text-xs text-muted-foreground">2025 — {zh ? '至今' : 'Present'}</span></div>
              <p class="font-semibold leading-6 text-primary">{data.school}</p>
              <p class="mt-1 leading-6 text-muted-foreground">{zh ? '网络空间安全' : 'Cybersecurity'}</p>
            </div>
            <div class="border-t pt-4">
              <div class="mb-2 flex flex-wrap items-center gap-2"><Badge variant="secondary" lang="en">Bachelor’s</Badge><span class="text-xs text-muted-foreground">2021 — 2025</span></div>
              <p class="font-semibold leading-6 text-primary">{data.undergraduate}</p>
              <p class="mt-1 leading-6 text-muted-foreground">{data.undergraduateMajor}</p>
              <p class="mt-2 text-xs leading-5 text-muted-foreground">{zh ? '荣誉学士学位 · 优秀毕业生' : 'Honors bachelor’s degree · Outstanding graduate'}</p>
            </div>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="p-4 pb-3"><Card.Title tag="h2" class="flex items-center gap-2 text-sm leading-6 text-primary"><Microscope size={18} class="shrink-0" aria-hidden="true" />{zh ? '研究方向' : 'Research interests'}</Card.Title></Card.Header>
          <Card.Content lang="en" class="flex flex-wrap gap-2 p-4 pt-0"><Badge variant="secondary">DNS Security</Badge><Badge variant="secondary">Internet Measurement</Badge><Badge variant="secondary">LLM & Agent Security</Badge></Card.Content>
        </Card.Root>
        <div class="flex flex-wrap items-center gap-x-3 gap-y-1 px-1 text-sm leading-7 text-muted-foreground">
          <a class="inline-flex items-center text-foreground underline underline-offset-4" href={data.social.bilibili} target="_blank" rel="noreferrer">{zh ? '竞赛与项目分享' : 'Projects & competition videos'}<ArrowUpRight size={14} class="ml-1" /></a>
          <a class="inline-flex items-center text-foreground underline underline-offset-4" href={data.social.twitter} target="_blank" rel="noreferrer">X<ArrowUpRight size={14} class="ml-1" /></a>
          <a class="inline-flex items-center text-foreground underline underline-offset-4" href={data.social.xiaohongshu} target="_blank" rel="noreferrer">{zh ? '小红书' : 'Xiaohongshu'}<ArrowUpRight size={14} class="ml-1" /></a>
        </div>
      </aside>

      <div class="profile-results min-w-0 rounded-lg border p-4 sm:p-5">
        <Tabs.Root bind:value={tab} class="results-tabs">
          <Tabs.List lang="en" class="grid h-auto w-full grid-cols-4 p-1" aria-label="Profile sections">
            <Tabs.Trigger value="publications" class="gap-1 px-1 py-2 text-xs sm:text-sm">Research<span class="text-xs opacity-60">{data.publications.length}</span></Tabs.Trigger>
            <Tabs.Trigger value="awards" class="gap-1 px-1 py-2 text-xs sm:text-sm">Awards<span class="text-xs opacity-60">{data.awards.length}</span></Tabs.Trigger>
            <Tabs.Trigger value="news" class="gap-1 px-1 py-2 text-xs sm:text-sm">News<span class="text-xs opacity-60">{data.news.length}</span></Tabs.Trigger>
            <Tabs.Trigger value="projects" class="gap-1 px-1 py-2 text-xs sm:text-sm">Projects<span class="text-xs opacity-60">{projects.length}</span></Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="publications" class="results-content scroll-region mt-4" tabindex={0}><PublicationList publications={data.publications} /></Tabs.Content>
          <Tabs.Content value="awards" class="results-content scroll-region mt-4" tabindex={0}><AwardList awards={data.awards} /></Tabs.Content>
          <Tabs.Content value="news" class="results-content scroll-region mt-4" tabindex={0}><NewsList news={data.news} /></Tabs.Content>
          <Tabs.Content value="projects" class="results-content scroll-region mt-4" tabindex={0}><ProjectList /></Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
    </div>

      <!-- The scrollable region needs keyboard focus for arrow/PageDown scrolling. -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <div class="profile-details scroll-region mt-6 min-w-0 space-y-6 lg:mt-0" role="region" aria-label={zh ? '技术成果与服务' : 'Artifacts and service'} tabindex={0}>
        <section aria-labelledby="ietf-title">
          <h2 id="ietf-title" class="section-divider mb-4 text-base font-semibold"><span class="section-divider-label"><Globe size={18} class="shrink-0" aria-hidden="true" /><span>{zh ? 'IETF 与协议实践' : 'IETF & Protocol Work'}</span></span></h2>
          <div class="rounded-lg border p-4">
            <article>
              <Badge variant="outline" lang="en">IETF Internet-Draft</Badge>
              <h3 class="mt-3 text-sm font-semibold leading-6"><a href="https://datatracker.ietf.org/doc/html/draft-li-atp-02" target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">Agent Transfer Protocol<ArrowUpRight class="ml-1 inline h-4 w-4" /></a></h3>
              <p class="mt-1 text-xs text-muted-foreground">{zh ? '共同作者' : 'Co-author'} · <time datetime="2026-06">{zh ? '2026 年 6 月' : 'June 2026'}</time></p>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">{zh ? 'Agent Transfer Protocol（ATP）个人草案，涵盖基于 DNS 的智能体发现、身份认证与消息通信。' : 'An individual Internet-Draft for Agent Transfer Protocol (ATP): DNS-based agent discovery, authentication, and messaging.'}</p>
            </article>
            <article class="mt-4 border-t pt-4">
              <Badge variant="outline" lang="en">IETF 126 Hackathon</Badge>
              <h3 class="mt-3 text-sm font-semibold leading-6"><a href="https://wiki.ietf.org/en/meeting/126/hackathon#demo-of-agent-transfer-protocol-server-mediated-messaging-for-the-internet-of-agents" target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">Demo of Agent Transfer Protocol<ArrowUpRight class="ml-1 inline h-4 w-4" /></a></h3>
              <p class="mt-1 text-xs text-muted-foreground">{zh ? '奥地利 · 维也纳' : 'Vienna, Austria'} · <time datetime="2026-07">{zh ? '2026 年 7 月' : 'July 2026'}</time></p>
              <p class="mt-2 text-sm leading-6 text-muted-foreground">{zh ? '参加 IETF 126 Hackathon，作为 ATP 演示项目成员参与智能体通信协议实践。' : 'Participated in IETF 126 Hackathon as a member of the ATP demonstration team.'}</p>
            </article>
          </div>
        </section>
        <section aria-labelledby="security-title">
          <h2 id="security-title" class="section-divider mb-4 text-base font-semibold"><span class="section-divider-label"><ShieldCheck size={18} class="shrink-0" aria-hidden="true" /><span>{zh ? '漏洞与技术成果' : 'Vulnerabilities & artifacts'}</span></span></h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card.Root>
              <Card.Header class="p-4 pb-2">
                <div class="mb-2"><Badge variant="outline" lang="en">CVSS 3.1 · 5.3 · Medium</Badge></div>
                <Card.Title class="text-base">CVE-2026-19668</Card.Title>
              </Card.Header>
              <Card.Content class="p-4 pt-0">
                <p class="text-sm leading-6 text-muted-foreground">{zh ? 'BIND 9 DNSSEC 记录处理资源耗尽漏洞。与李想共同报告，获 ISC 官方署名致谢。' : 'Resource exhaustion through DNSSEC record processing in BIND 9. Co-reported with Xiang Li and acknowledged by ISC.'}</p>
                <a class="mt-3 inline-flex items-center text-sm underline underline-offset-4" href="https://kb.isc.org/docs/cve-2026-19668" target="_blank" rel="noreferrer">{zh ? '官方公告' : 'ISC advisory'}<ArrowUpRight size={14} class="ml-1" /></a>
              </Card.Content>
            </Card.Root>
            <Card.Root><Card.Header class="p-4 pb-2"><div class="mb-2"><Badge variant="outline" lang="en">CVSS 3.1 · 7.5</Badge></div><Card.Title class="text-base">CVE-2025-8677</Card.Title></Card.Header><Card.Content class="p-4 pt-0"><p class="text-sm leading-6 text-muted-foreground">{zh ? 'BIND 9 DNSKEY 处理资源耗尽漏洞。ISC 官方致谢许祖耀与李想。' : 'Resource exhaustion via malformed DNSKEY handling in BIND 9. Acknowledged by ISC alongside Xiang Li.'}</p><a class="mt-3 inline-flex items-center text-sm underline underline-offset-4" href="https://kb.isc.org/docs/cve-2025-8677" target="_blank" rel="noreferrer">{zh ? '官方公告' : 'ISC advisory'}<ArrowUpRight size={14} class="ml-1" /></a></Card.Content></Card.Root>
            <Card.Root><Card.Header class="p-4 pb-2"><div class="mb-2"><Badge lang="en">ACSAC 2025 · 2nd Place</Badge></div><Card.Title class="text-base"><a href="https://arxiv.org/abs/2602.09333" target="_blank" rel="noreferrer" class="hover:underline underline-offset-4">XMap<ArrowUpRight size={14} class="ml-1 inline" /></a></Card.Title></Card.Header><Card.Content class="p-4 pt-0"><p class="text-sm leading-6 text-muted-foreground">{zh ? '互联网尺度 IPv4 / IPv6 网络扫描工具，获网络安全技术成果影响力奖第二名。' : 'Fast Internet-wide IPv4 and IPv6 Network Scanner. Cybersecurity Artifacts Impact Award, second place.'}</p><a lang="en" class="mt-3 inline-flex items-center text-sm underline underline-offset-4" href="https://arxiv.org/pdf/2602.09333" target="_blank" rel="noreferrer" aria-label="PDF: XMap">PDF<ArrowUpRight size={14} class="ml-1" /></a></Card.Content></Card.Root>
            <Card.Root role="article">
              <Card.Header class="p-4 pb-2">
                <div class="mb-2"><Badge variant="outline" lang="en">High severity</Badge></div>
                <Card.Title class="text-base">CNNVD-2025-03948296</Card.Title>
              </Card.Header>
              <Card.Content class="p-4 pt-0"><p class="text-sm leading-6 text-muted-foreground">{zh ? '高危漏洞联合提交人，2025 年 11 月。' : 'Co-reporter of a high-severity vulnerability, November 2025.'}</p></Card.Content>
            </Card.Root>
          </div>
        </section>

        <section aria-labelledby="service-title">
          <h2 id="service-title" class="section-divider mb-4 text-base font-semibold"><span class="section-divider-label"><UsersRound size={18} class="shrink-0" aria-hidden="true" /><span>{zh ? '社团与服务' : 'Leadership & service'}</span></span></h2>
          <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            <Card.Root role="article">
              <Card.Header class="p-4 pb-2">
                <div class="flex flex-wrap items-center justify-between gap-2"><Badge lang="en">President</Badge><span class="text-xs text-muted-foreground">2025 — 2026</span></div>
                <Card.Title class="text-sm leading-6">{zh ? '南开大学信息安全协会' : 'Nankai Information Security Association'}</Card.Title>
              </Card.Header>
              <Card.Content class="p-4 pt-0"><p class="text-sm leading-6 text-muted-foreground">{zh ? '组织社团建设、技术交流和竞赛实践，服务成员成长。' : 'Association coordination, technical exchange, and competition practice.'}</p></Card.Content>
            </Card.Root>
            <Card.Root role="article">
              <Card.Header class="p-4 pb-2">
                <div class="flex flex-wrap items-center justify-between gap-2"><Badge variant="secondary" lang="en">Volunteer</Badge><span class="text-xs text-muted-foreground">2025.11</span></div>
                <Card.Title class="text-sm leading-6">{zh ? '密码学会议与竞赛' : 'Cryptography conferences & competitions'}</Card.Title>
              </Card.Header>
              <Card.Content class="p-4 pt-0"><p class="text-sm leading-6 text-muted-foreground">{zh ? '中国密码学年会' : 'Chinese cryptography annual conference:'} <strong class="font-semibold text-foreground">{zh ? '8 小时' : '8 hours'}</strong>{zh ? '；全国密码学技术竞赛决赛' : '; national cryptography competition finals:'} <strong class="font-semibold text-foreground">{zh ? '3 小时' : '3 hours'}</strong>{zh ? '。' : '.'}</p></Card.Content>
            </Card.Root>
          </div>
        </section>
      </div>
  </main>
</div>

<style>
  .profile-shell { display: flex; flex-direction: column; height: 100dvh; overflow: hidden; }
  .profile-header { flex-shrink: 0; }
  .profile-main { flex: 1; min-height: 0; overflow-y: auto; }
  .section-divider { display: flex; align-items: center; gap: 0.75rem; }
  .section-divider::after { content: ''; height: 1px; min-width: 0.75rem; flex: 1; background: hsl(var(--border)); }
  .section-divider-label { display: flex; align-items: center; gap: 0.5rem; min-width: 0; text-align: left; }
  .profile-results { height: clamp(320px, 62dvh, 740px); }
  .profile-results :global(.results-tabs) { display: flex; flex-direction: column; height: 100%; min-height: 0; }
  .profile-results :global([role="tablist"]) { flex-shrink: 0; }
  .profile-results :global(.results-content) { flex: 1; min-height: 0; overflow-y: auto; padding-right: 0.5rem; }
  .profile-results :global(.results-content[data-state="inactive"]) { display: none; }
  .profile-shell :global(.scroll-region) { scrollbar-width: thin; scrollbar-color: hsl(var(--border)) transparent; scrollbar-gutter: stable; overscroll-behavior-y: contain; }
  .profile-shell :global(.scroll-region::-webkit-scrollbar) { width: 6px; }
  .profile-shell :global(.scroll-region::-webkit-scrollbar-thumb) { background: hsl(var(--border)); border-radius: 999px; }
  @media (min-width: 1024px) {
    .profile-shell .profile-main { display: grid; grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.8fr) minmax(0, 1fr); gap: 1.5rem; overflow: hidden; scrollbar-gutter: auto; }
    .profile-primary { grid-column: span 2; display: flex; flex-direction: column; min-height: 0; overflow: clip; }
    .profile-hero { flex-shrink: 0; }
    .profile-workspace { grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.8fr); flex: 1; min-height: 0; }
    .profile-results { height: 100%; min-height: 0; }
    .profile-sidebar, .profile-details { min-height: 0; overflow-y: auto; padding-right: 0.5rem; }
  }
  @media (min-width: 1024px) and (max-height: 700px) {
    .profile-header { min-height: 3rem; }
    .profile-main { padding-block: 0.75rem; }
    .profile-hero { margin-bottom: 0.75rem; row-gap: 0.5rem; }
    .profile-biography { line-height: 1.375rem; }
    .profile-results { padding: 0.75rem; }
    .profile-results :global(.results-content) { margin-top: 0.5rem; }
  }
</style>
