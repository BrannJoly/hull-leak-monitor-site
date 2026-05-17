import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const base = (process.env.BASE_PATH || "/").replace(/\/?$/, "/");

export default defineConfig({
  base,
  output: "static",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
});
