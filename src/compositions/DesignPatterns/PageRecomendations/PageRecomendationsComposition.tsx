import { TiktokComposition } from '@components/compositions/TiktokComposition';
import { getRemotionCompositionDefinitionFromComponent } from '@services/remotion-composition.service';
import { PageRecomendations } from './components/PageRecomendations';

export const PageRecomendationsComposition = () => {
	return (
		<>
			<TiktokComposition
				durationInFrames={2762}
				{...getRemotionCompositionDefinitionFromComponent(PageRecomendations)}
			></TiktokComposition>
		</>
	);
};
