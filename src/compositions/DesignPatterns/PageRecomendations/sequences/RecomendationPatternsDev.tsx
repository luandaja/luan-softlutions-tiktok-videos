import { Alert } from '@components/Alert';
import { NotificationPop } from '@components/NotificationPop';
import { VideoSequence } from '@components/sequences/VideoSequence';
import { CustomSequenceProps } from '@custom-types';
import { useEffect } from 'react';
import { Sequence, useVideoConfig } from 'remotion';
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
			<VideoSequence
				from={0}
				src={mainVideo}
				name="Video Sequence"
			></VideoSequence>
			<VideoSequence
				from={45}
				videoProps={{
					muted: true,
					className:
						'w-5/12 h-fit rounded-3xl shadow-2xl shadow-blue-400 self-center',
				}}
				durationInFrames={60}
				src={patternsDevVideo}
				videoStartFrame={9 * 30}
				name="Aux video"
				useContainer={true}
			></VideoSequence>

			<Sequence from={45}>
				<NotificationPop
					imgUrl="https://ui-avatars.com/api/?background=random&name=%22Patterns%20Dev%22"
					durationInFrames={269 - 45 - 30}
					finalPosition="top"
				>
					https://www.<b>patterns.dev</b>
				</NotificationPop>
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
