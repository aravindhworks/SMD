import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    ],
    server: {
      host: '0.0.0.0', // Listen on all network interfaces
      port: 5173, // Default Vite port (change if needed)
    },
  })
