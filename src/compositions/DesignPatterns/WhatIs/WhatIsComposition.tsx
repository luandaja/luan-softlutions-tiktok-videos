import { TiktokComposition } from '@components/compositions/TiktokComposition';
import { getRemotionCompositionDefinitionFromComponent } from '@services/remotion-composition.service';
import { WhatIsMain } from './components/WhatIsMain';

const Entry: React.FC = () => <></>;

export const WhatIsComposition = () => {
	return (
		<>
			<TiktokComposition
				durationInFrames={2524}
				{...getRemotionCompositionDefinitionFromComponent(WhatIsMain)}
			></TiktokComposition>
		</>
	);
};
