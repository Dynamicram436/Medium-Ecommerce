// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  server: {
    host: true, // or '0.0.0.0'
    port: 5173, // optional, default is 5173
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})