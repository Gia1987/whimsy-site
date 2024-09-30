import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://Gia1987.github.io',
  base: 'my-repo',
  integrations: [react()]
});