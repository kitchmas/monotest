import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {fileURLToPath, URL} from "url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@mono/stores' :fileURLToPath(new URL("./packages/stores/src/index.ts", import.meta.url))
    },
  },
  optimizeDeps: {
    include: ['@mono/stores'],
  },
})
