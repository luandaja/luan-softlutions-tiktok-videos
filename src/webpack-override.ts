import { WebpackOverrideFn } from 'remotion';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import { resolve } from 'path';
export const webpackOverride: WebpackOverrideFn = (currentConfiguration) => {
	return {
		...currentConfiguration,
		resolve: {
			...currentConfiguration.resolve,
			alias: {
				...currentConfiguration.resolve?.alias,
				'@components': resolve(process.cwd(), '/src/components/'),
				'@compositions': resolve(process.cwd(), '/src/compositions/'),
				'@custom-types': resolve(process.cwd(), '/src/types/'),
				'@services': resolve(process.cwd(), '/src/services'),
			},
			plugins: [
				...(currentConfiguration.resolve?.plugins ?? []),
				// new TsconfigPathsPlugin({
				// 	baseUrl: '.',
				// 	configFile: './tsconfig.json',
				// }),
			],
		},
		module: {
			...currentConfiguration.module,
			rules: [
				...(currentConfiguration.module?.rules
					? currentConfiguration.module.rules
					: []
				).filter((rule) => {
					if (rule === '...') {
						return false;
					}
					if (rule.test?.toString().includes('.css')) {
						return false;
					}
					return true;
				}),
				{
					test: /\.css$/i,
					use: [
						'style-loader',
						'css-loader',
						{
							loader: 'postcss-loader',
							options: {
								postcssOptions: {
									plugins: [
										'postcss-preset-env',
										'tailwindcss',
										'autoprefixer',
									],
								},
							},
						},
					],
				},
			],
		},
	};
};
