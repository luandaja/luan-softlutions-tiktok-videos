import React from 'react';

export const AlertDark = () => {
	return (
		<div
			className="flex flex-row items-center p-4 text-white bg-gray-900 rounded gap-4"
			role="alert"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="w-1/12 h-1/12 text-green-500"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fillRule="evenodd"
					d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
					clipRule="evenodd"
				/>
			</svg>

			<strong className="text-sm font-normal">
				{' '}
				Post has been published!{' '}
			</strong>
		</div>
	);
};
