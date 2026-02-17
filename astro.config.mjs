import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel'; // 1. Import adapternya

export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'server', // Ini yang bikin dia butuh adapter
  adapter: vercel(), // 2. Pasang adapternya di sini
});