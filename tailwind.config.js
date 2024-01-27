import { join } from 'path'

import { skeleton } from '@skeletonlabs/tw-plugin'

export default {
	darkMode: 'class',
	content: ['./node_modules/@skeletonlabs/skeleton/dist/index.html', './src/**/*.{html,js,svelte,ts}'],
	// content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
		  fontFamily: {
			sans: ['Roboto', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
			// mono: ['Menlo', 'Monaco', 'monospace'],
		  },
		},
	  },
	plugins: [
		skeleton({
			themes: {
				preset: [
					{
						name: 'vintage',
						enhancements: true,
					},
				],
			},
		}),
	],
};

// module.exports = {
// 	theme: {
// 	  extend: {
// 		fontFamily: {
// 		  sans: ['Nunito', 'Helvetica', 'Arial', 'sans-serif'],
// 		  serif: ['Georgia', 'serif'],
// 		  mono: ['Menlo', 'Monaco', 'monospace'],
// 		},
// 	  },
// 	},
// 	variants: {},
// 	plugins: [],
//   };