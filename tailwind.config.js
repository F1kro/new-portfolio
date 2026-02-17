/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				// Pastiin namanya 'josefin' biar utility 'font-josefin' bisa jalan
				'josefin': ['"Josefin Sans"', 'sans-serif'], 
				'mono': ['"JetBrains Mono"', 'monospace'],
			},
		},
	},
	plugins: [],
}