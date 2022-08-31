import { AlertSequence } from '@components/sequences/AlertSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence } from 'remotion';
import { vidCta, vidPeeeeero } from '../assets/videos';

export const CallToAction = () => {
	const clipFrom = 1949;
	const clipDuration = 382 + 192;
	return (
		<>
			<Sequence
				name="CallToAction"
				from={clipFrom}
				durationInFrames={clipDuration}
			>
				<VideoSequence
					from={0}
					videoStartFrame={18}
					durationInFrames={382}
					src={vidPeeeeero}
				></VideoSequence>

				<AlertSequence.Container>
					<AlertSequence.Alert
						type="info"
						customTypeName="Pregunda del día"
						from={90}
						to={270}
						animated={true}
					>
						¿Vale la pena aprender patrones de diseño en una etapa temprana de
						tu formación?
					</AlertSequence.Alert>

					<AlertSequence.Alert
						type="info"
						customTypeName="😀"
						from={439}
						animated={true}
					>
						Pida con confianza casero
					</AlertSequence.Alert>
				</AlertSequence.Container>

				<VideoSequence
					from={382}
					videoStartFrame={30}
					videoEndFrame={194}
					src={vidCta}
				></VideoSequence>
			</Sequence>
		</>
	);
};
