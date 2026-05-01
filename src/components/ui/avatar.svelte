<script lang="ts">
  import { cn } from '$lib/utils';

  export let src: string = '';
  export let alt: string = '';
  export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';
  export let className: string = '';

  const sizeClasses = {
    xs: 'h-6 w-6',
    sm: 'h-8 w-8',
    md: 'h-12 w-12',
    lg: 'h-24 w-24',
    xl: 'h-32 w-32',
  };
</script>

<div
  class={cn(
    'relative flex shrink-0 overflow-hidden rounded-full',
    sizeClasses[size],
    className
  )}
  {...$$restProps}
>
  {#if src}
    <img
      {src}
      {alt}
      class="aspect-square h-full w-full object-cover"
      loading="lazy"
    />
  {:else}
    <div class="flex h-full w-full items-center justify-center rounded-full bg-muted">
      <slot />
    </div>
  {/if}
</div>
