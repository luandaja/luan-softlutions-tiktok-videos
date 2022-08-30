import './style.css';

import React from 'react';

import { DesignPatternsComposition } from '@compositions/DesignPatterns/DesignPatternsComposition';
import { TiktokTestComposition } from '@compositions/TiktokTest/TiktokTestComposition';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


export const RemotionVideo: React.FC = () => {
	const theme = createTheme({
		breakpoints: {
			values: {
				xs: 1080,
				sm: 600,
				md: 900,
				lg: 1200,
				xl: 1536,
			},
		},
	});
	return (
		<>
			<ThemeProvider theme={theme}>

				<DesignPatternsComposition></DesignPatternsComposition>
				<TiktokTestComposition></TiktokTestComposition>
			</ThemeProvider>
		</>
	);
};
