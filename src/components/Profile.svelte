<script lang="ts">
  import { language, getProfileData } from '$lib/stores';
  import Card from './ui/card.svelte';
  import CardHeader from './ui/card-header.svelte';
  import CardTitle from './ui/card-title.svelte';
  import CardContent from './ui/card-content.svelte';
  import Avatar from './ui/avatar.svelte';
  import Badge from './ui/badge.svelte';
  import Button from './ui/button.svelte';
  import LanguageSwitcher from './LanguageSwitcher.svelte';
  import SocialLinks from './SocialLinks.svelte';
  import AwardList from './AwardList.svelte';
  import NewsList from './NewsList.svelte';
  import { GraduationCap, MapPin, BookOpen, Award, Newspaper, Sparkles } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';

  $: data = getProfileData($language);
  $: activeTab = 'awards';

  function tabSlide(node, { duration = 300, delay = 0 }) {
    return {
      duration,
      delay,
      easing: quintOut,
      css: (t) => `
        opacity: ${t};
        transform: translateY(${(1 - t) * 10}px);
      `
    };
  }
</script>

<div class="relative min-h-screen">
  <!-- 背景装饰 -->
  <div class="bg-decoration" />

  <div class="relative z-10 p-4 md:p-8 lg:p-12">
    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <header class="mb-10 flex items-center justify-between animate-fade-in">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <Sparkles class="h-5 w-5 text-primary" />
            <h1 class="text-2xl font-bold gradient-text">
              {$language === 'zh' ? '个人主页' : 'Portfolio'}
            </h1>
          </div>
        </div>
        <LanguageSwitcher />
      </header>

      <!-- Main Content -->
      <div class="grid gap-8 lg:grid-cols-[380px_1fr]">
        <!-- Left Sidebar -->
        <div class="space-y-6" in:fly={{ x: -30, duration: 600 }}>
          <!-- Profile Card -->
          <Card class="glass hover-lift overflow-hidden">
            <!-- 顶部装饰条 -->
            <div class="h-24 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20" />

            <CardContent class="relative px-6 pb-6">
              <div class="flex flex-col items-center text-center -mt-12">
                <!-- 头像 -->
                <div class="relative mb-4">
                  <div class="rounded-full p-1 bg-gradient-to-br from-primary to-purple-600">
                    <Avatar
                      src="/me.png"
                      alt={data.name}
                      size="lg"
                      class="ring-4 ring-background"
                    />
                  </div>
                  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <Badge variant="default" class="px-3 py-1 shadow-lg">
                      INFJ
                    </Badge>
                  </div>
                </div>

                <!-- 名字 -->
                <h2 class="mb-3 text-3xl font-bold tracking-tight">{data.name}</h2>

                <!-- 标签 -->
                <div class="mb-5 flex flex-wrap items-center justify-center gap-2">
                  <Badge variant="secondary" class="gap-1.5 px-3 py-1">
                    <GraduationCap class="h-3.5 w-3.5" />
                    {data.status}
                  </Badge>
                  <Badge variant="secondary" class="gap-1.5 px-3 py-1">
                    <MapPin class="h-3.5 w-3.5" />
                    {data.school}
                  </Badge>
                  <Badge variant="secondary" class="gap-1.5 px-3 py-1">
                    <BookOpen class="h-3.5 w-3.5" />
                    {data.major}
                  </Badge>
                </div>

                <!-- 导师 -->
                <p class="mb-5 text-sm text-muted-foreground">
                  {data.advisorHeader}：
                  <a
                    href={data.advisorLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="font-medium text-primary hover:underline"
                  >
                    {data.advisor}
                  </a>
                </p>

                <!-- 分割线 -->
                <div class="w-full border-t border-border/50 mb-5" />

                <!-- 社交链接 -->
                <SocialLinks social={data.social} />
              </div>
            </CardContent>
          </Card>

          <!-- Quick Info Card -->
          <Card class="glass hover-lift">
            <CardHeader class="pb-3">
              <CardTitle class="text-base font-semibold flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-primary" />
                {$language === 'zh' ? '快速信息' : 'Quick Info'}
              </CardTitle>
            </CardHeader>
            <CardContent class="space-y-3">
              <div class="group flex items-center gap-4 rounded-xl bg-gradient-to-r from-muted/50 to-transparent p-3.5 transition-all duration-300 hover:from-primary/5 hover:to-transparent hover:shadow-sm">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                  <GraduationCap class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="text-sm font-medium">{$language === 'zh' ? '学历' : 'Education'}</p>
                  <p class="text-xs text-muted-foreground">
                    {$language === 'zh' ? '硕士研究生（在读）' : 'Master Student'}
                  </p>
                </div>
              </div>

              <div class="group flex items-center gap-4 rounded-xl bg-gradient-to-r from-muted/50 to-transparent p-3.5 transition-all duration-300 hover:from-primary/5 hover:to-transparent hover:shadow-sm">
                <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-105">
                  <MapPin class="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p class="text-sm font-medium">{$language === 'zh' ? '所在地' : 'Location'}</p>
                  <p class="text-xs text-muted-foreground">
                    {$language === 'zh' ? '中国 · 天津' : 'Tianjin, China'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Right Content -->
        <div class="space-y-6" in:fly={{ x: 30, duration: 600, delay: 200 }}>
          <Card class="glass overflow-hidden">
            <!-- Tab 按钮 -->
            <div class="flex border-b border-border/50 bg-muted/30">
              <button
                class="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 {activeTab === 'awards' ? 'text-primary border-b-2 border-primary bg-background' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}"
                on:click={() => activeTab = 'awards'}
              >
                <Award class="h-4 w-4" />
                {data.awardsHeader}
                <Badge variant="secondary" class="ml-1 text-xs">
                  {data.awards.length}
                </Badge>
              </button>
              <button
                class="flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-300 {activeTab === 'news' ? 'text-primary border-b-2 border-primary bg-background' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}"
                on:click={() => activeTab = 'news'}
              >
                <Newspaper class="h-4 w-4" />
                {data.newsHeader}
                <Badge variant="secondary" class="ml-1 text-xs">
                  {data.news.length}
                </Badge>
              </button>
            </div>

            <!-- 内容区域 -->
            <CardContent class="p-6">
              <div class="scrollable-content" style="max-height: calc(100vh - 320px); overflow-y: auto;">
                {#key activeTab}
                  <div in:tabSlide={{ duration: 300 }}>
                    {#if activeTab === 'awards'}
                      <AwardList awards={data.awards} />
                    {:else}
                      <NewsList news={data.news} />
                    {/if}
                  </div>
                {/key}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <!-- Footer -->
      <footer class="mt-12 text-center animate-fade-in">
        <div class="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
          <Sparkles class="h-3 w-3" />
          <span>
            {$language === 'zh'
              ? '使用 Astro + Svelte + shadcn/ui 构建'
              : 'Built with Astro + Svelte + shadcn/ui'}
          </span>
        </div>
      </footer>
    </div>
  </div>
</div>

<style>
  .scrollable-content {
    scrollbar-width: thin;
    scrollbar-color: hsl(var(--muted-foreground) / 0.2) transparent;
  }

  .scrollable-content::-webkit-scrollbar {
    width: 6px;
  }

  .scrollable-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable-content::-webkit-scrollbar-thumb {
    background-color: hsl(var(--muted-foreground) / 0.2);
    border-radius: 3px;
  }

  .scrollable-content::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--muted-foreground) / 0.4);
  }
</style>
