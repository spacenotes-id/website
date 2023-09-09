import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: 'class',
  content: ['./src/components/**/*.{js,ts,jsx,tsx}', './src/app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors(utils) {
        return {
          base: utils.colors.gray,
          primary: utils.colors.orange,
        }
      },
      fontFamily: {
        primary: [`var(--font-plus-jakarta-sans)`, ...fontFamily.sans],
      },
      keyframes: {
        flow: {
          to: {
            'background-position': '400% 0',
          },
        },
      },
      animation: {
        'text-flow': 'flow 8s infinite linear',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
