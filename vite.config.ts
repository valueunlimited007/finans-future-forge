import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";
import { spawnSync } from "child_process";
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'seo-files-generator',
      buildStart() {
        try {
          const scriptPath = path.resolve(__dirname, 'scripts/generate-seo-files.mjs');
          if (fs.existsSync(scriptPath)) {
            const res = spawnSync('node', [scriptPath], { stdio: 'inherit' });
            if (res.status !== 0) {
              console.warn('[SEO] generator script exited with code', res.status);
            }
          } else {
            console.warn('[SEO] generator script not found at', scriptPath);
          }
        } catch (e) {
          console.warn('[SEO] generation failed:', e);
        }
      },
    },
  ].filter(Boolean),
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
