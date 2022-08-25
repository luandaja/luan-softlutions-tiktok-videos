import './style.css';
import { Composition } from 'remotion';
import { DesignPatternsRecomendations } from './compositions';
import { tiktokRemotionVideo } from './constants/video-config';
import React from 'react';

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
				durationInFrames={600}
				{...getRemotionComponentDefinition(DesignPatternsRecomendations)}
				{...tiktokRemotionVideo}
			/>
		</>
	);
};
