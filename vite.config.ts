import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/text-confuse",
  build: {
    outDir: "./docs",
  },
  server: {
    host: true,
  },
  plugins: [react()],
});
