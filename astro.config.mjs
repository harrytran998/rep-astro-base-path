import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import AstroNode from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  // Enable Svelte to support Svelte components.
  integrations: [svelte()],
  base: '/ok',
  server: {
    port: 4000,
    host: '0.0.0.0',
  },
  adapter: AstroNode({
    mode: 'standalone',
  }),
});
