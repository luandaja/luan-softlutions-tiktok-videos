import { AlertSequence } from '@components/sequences/AlertSequence';
import { ImageSequence } from '@components/sequences/ImageSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence } from 'remotion';
import { imgDefRefactoringguru } from '../assets/images';
import { vidDefRefactoringguru } from '../assets/videos';

export const DefinitionRefactoringGuru = () => {
	const clipFrom = 494;
	const clipDuration = 314;
	return (
		<>
			<Sequence
				name="Refactoring Guru"
				from={clipFrom}
				durationInFrames={clipDuration}
			>
				<VideoSequence
					from={0}
					videoStartFrame={23}
					durationInFrames={clipDuration}
					src={vidDefRefactoringguru}
				></VideoSequence>
				<AlertSequence.Container>
					<AlertSequence.Alert
						type="info"
						customTypeName="Fuente"
						from={65}
						to={134}
						animated={true}
					>
						Refactoring Guru
					</AlertSequence.Alert>
				</AlertSequence.Container>
				<ImageSequence
					useContainer={false}
					from={130}
					name="definition refactoring guru"
					src={imgDefRefactoringguru}
					className="w-8/12 h-fit self-center mt-[100%] mx-auto mb-auto z-10 shadow-2xl"
				></ImageSequence>

				<AlertSequence.Container className="justify-start !opacity-100 flex-col-reverse">
					<AlertSequence.Alert
						type="info"
						from={151}
						animated={true}
						animationDurationInFrames={7}
					>
						Solución habituales
					</AlertSequence.Alert>
					<AlertSequence.Alert
						type="warning"
						from={210}
						animated={true}
						animationDurationInFrames={7}
					>
						Problemas frecuentes
					</AlertSequence.Alert>
				</AlertSequence.Container>
			</Sequence>
		</>
	);
};
