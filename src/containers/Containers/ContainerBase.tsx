import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		borderBottom: '1px solid rgba(128, 128, 128, 0.15)',
	},
}));

export interface ContainerBaseProps {
	className?: string;
}

export const ContainerBase: React.FC<ContainerBaseProps> = ({
	children,
	className,
}): React.ReactElement => {
	const style = useStyles();

	return <div className={clsx(style.root, className)}>{children}</div>;
};
