import { defineConfig } from "astro/config";

import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_MY_DOMAIN,
  base: import.meta.env.PUBLIC_BASE,
  integrations: [react()],
  build: {
    include: ["src/**/*"],
  },
});
