import { GenericReactProp } from '@custom-types/GenericReactProp';

export const WithContainer = ({
	children,
	className = '',
	disableContainer = false,
}: GenericReactProp & { disableContainer?: boolean }) => {
	// const validContainerClassesRegex = /(justify\S+)|(z-\d+)/gim;
	// const containerClasses = className
	// 	?.match(validContainerClassesRegex)
	// 	?.join(' ');
	return (
		<>
			{disableContainer ? (
				<> {children}</>
			) : (
				<div
					className={`${className} absolute pl-24 pr-40 pt-56 pb-144 w-full h-full flex gap-4 flex-wrap`}
				>
					{children}
				</div>
			)}
		</>
	);
};
