import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: import.meta.env.PUBLIC_MY_DOMAIN,
  integrations: [react()],
  cname: {
    // Your custom domain (e.g., example.com)
    domain: import.meta.env.PUBLIC_CUSTOM_DOMAIN,
    // The canonical name (e.g., www.example.com)
    canonicalName: import.meta.env.PUBLIC_CUSTOM_CANONICAL_DOMAIN,
  },
});
