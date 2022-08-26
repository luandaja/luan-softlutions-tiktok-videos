import { useEffect } from 'react';

import {
	Sequence,
	useVideoConfig,
	Video,
} from 'remotion';

import { Alert } from '@components/Alert';
import { CustomSequenceProps } from '@custom-types';

import patternsDevVideo from '../assets/patternsdev.mp4';
import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';

export const RecomendationPatternsDev: React.FC<CustomSequenceProps> = ({
	from,
	onSetSequenceDuration,
}) => {
	const { fps, durationInFrames, height } = useVideoConfig();

	const videoClipTo = 289;
	useEffect(() => {
		onSetSequenceDuration?.({ durationInFrames: videoClipTo });
	}, []);

	const alertsStartFrame = [148, 170, 240];
	return (
		<Sequence
			from={from}
			name="[recommendation] Patterns.dev"
			durationInFrames={videoClipTo}
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
						durationInFrames={videoClipTo - fps - alertsStartFrame[0]}
					></Alert>
				</Sequence>
				<Sequence from={alertsStartFrame[1]} layout="none">
					<Alert
						alertCountIndex={2}
						text="Claro"
						durationInFrames={videoClipTo - fps - alertsStartFrame[1]}
					></Alert>
				</Sequence>
				<Sequence from={alertsStartFrame[2]} layout="none">
					<Alert
						alertCountIndex={3}
						text="Orientado a Web development"
						durationInFrames={videoClipTo - fps - alertsStartFrame[2]}
					></Alert>
				</Sequence>
			</div>
		</Sequence>
	);
};
