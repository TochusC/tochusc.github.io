<script lang="ts">
  import { onMount } from 'svelte';
  import { language, getProfileData } from '$lib/stores';
  import { Button, buttonVariants } from './ui/button';
  import * as Card from './ui/card';
  import * as Tabs from './ui/tabs';
  import { Badge } from './ui/badge';
  import { ArrowUpRight, Download, Github, Mail, Moon, Sun, ShieldCheck } from 'lucide-svelte';
  import PublicationList from './PublicationList.svelte';
  import AwardList from './AwardList.svelte';
  import NewsList from './NewsList.svelte';

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

<div class="mx-auto max-w-6xl px-5 sm:px-8">
  <a class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:p-3" href="#main">{zh ? '跳转到正文' : 'Skip to content'}</a>
  <header class="flex min-h-20 items-center justify-between gap-3 border-b">
    <a href="/" class="text-sm font-semibold tracking-tight" aria-label={zh ? '许祖耀主页' : 'Zuyao Xu home'}>ZU YAO XU<span class="ml-2 text-muted-foreground font-normal">/ TochusC</span></a>
    <div class="flex items-center gap-1">
      <Button variant="ghost" size="sm" aria-label={zh ? 'Switch to English' : '切换到中文'} on:click={() => language.toggle()}>{zh ? 'EN' : '中文'}</Button>
      <Button variant="ghost" size="icon" aria-label={zh ? (dark ? '切换浅色模式' : '切换深色模式') : (dark ? 'Switch to light theme' : 'Switch to dark theme')} on:click={toggleTheme}>
        {#if dark}<Sun size={17} />{:else}<Moon size={17} />{/if}
      </Button>
    </div>
  </header>

  <main id="main" class="py-10 sm:py-14">
    <section aria-labelledby="profile-name" class="mb-10 grid items-center gap-8 sm:grid-cols-[1fr_auto]">
      <div class="max-w-2xl">
        <div class="mb-4 flex flex-wrap gap-2"><Badge variant="secondary">{data.school}</Badge><Badge variant="outline">{zh ? '网络空间安全 · 硕士研究生' : 'Cybersecurity · Master’s student'}</Badge></div>
        <h1 id="profile-name" class="text-4xl font-semibold tracking-tight sm:text-5xl">{data.name}<span class="ml-4 inline-block text-xl font-normal text-muted-foreground sm:text-2xl">{zh ? 'Zuyao Xu' : '许祖耀'}</span></h1>
        <p class="mt-5 text-base leading-8 text-muted-foreground">{zh ? '关注互联网基础设施安全、网络测量与智能体安全。希望通过测量、协议设计和真实系统中的漏洞研究，让网络与 AI 系统更可靠。' : 'I study Internet infrastructure security, network measurement, and agent security, with an interest in making networks and AI systems more reliable through measurement, protocol design, and vulnerability research.'}</p>
        <p class="mt-3 text-sm text-muted-foreground">{data.advisorHeader} <a href={data.advisorLink} class="font-medium text-foreground underline underline-offset-4" target="_blank" rel="noreferrer">{data.advisor}</a><span class="mx-3">·</span>{zh ? '中国 · 天津' : 'Tianjin, China'}</p>
        <div class="mt-6 flex flex-wrap gap-2">
          <a class={buttonVariants({size:'sm'})} href={zh ? '/resume-zh.pdf' : '/resume-en.pdf'} download><Download class="mr-2 h-4 w-4" />{zh ? '下载简历' : 'Download CV'}</a>
          <a class={buttonVariants({variant:'outline',size:'sm'})} href={data.social.email}><Mail class="mr-2 h-4 w-4" />{zh ? '联系我' : 'Email'}</a>
          <a class={buttonVariants({variant:'outline',size:'sm'})} href={data.social.github} target="_blank" rel="noreferrer"><Github class="mr-2 h-4 w-4" />GitHub</a>
          <a class={buttonVariants({variant:'ghost',size:'sm'})} href={data.social.scholar} target="_blank" rel="noreferrer">Google Scholar<ArrowUpRight class="ml-1 h-4 w-4" /></a>
        </div>
      </div>
      <img src="/me.png" alt={zh ? '许祖耀' : 'Zuyao Xu'} width="160" height="160" class="order-first h-28 w-28 rounded-xl border object-cover sm:order-last sm:h-40 sm:w-40" />
    </section>

    <div class="grid gap-8 lg:grid-cols-[240px_minmax(0,1fr)]">
      <aside class="space-y-5">
        <Card.Root>
          <Card.Header class="pb-4"><Card.Title tag="h2" class="text-sm">{zh ? '教育背景' : 'Education'}</Card.Title></Card.Header>
          <Card.Content class="space-y-5 text-sm">
            <div><p class="mb-1 text-xs text-muted-foreground">2025 — {zh ? '至今' : 'Present'}</p><p class="font-medium">{data.school}</p><p class="mt-1 leading-6 text-muted-foreground">{zh ? '网络空间安全 · 硕士' : 'M.S. student · Cybersecurity'}</p></div>
            <div class="border-t pt-4"><p class="mb-1 text-xs text-muted-foreground">2021 — 2025</p><p class="font-medium leading-6">{data.undergraduate}</p><p class="mt-1 leading-6 text-muted-foreground">{data.undergraduateMajor}</p><p class="mt-2 text-xs text-muted-foreground">{zh ? '荣誉学士学位 · 优秀毕业生' : 'Honorary bachelor’s degree · Outstanding graduate'}</p></div>
          </Card.Content>
        </Card.Root>
        <Card.Root>
          <Card.Header class="pb-4"><Card.Title tag="h2" class="text-sm">{zh ? '研究方向' : 'Research interests'}</Card.Title></Card.Header>
          <Card.Content class="flex flex-wrap gap-2"><Badge variant="secondary">DNS Security</Badge><Badge variant="secondary">Internet Measurement</Badge><Badge variant="secondary">LLM & Agent Security</Badge></Card.Content>
        </Card.Root>
        <div class="px-1 text-sm leading-7 text-muted-foreground"><p>{zh ? '技术之外，也喜欢攀岩、跑步和定向越野。' : 'Outside research: climbing, running, and orienteering.'}</p><a class="mt-2 inline-flex items-center text-foreground underline underline-offset-4" href={data.social.bilibili} target="_blank" rel="noreferrer">{zh ? '竞赛与项目分享' : 'Projects & competition videos'}<ArrowUpRight size={14} class="ml-1" /></a><a class="ml-3 inline-flex items-center text-foreground underline underline-offset-4" href={data.social.twitter} target="_blank" rel="noreferrer">X<ArrowUpRight size={14} class="ml-1" /></a></div>
      </aside>

      <div class="min-w-0 space-y-8">
        <Tabs.Root bind:value={tab}>
          <Tabs.List class="grid h-auto w-full grid-cols-3 p-1" aria-label={zh ? '个人成果分类' : 'Profile sections'}>
            <Tabs.Trigger value="publications" class="gap-2 py-2">{zh ? '论文' : 'Research'}<span class="text-xs opacity-60">{data.publications.length}</span></Tabs.Trigger>
            <Tabs.Trigger value="awards" class="gap-2 py-2">{zh ? '获奖' : 'Awards'}</Tabs.Trigger>
            <Tabs.Trigger value="news" class="gap-2 py-2">{zh ? '动态' : 'News'}</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="publications" class="mt-6"><PublicationList publications={data.publications} /></Tabs.Content>
          <Tabs.Content value="awards" class="mt-6"><AwardList awards={data.awards} /></Tabs.Content>
          <Tabs.Content value="news" class="mt-6"><NewsList news={data.news} /></Tabs.Content>
        </Tabs.Root>

        <section aria-labelledby="security-title" class="border-t pt-7">
          <h2 id="security-title" class="mb-4 flex items-center gap-2 text-base font-semibold"><ShieldCheck size={18} />{zh ? '漏洞与技术成果' : 'Vulnerabilities & artifacts'}</h2>
          <div class="grid gap-4 sm:grid-cols-2">
            <Card.Root><Card.Header class="pb-3"><div class="mb-2"><Badge variant="outline">CVSS 3.1 · 7.5</Badge></div><Card.Title class="text-base">CVE-2025-8677</Card.Title></Card.Header><Card.Content><p class="text-sm leading-6 text-muted-foreground">{zh ? 'BIND 9 DNSKEY 处理资源耗尽漏洞。ISC 官方致谢许祖耀与李想。' : 'Resource exhaustion via malformed DNSKEY handling in BIND 9. Acknowledged by ISC alongside Xiang Li.'}</p><a class="mt-3 inline-flex items-center text-sm underline underline-offset-4" href="https://kb.isc.org/docs/cve-2025-8677" target="_blank" rel="noreferrer">{zh ? '官方公告' : 'ISC advisory'}<ArrowUpRight size={14} class="ml-1" /></a></Card.Content></Card.Root>
            <Card.Root><Card.Header class="pb-3"><div class="mb-2"><Badge variant="outline">ACSAC 2025 · 2nd Place</Badge></div><Card.Title class="text-base">XMap</Card.Title></Card.Header><Card.Content><p class="text-sm leading-6 text-muted-foreground">{zh ? '互联网尺度 IPv4 / IPv6 网络扫描工具，获网络安全技术成果影响力奖第二名。' : 'Fast Internet-wide IPv4 and IPv6 Network Scanner. Cybersecurity Artifacts Impact Award, second place.'}</p></Card.Content></Card.Root>
          </div>
        <p class="mt-4 text-sm leading-6 text-muted-foreground">{zh ? 'CNVD-2025-03948296：高危漏洞联合提交人，2025 年 11 月。' : 'CNVD-2025-03948296: co-reporter of a high-severity vulnerability, November 2025.'}</p>
        </section>

        <section aria-labelledby="service-title" class="border-t pt-7">
          <h2 id="service-title" class="mb-5 text-base font-semibold">{zh ? '社团与服务' : 'Leadership & service'}</h2>
          <div class="space-y-5 text-sm">
            <div class="flex flex-col gap-1 sm:flex-row sm:justify-between"><div><p class="font-medium">{zh ? '南开大学信息安全协会社长' : 'President, Nankai Information Security Association'}</p><p class="mt-1 leading-6 text-muted-foreground">{zh ? '组织社团建设、技术交流和竞赛实践，服务成员成长。' : 'Association coordination, technical exchange, and competition practice.'}</p></div><span class="shrink-0 text-xs text-muted-foreground">2025 — 2026</span></div>
            <div class="flex flex-col gap-1 sm:flex-row sm:justify-between"><div><p class="font-medium">{zh ? '密码学会议与竞赛志愿服务' : 'Volunteer service in cryptography'}</p><p class="mt-1 leading-6 text-muted-foreground">{zh ? '中国密码学年会 8 小时；全国密码学技术竞赛决赛 3 小时。' : 'Chinese cryptography annual conference: 8 hours; national cryptography competition finals: 3 hours.'}</p></div><span class="shrink-0 text-xs text-muted-foreground">2025.11</span></div>
            <div class="flex flex-col gap-1 sm:flex-row sm:justify-between"><div><p class="font-medium">IETF 126 Hackathon · Agent Transfer Protocol</p><p class="mt-1 leading-6 text-muted-foreground">{zh ? 'ATP 演示项目成员，参与智能体通信协议实践。' : 'Listed as a champion of the ATP interoperability demonstration.'} <a class="underline underline-offset-4" href="https://wiki.ietf.org/en/meeting/126/hackathon" target="_blank" rel="noreferrer">{zh ? '项目页面' : 'Project page'}</a></p></div><span class="shrink-0 text-xs text-muted-foreground">2026.07</span></div>
          </div>
        </section>
      </div>
    </div>
  </main>
  <footer class="flex flex-wrap items-center justify-between gap-3 border-t py-6 text-xs text-muted-foreground"><span>© 2026 {data.name}</span><span>{zh ? '更新于 2026 年 9 月' : 'Updated September 2026'}</span></footer>
</div>
