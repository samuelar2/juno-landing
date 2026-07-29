import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://meetosmos.com",
  vite: {
    plugins: [tailwindcss()],
  },
});
