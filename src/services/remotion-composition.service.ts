import React from 'react';
import { tiktokRemotionVideo } from '../constants/video-config';

export function getRemotionCompositionDefinitionFromComponent(
	entryComponent: React.FC
): { id: string; component: React.FC } {
	return {
		id: entryComponent.name,
		component: entryComponent,
	};
}

export function getRemotionCompositionTiktokSettings(): {
	fps: number;
	width: number;
	height: number;
} {
	return tiktokRemotionVideo;
}
