import { useEffect } from 'react';

import {
	Sequence,
	Video,
} from 'remotion';

import { Alert } from '@components/Alert';
import { FadeImg } from '@components/FadeImg';
import { NotificationPop } from '@components/NotificationPop';
import { CustomSequenceProps } from '@custom-types';

import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';
import {
	imgEnespanOl,
	imgIntro,
	imgLibro,
	imgList,
	imgProblem,
} from '../assets/refactoringguru';

export const RecomendationRefactoringGuru: React.FC<CustomSequenceProps> = ({
	from,
	onSetSequenceDuration,
}) => {
	const videoClipTo = 2041;
	useEffect(() => {
		onSetSequenceDuration?.({ durationInFrames: videoClipTo });
	}, []);
	return (
		<Sequence
			from={from}
			name="[recommendation] RefactoringGuru"
			durationInFrames={videoClipTo - from}
		>
			<Sequence from={0}>
				<Sequence from={-from} durationInFrames={videoClipTo}>
					<Video src={mainVideo} />
				</Sequence>
			</Sequence>

			<Sequence from={127}>
				<NotificationPop
					imgUrl="https://refactoring.guru/images/content-public/logos/logo-military-2x.png?id=5af1a599d8a4170c9a42e6fa18148b98"
					durationInFrames={1046 - 127 + 30}
					finalPosition="top"
				>
					https://<b>refactoring.guru</b>/es
				</NotificationPop>
			</Sequence>
			<div className="flex w-full flex-col">
				<Sequence from={433} layout="none" durationInFrames={548 - 433 + 30}>
					<Alert
						durationInFrames={548 - 433}
						text="Buenas explicaciones"
						alertCountIndex={1}
					></Alert>
				</Sequence>
				<Sequence from={436} layout="none" durationInFrames={548 - 436 + 30}>
					<Alert
						durationInFrames={548 - 436}
						text="De forma fuida"
						alertCountIndex={2}
					></Alert>
				</Sequence>
				<Sequence from={496} layout="none" durationInFrames={548 - 496 + 30}>
					<Alert
						durationInFrames={548 - 496}
						text="Más dinámico"
						alertCountIndex={3}
					></Alert>
				</Sequence>

				<Sequence from={668} durationInFrames={730 - 668 + 15}>
					<FadeImg
						durationInFrames={730 - 668}
						src={imgIntro}
						className=" self-end w-7/12 h-fit mx-auto mb-40 rounded-3xl drop-shadow-2xl"
					></FadeImg>
				</Sequence>

				<Sequence from={730} durationInFrames={780 - 730 + 15}>
					<FadeImg
						durationInFrames={780 - 730}
						src={imgList}
						className=" self-end w-7/12 h-fit mx-auto -mb-56 rounded-3xl drop-shadow-2xl"
					></FadeImg>
				</Sequence>

				<Sequence from={780} durationInFrames={822 - 780 + 15}>
					<FadeImg
						durationInFrames={822 - 780}
						src={imgProblem}
						className=" self-end w-7/12 h-fit mx-auto mb-20 rounded-3xl drop-shadow-2xl"
					></FadeImg>
				</Sequence>

				<Sequence from={830} durationInFrames={900 - 830 + 30}>
					<FadeImg
						durationInFrames={900 - 830}
						src={imgLibro}
						className=" self-end w-7/12 h-fit mx-auto mb-20 rounded-3xl drop-shadow-2xl"
					></FadeImg>
				</Sequence>

				<Sequence from={997} durationInFrames={1130 - 997 + 30}>
					<FadeImg
						durationInFrames={1130 - 997}
						src={imgEnespanOl}
						className=" self-end w-9/12 h-fit mx-auto mb-20 rounded-3xl drop-shadow-2xl"
					></FadeImg>
				</Sequence>
			</div>
		</Sequence>
	);
};
