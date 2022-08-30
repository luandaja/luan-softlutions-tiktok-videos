import { CompProps } from 'remotion';

export declare type CustomCompositionProps<T> = {
	durationInFrames: number;
	id: string;
	defaultProps?: T;
} & CompProps<T>;
