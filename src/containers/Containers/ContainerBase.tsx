import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		zIndex: 100,
	},
	border: {
		borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
	},
}));

export interface ContainerBaseProps {
	className?: string;
	noBorder?: boolean;
	onClick?: () => void;
}

export const ContainerBase: React.FC<ContainerBaseProps> = ({
	children,
	className,
	noBorder = false,
	onClick,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<div
			className={clsx(
				classes.root,
				!noBorder && classes.border,
				className
			)}
			onClick={onClick}
		>
			{children}
		</div>
	);
};
