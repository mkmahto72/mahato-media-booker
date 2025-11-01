import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
// NOTE: When deploying to GitHub Pages under a repo (e.g. https://<user>.github.io/mahato-media-booker/)
// set `base` to the repo name path. If you plan to publish to a user/org site root
// (https://<user>.github.io/) change base to '/'.
export default defineConfig(({ mode }) => ({
  base: '/mahato-media-booker/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
