import { Composition, Folder } from 'remotion';
import { PageRecomendationsComposition } from './PageRecomendations/PageRecomendationsComposition';
import { WhatIsComposition } from './WhatIs/WhatIsComposition';

export const DesignPatternsComposition = () => {
	return (
		<>
			<Folder name="Design-Patterns">
				<PageRecomendationsComposition></PageRecomendationsComposition>
				<WhatIsComposition></WhatIsComposition>
			</Folder>
		</>
	);
};
