import {
	AbsoluteFill,
	continueRender,
	delayRender,
	interpolate,
	OffthreadVideo,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';
import { getVideoMetadata } from '@remotion/media-utils';

import { Title } from '@components/Title';
import patternsDevVideo from '../assets/patternsdev.mp4';
import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';
import { useEffect, useMemo, useRef, useState } from 'react';
import { CustomSequenceProps } from '@custom-types';
import { Alert } from '@components/Alert';

export const RecomendationPatternsDev: React.FC<CustomSequenceProps> = ({
	from,
	onSetSequenceDuration,
}) => {
	const { fps, durationInFrames, height } = useVideoConfig();

	const videoFragmentDurationInFrames = 291;
	onSetSequenceDuration?.({ durationInFrames: videoFragmentDurationInFrames });

	const alertsStartFrame = [148, 170, 240];
	return (
		<Sequence
			from={from - 2}
			name="Patterns.dev recomendation"
			durationInFrames={videoFragmentDurationInFrames}
		>
			<Sequence from={0}>
				<Video src={mainVideo} />
			</Sequence>
			<Sequence from={45} durationInFrames={60}>
				<Sequence from={-9 * 30}>
					<Video
						className="absolute w-1/3 rounded-3xl top-1/4 shadow-2xl left-5 shadow-blue-400"
						muted
						src={patternsDevVideo}
					/>
				</Sequence>
			</Sequence>
			<div className="flex w-full flex-col">
				<Sequence from={alertsStartFrame[0]} layout="none">
					<Alert
						alertCountIndex={1}
						text="Dinamico"
						durationInFrames={
							videoFragmentDurationInFrames - fps - alertsStartFrame[0]
						}
					></Alert>
				</Sequence>
				<Sequence from={alertsStartFrame[1]} layout="none">
					<Alert
						alertCountIndex={2}
						text="Claro"
						durationInFrames={
							videoFragmentDurationInFrames - fps - alertsStartFrame[1]
						}
					></Alert>
				</Sequence>
				<Sequence from={alertsStartFrame[2]} layout="none">
					<Alert
						alertCountIndex={3}
						text="Orientado a Web development"
						durationInFrames={
							videoFragmentDurationInFrames - fps - alertsStartFrame[2]
						}
					></Alert>
				</Sequence>
			</div>
		</Sequence>
	);
};
