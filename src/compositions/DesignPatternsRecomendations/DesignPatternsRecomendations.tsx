import { useState } from 'react';
import { AbsoluteFill } from 'remotion';

import { Intro } from './sequences/Intro';
import { RecomendationPatternsDev } from './sequences/RecomendationPatternsDev';

export const DesignPatternsRecomendations = () => {
	const [patternsDevRecomendationFrom, setPatternsDevRecomendationFrom] =
		useState(0);
	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Intro
				from={0}
				onSetSequenceDuration={({ durationInFrames }) => {
					setPatternsDevRecomendationFrom(durationInFrames);
				}}
			></Intro>
			<RecomendationPatternsDev
				from={patternsDevRecomendationFrom}
			></RecomendationPatternsDev>
		</AbsoluteFill>
	);
};
