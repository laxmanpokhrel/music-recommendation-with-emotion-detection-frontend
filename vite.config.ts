import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": new URL("./src/", import.meta.url).pathname,
      "@Components": new URL("./src/components/", import.meta.url).pathname,
      "@Services": new URL("./src/services/", import.meta.url).pathname,
      "@Utils": new URL("./src/utils/", import.meta.url).pathname,
      "@Store": new URL("./src/store/", import.meta.url).pathname,
      "@Models": new URL("./src/models/", import.meta.url).pathname,
      "@Interfaces": new URL("./src/interfaces/", import.meta.url).pathname,
      "@Hooks": new URL("./src/hooks/", import.meta.url).pathname,
    },
  },
});
