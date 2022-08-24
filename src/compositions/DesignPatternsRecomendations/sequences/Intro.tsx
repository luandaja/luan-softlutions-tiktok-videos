import {
	continueRender,
	delayRender,
	interpolate,
	OffthreadVideo,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import { getVideoMetadata } from '@remotion/media-utils';

import { Title } from '@components/Title';
import introVideo from '../assets/intro.mp4';
import { useEffect, useMemo, useState } from 'react';

export const Intro = () => {
	const { fps, durationInFrames } = useVideoConfig();
	const [handle] = useState(() => delayRender());
	const [duration, setDuration] = useState(durationInFrames);
	const frame = useCurrentFrame();
	const intialFrame = 80;
	useEffect(() => {
		(async function () {
			const { durationInSeconds } = await getVideoMetadata(introVideo);
			setDuration(Math.round(durationInSeconds * fps));
			continueRender(handle);
			console.log(duration);
		})();
	}, [handle]);
	const opacity = interpolate(
		frame,
		[intialFrame, intialFrame + 15, duration - 15, duration],
		[0, 1, 1, 0]
	);

	return (
		<Sequence from={0} name="intro" durationInFrames={duration}>
			<Sequence from={0} durationInFrames={duration}>
				<OffthreadVideo src={introVideo} />
			</Sequence>
			<Sequence
				from={80}
				style={{
					opacity: opacity,
				}}
				durationInFrames={duration - 80}
			>
				<Title text="Mis sitios favoritos para aprender patrones de diseño"></Title>
			</Sequence>
		</Sequence>
	);
};
