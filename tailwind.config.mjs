// tailwind.config.mjs
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'asao-green': '#2E7D32',
        'asao-bg': '#F4F1ED',
      }
    }
  },
  plugins: [],
}