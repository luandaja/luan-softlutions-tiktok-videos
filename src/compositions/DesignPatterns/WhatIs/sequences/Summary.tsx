import { AlertSequence } from '@components/sequences/AlertSequence';
import { TitleSequence } from '@components/sequences/TitleSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence } from 'remotion';
import { vidDefResumen } from '../assets/videos';

export const Summary = () => {
	const clipFrom = 1179;
	const clipDuration = 140;
	return (
		<>
			<Sequence name="Summary" from={clipFrom} durationInFrames={clipDuration}>
				<VideoSequence
					from={0}
					videoStartFrame={41}
					durationInFrames={clipDuration}
					src={vidDefResumen}
				></VideoSequence>
				<TitleSequence
					from={65}
					animated={true}
					to={95}
					animationDurationInFrames={5}
					className="self-center mx-auto"
				>
					Patrón
				</TitleSequence>
			</Sequence>
		</>
	);
};
