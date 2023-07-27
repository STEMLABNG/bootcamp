/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'*.html',
		'./assets/js/main.js',
		'./src/**/*.{html,js}',
		'./node_modules/flowbite/**/*.js',
		'./node_modules/tw-elements/dist/js/**/*.js',
		'./**/*.{html,js}',
		'./input/**/*.{html,js}',
	],
	container: {
		center: true,
	},

	media: false, // or 'media' or 'class
	theme: {
		screens: {
			sm: '420px',
			// => @media (min-width: 320px) { ... }

			md: '768px',
			// => @media (min-width: 768px) { ... }

			lg: '1024px',
			// => @media (min-width: 1024px) { ... }

			xl: '1280px',
			// => @media (min-width: 1280px) { ... }

			'2xl': '1536px',
			// => @media (min-width: 1536px) { ... }
		},
		spacing: {
			0: '0px',
			1: '4px',
			2: '8px',
			3: '12px',
			4: '16px',
			5: '20px',
			6: '24px',
			7: '28px',
			8: '32px',
			9: '36px',
			10: '40px',
			11: '44px',
			12: '48px',
			13: '52px',
			14: '56px',
			15: '60px',
			16: '64px',
			17: '68px',
			18: '72px',
			19: '76px',
			20: '80px',
			21: '84px',
			22: '88px',
			23: '92px',
			24: '96px',
			25: '100px',
			110: '110px',
			120: '120px',
			130: '130px',
			140: '140px',
			150: '150px',
			160: '160px',
			170: '170px',
			180: '180px',
			190: '190px',
			200: '200px',
			260: '260px',
		},
		extend: {
			animation: {
				'pulse-slow': 'pulse 5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
			},
			fontFamily: {
				josefin: ['Josefin Sans', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				roboto: ['Roboto', 'Poppins', 'Fira Sans', 'sans-serif'],
			},
			colors: {
				primary: '#127cf3',
				white: '#ffffff',
				black: '#38424D',
				gray: '#FBFBFF',
				yellow: '#FDD446',
				'theme-color': '#3B82F6',
				'border-color': '#E8E8E8',
				'body-color': '#747E88',
				'heading-color': '#162447',
				shadow: '#9D6A6A',
			},

			zIndex: {
				'-10': '-10',
				'-20': '-20',
				'-30': '-30',
				'-40': '-40',
			},

			transitionDelay: {
				400: '400ms',
				600: '600ms',
			},
		},
	},
	plugins: [
		require('@tailwindcss/forms'),
		require('flowbite/plugin'),
		require('tw-elements/dist/plugin.cjs'),
	],
};
// npx tailwindcss -i ./input.css -o ./assets/css/tailwindcss.css --watch
