import { AlertSequence } from '@components/sequences/AlertSequence';
import { ImageSequence } from '@components/sequences/ImageSequence';
import { TitleSequence } from '@components/sequences/TitleSequence';
import { VideoSequence } from '@components/sequences/VideoSequence';
import React from 'react';
import { Sequence, Series } from 'remotion';
import {
	imgProsYContras_1,
	imgProsYContras_2,
	imgProsYContras_3,
} from '../assets/images';
import {
	vidDefResumen,
	vidDisclaimer,
	vidVentajasDesventajas,
} from '../assets/videos';

export const Disclaimer = () => {
	const clipFrom = 1319;
	const clipDuration = 630;
	const disclaimerImages = [
		imgProsYContras_1,
		imgProsYContras_2,
		imgProsYContras_3,
	];
	return (
		<>
			<Sequence
				name="Disclaimer"
				from={clipFrom}
				durationInFrames={clipDuration}
			>
				<VideoSequence
					from={0}
					videoStartFrame={31}
					durationInFrames={263}
					src={vidDisclaimer}
				></VideoSequence>

				<AlertSequence.Container>
					<AlertSequence.Alert
						type="warning"
						from={78}
						durationInFrames={263}
						animated={true}
					>
						No existen las soluciones absolutas
					</AlertSequence.Alert>

					<AlertSequence.Alert
						type="success"
						customTypeName="Tip"
						from={520}
						animated={true}
					>
						Aplicar sabiamente
					</AlertSequence.Alert>
				</AlertSequence.Container>

				<VideoSequence
					from={263}
					videoStartFrame={30}
					durationInFrames={clipDuration - 263}
					src={vidVentajasDesventajas}
				></VideoSequence>
				{disclaimerImages.map((x, i) => (
					<ImageSequence
						from={314 + i * 30}
						durationInFrames={30}
						src={x}
						useContainer={true}
						className="w-full h-fit self-center opacity-80"
					></ImageSequence>
				))}
			</Sequence>
		</>
	);
};
