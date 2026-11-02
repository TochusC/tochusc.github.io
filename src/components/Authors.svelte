<script lang="ts">
  export let names: string;
</script>

{#each names.split(/(Zuyao Xu|许祖耀)/g) as name}
  {#if name === 'Zuyao Xu' || name === '许祖耀'}<strong class="font-semibold text-foreground">{name}</strong>{:else}{name}{/if}
{/each}
