/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Black + white terminal with matrix green + burnt orange accents
        bg: '#0a0a0a',
        'bg-elev': '#141414',
        'bg-deep': '#050505',
        fg: '#f0f0f0',
        'fg-dim': '#888888',
        accent: '#00ff9f',        // matrix green (primary)
        'accent-strong': '#39ff14',
        'accent-2': '#333333',    // subtle borders
        'accent-orange': '#ff6b35', // burnt orange (secondary when green is loud)
        success: '#00ff9f',
        warn: '#ff6b35',
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