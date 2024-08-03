/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			addUtilities({
				'.scrollbar-hide::-webkit-scrollbar': {
					display: 'none',
				},

				/* For IE, Edge and Firefox */
				'.scrollbar-hide': {
					'-ms-overflow-style': 'none' /* IE and Edge */,
					'scrollbar-width': 'none' /* Firefox */,
				},
				'.sticky::-webkit-sticky': {
					position: '-webkit-sticky',
				},
				'.sticky': {
					position: 'sticky',
				},
			});
		}),
	],
};
