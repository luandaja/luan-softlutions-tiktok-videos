const alertSafeList = [
	// 'bg-blue-50',
	// 'text-blue-500',
	// 'bg-amber-50',
	// 'text-amber-500',
	// 'border-amber-500',
	// 'border-blue-500',
];
module.exports = {
	content: ['./src/**/*.{ts,tsx}'],
	safelist: [...alertSafeList],
	theme: {
		container: {
			center: true,
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
