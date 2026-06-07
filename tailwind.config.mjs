/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Terminal / sh-inspired palette (cream on deep purple-black)
        bg: '#1f1226',
        'bg-elev': '#2a1830',
        'bg-deep': '#150b1a',
        fg: '#f4e8d6',
        'fg-dim': '#a89b86',
        accent: '#c4b5d4',
        'accent-strong': '#d8c8e8',
        'accent-2': '#6b5b7a',
        success: '#8cd9a8',
        warn: '#e8b96a',
      },
      fontFamily: {
        sans: ['Geist Sans', 'system-ui', 'sans-serif'],
        mono: ['Geist Mono', 'JetBrains Mono', 'ui-monospace', 'monospace'],
        heading: ['Geist Mono', 'monospace'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};