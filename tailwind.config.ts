import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans],
        arabic: ['Cairo', 'sans-serif'],
      },
      colors: {
        'luxury': {
          50: '#faf9f7',
          100: '#f5f3ef',
          200: '#ebe6df',
          300: '#ddd5cc',
          400: '#c4b5a0',
          500: '#ab9584',
          600: '#8b7355',
          700: '#6d5a47',
          800: '#5a483c',
          900: '#3d2f23',
        },
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
