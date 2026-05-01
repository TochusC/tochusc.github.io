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
  import { GraduationCap, MapPin, BookOpen, Award, Newspaper } from 'lucide-svelte';
  import { fade, fly, slide } from 'svelte/transition';
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

<div class="min-h-screen p-4 md:p-8">
  <div class="mx-auto max-w-6xl">
    <!-- Header -->
    <header class="mb-8 flex items-center justify-between animate-fade-in">
      <div class="flex items-center gap-3">
        <div class="h-2 w-8 rounded-full bg-primary" />
        <h1 class="text-2xl font-bold gradient-text">
          {$language === 'zh' ? '个人主页' : 'Profile'}
        </h1>
      </div>
      <LanguageSwitcher />
    </header>

    <!-- Main Content -->
    <div class="grid gap-6 md:grid-cols-[350px_1fr]">
      <!-- Left Sidebar -->
      <div class="space-y-6" in:fly={{ x: -20, duration: 500 }}>
        <!-- Profile Card -->
        <Card class="glass hover-lift">
          <CardContent class="p-6">
            <div class="flex flex-col items-center text-center">
              <div class="relative mb-4">
                <Avatar
                  src="/me.png"
                  alt={data.name}
                  size="lg"
                  class="ring-4 ring-primary/20 animate-glow"
                />
                <div class="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <Badge variant="default" class="px-3 py-1">
                    INFJ
                  </Badge>
                </div>
              </div>

              <h2 class="mb-2 text-2xl font-bold">{data.name}</h2>

              <div class="mb-4 flex flex-wrap items-center justify-center gap-2">
                <Badge variant="secondary" class="gap-1">
                  <GraduationCap class="h-3 w-3" />
                  {data.status}
                </Badge>
                <Badge variant="secondary" class="gap-1">
                  <MapPin class="h-3 w-3" />
                  {data.school}
                </Badge>
                <Badge variant="secondary" class="gap-1">
                  <BookOpen class="h-3 w-3" />
                  {data.major}
                </Badge>
              </div>

              <p class="mb-4 text-sm text-muted-foreground">
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

              <SocialLinks social={data.social} />
            </div>
          </CardContent>
        </Card>

        <!-- Quick Info Card -->
        <Card class="glass hover-lift">
          <CardHeader>
            <CardTitle class="text-lg">
              {$language === 'zh' ? '快速信息' : 'Quick Info'}
            </CardTitle>
          </CardHeader>
          <CardContent class="space-y-3">
            <div class="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <GraduationCap class="h-5 w-5 text-primary" />
              </div>
              <div>
                <p class="text-sm font-medium">{$language === 'zh' ? '学历' : 'Education'}</p>
                <p class="text-xs text-muted-foreground">
                  {$language === 'zh' ? '硕士研究生（在读）' : 'Master Student'}
                </p>
              </div>
            </div>

            <div class="flex items-center gap-3 rounded-lg bg-muted/50 p-3 transition-colors hover:bg-muted">
              <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MapPin class="h-5 w-5 text-primary" />
              </div>
              <div>
                <p class="text-sm font-medium">{$language === 'zh' ? '所在地' : 'Location'}</p>
                <p class="text-xs text-muted-foreground">
                  {$language === 'zh' ? '中国·天津' : 'Tianjin, China'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <!-- Right Content -->
      <div class="space-y-6" in:fly={{ x: 20, duration: 500, delay: 200 }}>
        <!-- Tabs -->
        <Card class="glass">
          <CardContent class="p-6">
            <div class="mb-6 flex gap-2">
              <Button
                variant={activeTab === 'awards' ? 'default' : 'ghost'}
                on:click={() => activeTab = 'awards'}
                class="flex-1 transition-all duration-300"
              >
                <Award class="mr-2 h-4 w-4" />
                {data.awardsHeader}
              </Button>
              <Button
                variant={activeTab === 'news' ? 'default' : 'ghost'}
                on:click={() => activeTab = 'news'}
                class="flex-1 transition-all duration-300"
              >
                <Newspaper class="mr-2 h-4 w-4" />
                {data.newsHeader}
              </Button>
            </div>

            <div class="scrollable-content" style="max-height: calc(100vh - 280px); overflow-y: auto;">
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
    <footer class="mt-8 text-center text-sm text-muted-foreground animate-fade-in">
      <p>
        {$language === 'zh'
          ? '使用 Astro + Svelte + shadcn/ui 构建'
          : 'Built with Astro + Svelte + shadcn/ui'}
      </p>
    </footer>
  </div>
</div>

<style>
  .scrollable-content {
    scrollbar-width: thin;
    scrollbar-color: hsl(var(--muted-foreground) / 0.3) transparent;
  }

  .scrollable-content::-webkit-scrollbar {
    width: 6px;
  }

  .scrollable-content::-webkit-scrollbar-track {
    background: transparent;
  }

  .scrollable-content::-webkit-scrollbar-thumb {
    background-color: hsl(var(--muted-foreground) / 0.3);
    border-radius: 3px;
  }

  .scrollable-content::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--muted-foreground) / 0.5);
  }
</style>
