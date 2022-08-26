import { useEffect } from 'react';

import {
	Sequence,
	Video,
} from 'remotion';

import { CustomSequenceProps } from '@custom-types';

import mainVideo from '../assets/recomendaciones_patrones_diseño.mp4';

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
		</Sequence>
	);
};
