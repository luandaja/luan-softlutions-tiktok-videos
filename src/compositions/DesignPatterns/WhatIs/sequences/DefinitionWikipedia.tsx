import { AlertSequence } from '@components/sequences/AlertSequence';
import { ImageSequence } from '@components/sequences/ImageSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence } from 'remotion';
import { imgDefWikipedia } from '../assets/images';
import { vidDefWikipedia } from '../assets/videos';

export const DefinitionWikipedia = () => {
	const clipFrom = 222;
	const clipDuration = 273;
	return (
		<>
			<Sequence
				name="Wikipedia"
				from={clipFrom}
				durationInFrames={clipDuration}
			>
				<VideoSequence
					from={0}
					videoStartFrame={48}
					durationInFrames={clipDuration}
					src={vidDefWikipedia}
				></VideoSequence>
				<AlertSequence.Container>
					<AlertSequence.Alert
						type="info"
						customTypeName="Fuente"
						from={30}
						to={108}
						animated={true}
					>
						Wikipedia
					</AlertSequence.Alert>
				</AlertSequence.Container>
				<ImageSequence
					useContainer={false}
					from={90}
					name="definition wikipedia"
					src={imgDefWikipedia}
					className="w-8/12 h-fit self-center mt-[100%] mx-auto mb-auto z-10 shadow-2xl"
				></ImageSequence>

				<AlertSequence.Container className="justify-start !opacity-100 flex-col-reverse">
					<AlertSequence.Alert
						type="info"
						from={151}
						animated={true}
						animationDurationInFrames={7}
					>
						Solución común y reusable
					</AlertSequence.Alert>
					<AlertSequence.Alert
						type="warning"
						from={210}
						animated={true}
						animationDurationInFrames={7}
					>
						Problema recurrente
					</AlertSequence.Alert>
				</AlertSequence.Container>
			</Sequence>
		</>
	);
};
