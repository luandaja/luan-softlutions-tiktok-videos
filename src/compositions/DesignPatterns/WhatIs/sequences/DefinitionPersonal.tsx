import { AlertSequence } from '@components/sequences/AlertSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence } from 'remotion';
import { vidDefMisPalabras } from '../assets/videos';

export const DefinitionPersonal = () => {
	const clipFrom = 808;
	const clipDuration = 371;
	return (
		<>
			<Sequence
				name="Mi definición"
				from={clipFrom}
				durationInFrames={clipDuration}
			>
				<VideoSequence
					from={0}
					videoStartFrame={41}
					durationInFrames={clipDuration}
					src={vidDefMisPalabras}
				></VideoSequence>
				<AlertSequence.Container>
					<AlertSequence.Alert
						type="info"
						customTypeName="Fuente"
						from={30}
						to={115}
						animated={true}
					>
						Luan Softlutions
					</AlertSequence.Alert>
				</AlertSequence.Container>

				<AlertSequence.Container className="justify-start !opacity-100 flex-col-reverse">
					<AlertSequence.Alert
						type="info"
						from={120}
						animated={true}
						animationDurationInFrames={7}
					>
						Solución madura
					</AlertSequence.Alert>
					<AlertSequence.Alert
						type="info"
						from={171}
						animated={true}
						animationDurationInFrames={7}
					>
						Solución probada
					</AlertSequence.Alert>
					<AlertSequence.Alert
						type="warning"
						from={268}
						animated={true}
						animationDurationInFrames={7}
					>
						Problemas que ya agobió a otros
					</AlertSequence.Alert>
				</AlertSequence.Container>
			</Sequence>
		</>
	);
};
