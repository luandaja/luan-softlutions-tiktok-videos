import { useState } from 'react';

import {
	AbsoluteFill,
	Sequence,
} from 'remotion';

import {
	Intro,
	Outro,
	RecomendationDoFactory,
	RecomendationPatternsDev,
	RecomendationRefactoringGuru,
} from './sequences';

export const DesignPatternsRecomendations = () => {
	const [patternsDevFrom, setPatternsDevFrom] = useState(0);
	const [doFactoryFrom, setDoFactoryFrom] = useState(0);
	const [refactoringGuruFrom, setRefactoringGuruFrom] = useState(0);
	const [outroFrom, setOutroFrom] = useState(0);

	return (
		<AbsoluteFill className="bg-gray-100 items-center justify-center">
			<Intro
				from={0}
				onSetSequenceDuration={({ durationInFrames }) => {
					setPatternsDevFrom(durationInFrames);
				}}
			></Intro>
			<Sequence from={patternsDevFrom} name="Body" durationInFrames={2041}>
				<RecomendationPatternsDev
					from={0}
					onSetSequenceDuration={({ durationInFrames }) => {
						setDoFactoryFrom(durationInFrames);
					}}
				/>
				<RecomendationDoFactory
					from={doFactoryFrom}
					onSetSequenceDuration={({ durationInFrames }) => {
						setRefactoringGuruFrom(durationInFrames);
					}}
				></RecomendationDoFactory>
				<RecomendationRefactoringGuru
					from={refactoringGuruFrom}
					onSetSequenceDuration={({ durationInFrames }) => {
						setOutroFrom(durationInFrames);
					}}
				></RecomendationRefactoringGuru>
			</Sequence>

			<Outro
				sequenceFrom={patternsDevFrom + outroFrom}
				from={outroFrom}
			></Outro>
		</AbsoluteFill>
	);
};
