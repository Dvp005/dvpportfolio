import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/dvpportfolio/", // use "/REPO_NAME/" for GitHub Pages
})
