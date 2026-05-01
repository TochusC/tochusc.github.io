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

  <div class="relative z-10 px-4 py-6 md:px-8 lg:px-16">
    <div class="mx-auto max-w-[1400px]">
      <!-- Header -->
      <header class="mb-8 flex items-center justify-between animate-fade-in">
        <div class="flex items-center gap-3">
          <Sparkles class="h-5 w-5 text-primary" />
          <h1 class="text-xl font-bold gradient-text">
            {$language === 'zh' ? '个人主页' : 'Portfolio'}
          </h1>
        </div>
        <LanguageSwitcher />
      </header>

      <!-- Main Content -->
      <div class="grid gap-6 lg:grid-cols-[320px_1fr] xl:grid-cols-[350px_1fr]">
        <!-- Left Sidebar -->
        <div class="space-y-4" in:fly={{ x: -20, duration: 500 }}>
          <!-- Profile Card -->
          <Card class="glass overflow-hidden">
            <!-- 顶部装饰条 -->
            <div class="h-20 bg-gradient-to-r from-primary/30 via-purple-500/20 to-primary/30" />

            <CardContent class="relative px-5 pb-5">
              <div class="flex flex-col items-center text-center -mt-10">
                <!-- 头像 -->
                <div class="relative mb-3">
                  <div class="rounded-full p-0.5 bg-gradient-to-br from-primary to-purple-600">
                    <Avatar
                      src="/me.png"
                      alt={data.name}
                      size="lg"
                      class="ring-2 ring-background"
                    />
                  </div>
                  <div class="absolute -bottom-1 left-1/2 -translate-x-1/2">
                    <Badge variant="default" class="px-2.5 py-0.5 text-xs shadow-lg">
                      INFJ
                    </Badge>
                  </div>
                </div>

                <!-- 名字 -->
                <h2 class="mb-2 text-2xl font-bold tracking-tight">{data.name}</h2>

                <!-- 标签 -->
                <div class="mb-3 flex flex-wrap items-center justify-center gap-1.5">
                  <Badge variant="secondary" class="gap-1 px-2 py-0.5 text-xs">
                    <GraduationCap class="h-3 w-3" />
                    {data.status}
                  </Badge>
                  <Badge variant="secondary" class="gap-1 px-2 py-0.5 text-xs">
                    <MapPin class="h-3 w-3" />
                    {data.school}
                  </Badge>
                  <Badge variant="secondary" class="gap-1 px-2 py-0.5 text-xs">
                    <BookOpen class="h-3 w-3" />
                    {data.major}
                  </Badge>
                </div>

                <!-- 导师 -->
                <p class="mb-3 text-xs text-muted-foreground">
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
                <div class="w-full border-t border-border/50 mb-3" />

                <!-- 社交链接 -->
                <SocialLinks social={data.social} />
              </div>
            </CardContent>
          </Card>

          <!-- Quick Info Card -->
          <Card class="glass">
            <CardHeader class="pb-2 pt-4 px-4">
              <CardTitle class="text-sm font-semibold flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-primary" />
                {$language === 'zh' ? '快速信息' : 'Quick Info'}
              </CardTitle>
            </CardHeader>
            <CardContent class="px-4 pb-4 space-y-2">
              <div class="group flex items-center gap-3 rounded-lg bg-muted/30 p-2.5 transition-all duration-200 hover:bg-primary/5">
                <div class="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
                  <GraduationCap class="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p class="text-xs font-medium">{$language === 'zh' ? '学历' : 'Education'}</p>
                  <p class="text-[11px] text-muted-foreground">
                    {$language === 'zh' ? '硕士研究生（在读）' : 'Master Student'}
                  </p>
                </div>
              </div>

              <div class="group flex items-center gap-3 rounded-lg bg-muted/30 p-2.5 transition-all duration-200 hover:bg-primary/5">
                <div class="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 transition-all duration-200 group-hover:bg-primary/20">
                  <MapPin class="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p class="text-xs font-medium">{$language === 'zh' ? '所在地' : 'Location'}</p>
                  <p class="text-[11px] text-muted-foreground">
                    {$language === 'zh' ? '中国 · 天津' : 'Tianjin, China'}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <!-- Right Content -->
        <div in:fly={{ x: 20, duration: 500, delay: 150 }}>
          <Card class="glass overflow-hidden h-full">
            <!-- Tab 按钮 -->
            <div class="flex border-b border-border/50">
              <button
                class="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-all duration-300 relative {activeTab === 'awards' ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
                on:click={() => activeTab = 'awards'}
              >
                <Award class="h-4 w-4" />
                {data.awardsHeader}
                <Badge variant={activeTab === 'awards' ? 'default' : 'secondary'} class="text-[10px] px-1.5 py-0">
                  {data.awards.length}
                </Badge>
                {#if activeTab === 'awards'}
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                {/if}
              </button>
              <div class="w-px bg-border/50 self-stretch my-2" />
              <button
                class="flex-1 flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium transition-all duration-300 relative {activeTab === 'news' ? 'text-primary bg-primary/5' : 'text-muted-foreground hover:text-foreground hover:bg-muted/30'}"
                on:click={() => activeTab = 'news'}
              >
                <Newspaper class="h-4 w-4" />
                {data.newsHeader}
                <Badge variant={activeTab === 'news' ? 'default' : 'secondary'} class="text-[10px] px-1.5 py-0">
                  {data.news.length}
                </Badge>
                {#if activeTab === 'news'}
                  <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                {/if}
              </button>
            </div>

            <!-- 内容区域 -->
            <CardContent class="p-5">
              <div class="scrollable-content" style="max-height: calc(100vh - 220px); overflow-y: auto;">
                {#key activeTab}
                  <div in:tabSlide={{ duration: 250 }}>
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
      <footer class="mt-8 text-center animate-fade-in">
        <div class="inline-flex items-center gap-1.5 rounded-full bg-muted/40 px-3 py-1.5 text-[11px] text-muted-foreground">
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
    scrollbar-color: hsl(var(--muted-foreground) / 0.15) transparent;
  }

  .scrollable-content::-webkit-scrollbar {
    width: 5px;
  }

  .scrollable-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable-content::-webkit-scrollbar-thumb {
    background-color: hsl(var(--muted-foreground) / 0.15);
    border-radius: 3px;
  }

  .scrollable-content::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--muted-foreground) / 0.3);
  }
</style>
