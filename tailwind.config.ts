import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        "bg-fade-in":"fade-in 2s ease-in-out forwards",
				"fade-in": "fade-in 3s ease-in-out forwards",
				"move-up": "move-up 3s ease-in-out forwards",
				"move-down": "move-down 3s ease-in-out forwards",
			},
			keyframes: {
				"fade-in": {
					"0%": {
						opacity: "0%",
					},
					"80%": {
						opacity: "0%",
					},
					"100%": {
						opacity: "100%",
					},
				},
				"move-up": {
					"0%,50%": {
						transform: "translateY(132%)",
					},
					"100%": {
            transform: "translateY(0)",

					},
				},
				"move-down": {
					"0%,50%": {
						transform: "translateY(88%)",
					},
					"100%": {
						transform: "translateX(0)",
					},
				},
				title: {
					"0%": {
						"line-height": "0%",
						"letter-spacing": "0.25em",
						opacity: "0",
					},
					"25%": {
						"line-height": "0%",
						opacity: "0%",
					},
					"80%": {
						opacity: "100%",
					},

					"100%": {
						"line-height": "100%",
						opacity: "100%",
					},
				},
			},
    },
  },
  plugins: [],
}
export default config
