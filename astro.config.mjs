import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import path from 'path';

export default defineConfig({
  integrations: [
    svelte(),
    tailwind({ applyBaseStyles: false }),
  ],
  output: 'static',
  site: 'https://tochusc.github.io',
  vite: {
    resolve: {
      alias: {
        '$lib': path.resolve('./src/lib'),
        '$components': path.resolve('./src/components'),
      },
    },
  },
});
