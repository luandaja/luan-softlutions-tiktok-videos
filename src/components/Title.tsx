import React from 'react';

export const Title: React.FC<{ text: string }> = ({ text }) => {
	return (
		<section className="grid items-center">
			<h1 className="mt-96 mr-44 text-right font-mono text-7xl font-bold capitalize text-white decoration-slate-100 drop-shadow-2xl">
				{text}
			</h1>
		</section>
	);
};
