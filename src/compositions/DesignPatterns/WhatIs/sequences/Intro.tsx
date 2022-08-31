import { TitleSequence } from '@components/sequences/TitleSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { vidIntro } from '../assets/videos';

export const Intro = () => {
	const clipDuration = 222;
	return (
		<>
			<VideoSequence
				name="Intro"
				from={0}
				videoStartFrame={44}
				durationInFrames={clipDuration}
				src={vidIntro}
			></VideoSequence>
			<TitleSequence from={107} to={176} animated={true}>
				¿Qué es un patron de diseño?
			</TitleSequence>
		</>
	);
};
