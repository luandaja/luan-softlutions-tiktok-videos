import './style.css';

import React from 'react';

import { Composition } from 'remotion';

import { DesignPatternsRecomendations } from './compositions';
import { tiktokRemotionVideo } from './constants/video-config';

export const RemotionVideo: React.FC = () => {
	function getRemotionComponentDefinition(component: React.FC) {
		return {
			id: component.name,
			component: component,
		};
	}
	return (
		<>
			<Composition
				durationInFrames={2762}
				{...getRemotionComponentDefinition(DesignPatternsRecomendations)}
				{...tiktokRemotionVideo}
			/>
		</>
	);
};
