import { defineConfig } from 'vite'
import { join } from 'path'
import { node } from '@liuli-util/vite-plugin-node'

export default defineConfig({
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  plugins: [node()],
})
