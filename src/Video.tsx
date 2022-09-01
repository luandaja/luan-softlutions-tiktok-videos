import { DesignPatternsComposition } from '@compositions/DesignPatterns/DesignPatternsComposition';
import { NasaApodComposition } from '@compositions/NasaApod/NasaApodComposition';
import { TiktokTestComposition } from '@compositions/TiktokTest/TiktokTestComposition';
import React from 'react';
import './style.css';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<DesignPatternsComposition></DesignPatternsComposition>
			<TiktokTestComposition></TiktokTestComposition>
			<NasaApodComposition></NasaApodComposition>
		</>
	);
};
