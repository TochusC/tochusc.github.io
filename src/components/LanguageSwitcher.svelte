<script lang="ts">
  import { language } from '$lib/stores';
  import Button from './ui/button.svelte';
</script>

<div class="flex items-center gap-2">
  <Button
    variant={$language === 'en' ? 'default' : 'ghost'}
    size="sm"
    on:click={() => language.set('en')}
    class="text-xs"
  >
    EN
  </Button>
  <span class="text-muted-foreground">|</span>
  <Button
    variant={$language === 'zh' ? 'default' : 'ghost'}
    size="sm"
    on:click={() => language.set('zh')}
    class="text-xs"
  >
    中文
  </Button>
</div>
