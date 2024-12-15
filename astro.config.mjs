import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  // ...
  integrations: [tailwind()],
  site: "https://github.com/realMecoy/masterkeys",
  base: "masterkeys",
});
