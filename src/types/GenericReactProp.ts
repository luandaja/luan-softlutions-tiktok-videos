import { PropsWithChildren } from 'react';

export declare type GenericReactProp<T = {}> = PropsWithChildren<T> &
	React.HTMLAttributes<HTMLElement>;
