/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		fontFamily: {
			'display': ['Bricolage Grotesque', 'system-ui', 'sans-serif'],
			'body': ['"Open Sans"', 'system-ui', 'sans-serif'],
		},
	},
	plugins: [],
}
