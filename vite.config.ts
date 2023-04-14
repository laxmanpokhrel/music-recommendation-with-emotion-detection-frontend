import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: {
      "@": new URL("./src/", import.meta.url).pathname,
      "@UI": new URL("./src/ui/", import.meta.url).pathname,
      "@Atoms": new URL("./src/ui/atoms/", import.meta.url).pathname,
      "@Molecules": new URL("./src/ui/molecules/", import.meta.url).pathname,
      "@Compounds": new URL("./src/ui/compounds/", import.meta.url).pathname,
      "@Services": new URL("./src/services/", import.meta.url).pathname,
      "@Utils": new URL("./src/utils/", import.meta.url).pathname,
      "@Store": new URL("./src/store/", import.meta.url).pathname,
      "@Models": new URL("./src/models/", import.meta.url).pathname,
      "@Interfaces": new URL("./src/interfaces/", import.meta.url).pathname,
      "@Hooks": new URL("./src/hooks/", import.meta.url).pathname,
      "@Api": new URL("./src/api/", import.meta.url).pathname,
    },
  },
  build: {
    sourcemap: true,
  },
});
