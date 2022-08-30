import { GenericReactProp } from "@custom-types/GenericReactProp"


export const Container = ({ children, className = '' }: GenericReactProp) => {
  const validContainerClassesRegex = /(justify\S+)|(z-\d+)/gmi
  const containerClasses = className?.match(validContainerClassesRegex)?.join(" ");
  return <>
    <div className={`${containerClasses ?? ''} absolute pl-24 pr-40 pt-56 pb-144 opacity-90 w-full h-full flex`}>
      {children}
    </div>
  </>
}
