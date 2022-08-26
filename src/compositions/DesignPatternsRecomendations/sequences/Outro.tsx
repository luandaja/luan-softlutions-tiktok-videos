import { useEffect } from 'react';

import {
	Sequence,
	Video,
} from 'remotion';

import { CustomSequenceProps } from '@custom-types';

import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';

export const Outro: React.FC<CustomSequenceProps> = ({
	from,
	sequenceFrom = from,
	onSetSequenceDuration,
}) => {
	const videoClipTo = 568;
	useEffect(() => {
		onSetSequenceDuration?.({ durationInFrames: videoClipTo });
	}, []);
	return (
		<>
			<Sequence from={sequenceFrom} name="Outro" durationInFrames={videoClipTo}>
				<Sequence from={-from}>
					<Video src={mainVideo} />
				</Sequence>
			</Sequence>
		</>
	);
};
