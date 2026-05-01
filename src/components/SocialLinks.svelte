<script lang="ts">
  import Button from './ui/button.svelte';
  import { Github, Mail, Twitter, BookOpen } from 'lucide-svelte';

  export let social: {
    github: string;
    email: string;
    twitter: string;
    bilibili: string;
    scholar: string;
  };

  const links = [
    { href: social.scholar, icon: BookOpen, label: 'Google Scholar' },
    { href: social.github, icon: Github, label: 'GitHub' },
    { href: social.email, icon: Mail, label: 'Email' },
    { href: social.twitter, icon: Twitter, label: 'Twitter' },
  ];
</script>

<div class="flex items-center gap-2">
  {#each links as { href, icon: Icon, label }}
    <Button
      {href}
      variant="outline"
      size="icon"
      class="h-8 w-8 rounded-lg hover-lift"
    >
      <Icon class="h-3.5 w-3.5" />
      <span class="sr-only">{label}</span>
    </Button>
  {/each}
  <Button
    href={social.bilibili}
    variant="outline"
    size="icon"
    class="h-8 w-8 rounded-lg hover-lift"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
      <path d="M6 6h4l2 4h4l2-4h4" />
      <path d="M6 18h4l2-4h4l2 4h4" />
    </svg>
    <span class="sr-only">Bilibili</span>
  </Button>
</div>
