import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/fillo-vite-client-intake-starter/" : "/",
  plugins: [react()],
});
