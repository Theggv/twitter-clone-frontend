import { makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

import { ContainerBase, ContainerBaseProps } from './ContainerBase';

const useStyles = makeStyles((theme) => ({
	root: {
		padding: '10px 15px',
		transitionDuration: '0.2s',
	},
	hoverDefault: {
		'&:hover': {
			backgroundColor: 'rgba(0, 0, 0, 0.03)',
		},
	},
	hoverTop: {
		'&:hover': {
			borderRadius: '15px 15px 0 0',
		},
	},
	hoverBottom: {
		borderBottom: 'none',

		'&:hover': {
			borderRadius: '0 0 15px 15px',
		},
	},
}));

export interface ContainerItemProps extends ContainerBaseProps {
	hoverType?: 'default' | 'top' | 'bottom' | 'disabled';
}

export const ContainerItem: React.FC<ContainerItemProps> = ({
	children,
	hoverType = 'default',
	className,
	noBorder = false,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerBase
			className={clsx(
				classes.root,
				className,
				hoverType === 'default' && classes.hoverDefault,
				hoverType === 'bottom' && classes.hoverBottom,
				hoverType === 'top' && classes.hoverTop
			)}
			noBorder={noBorder}
		>
			{children}
		</ContainerBase>
	);
};
