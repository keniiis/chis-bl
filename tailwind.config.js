/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'ffamily': '"Poppins", system-ui;',
      },
      fontSize: {
        'texto-principal': 'clamp(2.5rem, 4vw + 1rem, 4.5rem)',
        'texto-sec': 'clamp(14px, 1.5vw + 1rem, 39px)'
      },
    },
  },
  plugins: [],
}