import { Composition, Folder } from "remotion"
import { PageRecomendationsComposition } from "./PageRecomendations/PageRecomendationsComposition"

export const DesignPatternsComposition = () => {
  return <>
    <Folder name="Design-Patterns">
      <PageRecomendationsComposition></PageRecomendationsComposition>
    </Folder>
  </>
}