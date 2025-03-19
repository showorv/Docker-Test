import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows Docker to expose the server
    port: 5173, // Ensures Vite runs on this port
    strictPort: true, // Ensures it doesn’t change ports
    watch: {
      usePolling: true, // Fixes file-watching issues inside Docker
    },
  },
})
