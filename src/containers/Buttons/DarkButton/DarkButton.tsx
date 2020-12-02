import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '100%',

		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',

		color: 'white',
		backgroundColor: 'rgba(0, 0, 0, 0.77)',
		border: 'none',
		transitionDuration: '100ms',

		'&:active': {
			backgroundColor: 'rgba(51, 51, 51, 0.77)',
		},

		'&:hover': {
			backgroundColor: 'rgba(26, 26, 26, 0.77)',
		},

		'&:focus': {
			outline: 'none',
		},
	},
}));

export interface DarkButtonProps {
	className?: string;
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	size?: number;
}

export const DarkButton: React.FC<DarkButtonProps> = ({
	className,
	children,
	onClick,
	size = 30,
}): JSX.Element => {
	const classes = useStyles();

	return (
		<button
			className={clsx(classes.root, className)}
			onClick={onClick}
			style={{ width: size, height: size }}
		>
			{children}
		</button>
	);
};
