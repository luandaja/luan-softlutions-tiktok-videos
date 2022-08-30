import {
	useEffect,
	useState,
} from 'react';

import {
	continueRender,
	delayRender,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
	Video,
} from 'remotion';

import { Title } from '@components/Title';
import { CustomSequenceProps } from '@custom-types';
import { getVideoMetadata } from '@remotion/media-utils';

import introVideo from '../assets/intro.mp4';
import { TitleSequence } from '@components/sequences/TitleSequence';

export const Intro: React.FC<CustomSequenceProps> = ({
	from,
	onSetSequenceDuration,
}) => {
	const { fps, durationInFrames } = useVideoConfig();
	const [handle] = useState(() => delayRender());
	const [duration, setDuration] = useState(1);

	const textStartFrame = 80;
	const videoDataisLoaded = duration !== 1;

	useEffect(() => {
		if (videoDataisLoaded) return;
		(async function () {
			const { durationInSeconds } = await getVideoMetadata(introVideo);
			const durationRounded = Math.round(durationInSeconds * fps);
			setDuration(durationRounded);
			onSetSequenceDuration?.({ durationInFrames: durationRounded });
			continueRender(handle);
		})();
	}, [handle]);

	return (
		<>
			{videoDataisLoaded && (
				<Sequence from={from} name="Intro" durationInFrames={duration}>
					<Sequence from={0} durationInFrames={duration}>
						<Video src={introVideo} />
					</Sequence>
					<TitleSequence from={from + textStartFrame} to={duration} animated={true} className="self-end">
						Mis sitios favoritos para aprender patrones de diseño
					</TitleSequence>
				</Sequence>
			)}
		</>
	);
};
