import { useEffect } from 'react';

import {
	Sequence,
	useVideoConfig,
	Video,
} from 'remotion';

import { FadeImg } from '@components/FadeImg';
import { NotificationPop } from '@components/NotificationPop';
import { CustomSequenceProps } from '@custom-types';

import descriptionPatternImage from '../assets/description.png';
import examplePatternImage from '../assets/example.png';
import generalPatternImage from '../assets/general.png';
import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';
import umlPatternImage from '../assets/uml.png';

export const RecomendationDoFactory: React.FC<CustomSequenceProps> = ({
	from,
	onSetSequenceDuration,
}) => {
	const { fps, durationInFrames, height } = useVideoConfig();

	const videoClipTo = 884;
	useEffect(() => {
		onSetSequenceDuration?.({ durationInFrames: videoClipTo });
	}, []);

	return (
		<Sequence
			from={from}
			name="[recommendation] DoFactory"
			durationInFrames={videoClipTo - from}
		>
			<Sequence from={0}>
				<Sequence from={-from} durationInFrames={videoClipTo}>
					<Video src={mainVideo} />
				</Sequence>
			</Sequence>
			<Sequence from={96} layout="absolute-fill">
				<NotificationPop
					finalPosition="top"
					durationInFrames={3000}
					imgUrl="https://www.dofactory.com/img/d1.png"
				>
					<b>www.dofactory.com</b>/net/design-patterns
				</NotificationPop>
			</Sequence>

			<Sequence from={251} durationInFrames={339 - 251 + 15}>
				<FadeImg
					durationInFrames={339 - 251}
					src={examplePatternImage}
					className=" self-end w-7/12 h-fit mx-auto mb-40 rounded-3xl drop-shadow-2xl"
				></FadeImg>
			</Sequence>

			<Sequence from={375} durationInFrames={466 - 375 + 30}>
				<FadeImg
					durationInFrames={466 - 375}
					src={generalPatternImage}
					className=" self-end w-7/12 h-fit mx-auto mb-40 rounded-3xl drop-shadow-2xl"
				></FadeImg>
			</Sequence>

			<Sequence from={467} durationInFrames={521 - 467 + 30}>
				<FadeImg
					durationInFrames={521 - 467}
					src={descriptionPatternImage}
					className=" self-end w-7/12 h-fit mx-auto mb-40 rounded-3xl drop-shadow-2xl"
				></FadeImg>
			</Sequence>

			<Sequence from={547} durationInFrames={883 - 547 + 30}>
				<FadeImg
					durationInFrames={883 - 547}
					src={umlPatternImage}
					className=" self-end w-7/12 h-fit mx-auto mb-40 rounded-3xl drop-shadow-2xl"
				></FadeImg>
			</Sequence>
		</Sequence>
	);
};
