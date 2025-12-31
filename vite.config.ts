import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'magical-flower', // TODO: Replace 'YOUR_REPO_NAME' with your repository name
})
