/**
 * File: vite.config.js
 * Author: Edoardo Sabatini
 * Date: 02-01-2026
 * Project: FractionLayer
 */

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
})
