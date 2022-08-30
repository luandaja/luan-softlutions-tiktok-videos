import './style.css';

import React from 'react';

import { DesignPatternsComposition } from '@compositions/DesignPatterns/DesignPatternsComposition';
import { TiktokTestComposition } from '@compositions/TiktokTest/TiktokTestComposition';

export const RemotionVideo: React.FC = () => {

	return (
		<>
			<DesignPatternsComposition></DesignPatternsComposition>
			<TiktokTestComposition></TiktokTestComposition>
		</>
	);
};
