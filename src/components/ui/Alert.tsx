import React from 'react';

const AlertBase: React.FC<{
	color: 'blue' | 'amber' | 'green' | 'red';
	icon: JSX.Element;
	type: 'info' | 'warning' | 'success' | 'danger';
	className: string; //just for tailwind classes purge
	showBorder?: boolean;
	children: React.ReactNode | string;
	style?: React.CSSProperties;
}> = ({ color = 'blue', icon, type, showBorder = false, children, style }) => {
	return (
		<div
			className={` flex-row w-full rounded-md bg-${color}-50 h-fit px-4 py-5 ${
				showBorder ? `border-l-8 border-${color}-500` : ''
			}`}
			style={style}
		>
			<div className="flex justify-between py-3">
				<div className="flex">
					<div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-16 w-16 text-${color}-500`}
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							{icon}
						</svg>
					</div>
					<div className="self-center ml-3">
						<span
							className={`text-${color}-500 font-semibold text-4xl capitalize`}
						>
							{type}
						</span>
						<div className={`text-${color}-500`}>
							<div className="mt-3 text-[2.5rem] uppercase font-semibold  ">
								{children}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Info = ({
	children,
	style,
}: {
	style: React.CSSProperties;
	children: React.ReactNode | string;
}) => (
	<AlertBase
		className="bg-blue-50 text-blue-500"
		style={style}
		color="blue"
		type="info"
		icon={
			<path
				fillRule="evenodd"
				d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
				clipRule="evenodd"
			/>
		}
	>
		{children}
	</AlertBase>
);

const Warning = ({
	children,
	style,
}: {
	style: React.CSSProperties;
	children: React.ReactNode | string;
}) => (
	<AlertBase
		className="bg-amber-50 text-amber-500"
		style={style}
		color="amber"
		type="warning"
		icon={
			<path
				fillRule="evenodd"
				d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
				clipRule="evenodd"
			/>
		}
	>
		{children}
	</AlertBase>
);

const Success = ({
	children,
	style,
}: {
	style: React.CSSProperties;
	children: React.ReactNode | string;
}) => (
	<AlertBase
		className="bg-green-50 text-green-500 border-green-500"
		style={style}
		color="green"
		type="success"
		showBorder={true}
		icon={
			<path
				fillRule="evenodd"
				d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
				clipRule="evenodd"
			/>
		}
	>
		{children}
	</AlertBase>
);

const Danger = ({
	children,
	style,
}: {
	style: React.CSSProperties;
	children: React.ReactNode | string;
}) => (
	<AlertBase
		className="bg-red-50 text-red-500 border-red-500"
		style={style}
		color="red"
		type="danger"
		showBorder={true}
		icon={
			<path
				fillRule="evenodd"
				d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
				clipRule="evenodd"
			/>
		}
	>
		{children}
	</AlertBase>
);

export const Alert = {
	Info,
	Warning,
	Success,
	Danger,
};
