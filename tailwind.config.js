const alertSafeList = [
	// 'bg-blue-50',
	// 'text-blue-500',
	// 'bg-amber-50',
	// 'text-amber-500',
	// 'border-amber-500',
	// 'border-blue-500',
];
// const fontScaleFactor = 2.5;
const fontScaleFactor = 1;
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	safelist: [...alertSafeList],
	theme: {
		container: {
			center: true,
		},
		fontSize: {
			xs: `${0.75 * fontScaleFactor}rem`,
			sm: `${0.875 * fontScaleFactor}rem`,
			tiny: `${0.875 * fontScaleFactor}rem`,
			base: `${1 * fontScaleFactor}rem`,
			lg: `${1.125 * fontScaleFactor}rem`,
			xl: `${1.25 * fontScaleFactor}rem`,
			'2xl': `${1.5 * fontScaleFactor}rem`,
			'3xl': `${1.875 * fontScaleFactor}rem`,
			'4xl': `${2.25 * fontScaleFactor}rem`,
			'5xl': `${3 * fontScaleFactor}rem`,
			'6xl': `${4 * fontScaleFactor}rem`,
			'7xl': `${5 * fontScaleFactor}rem`,
		},
		extend: {
			spacing: {
				144: '36rem',
			},
			fontSize: {
				width: '7.5vw',
			},
		},
	},
	plugins: [],
};
