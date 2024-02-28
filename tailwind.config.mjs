/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundColor: {
				"cGray": "#2e2e2e"
			},
			borderColor: {
				"cGray": "#4e4e4e"
			}
		},
	},
	plugins: [
		require('tailwindcss-animated')
	],
}
