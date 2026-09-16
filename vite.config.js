import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const SITE_URL = (process.env.VITE_SITE_URL || "https://reallivesworld.com").replace(/\/$/, "");

export default defineConfig({
  plugins: [
    react(),
    {
      name: "inject-site-url",
      transformIndexHtml(html) {
        return html.replaceAll("%SITE_URL%", SITE_URL);
      },
    },
  ],
});
