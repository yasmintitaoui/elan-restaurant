import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // ✅ must be installed

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
