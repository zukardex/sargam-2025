import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: "0.0.0.0", // Allows external access inside Docker
    port: 3000,
    strictPort: true, // Ensures Vite doesn't switch ports
    hmr: {
      clientPort: 443, // Needed for HTTPS setup
    },
    allowedHosts: ["beta.cet.ac.in", "sargam25.cet.ac.in", "sargam.cet.ac.in"], // Add allowed hosts
  }
})
