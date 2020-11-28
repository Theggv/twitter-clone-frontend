import { makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';
import { ContainerBaseProps } from './ContainerBase';

const useStyles = makeStyles((theme) => ({
	title: {
		margin: '0',
		textAlign: 'left',

		display: 'flex',
		justifyContent: 'space-between',
	},
	titleText: {
		fontSize: 19,
		fontWeight: 800,
	},
	titleButton: {},
}));

export interface ContainerItemTitleProps extends ContainerBaseProps {
	titleButton?: React.FC;
}

export const ContainerItemTitle: React.FC<ContainerItemTitleProps> = ({
	children,
	titleButton,
	className,
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<div className={classes.title}>
			<div className={clsx(classes.titleText, className)}>{children}</div>
			{titleButton && (
				<div className={classes.titleButton}>{titleButton({})}</div>
			)}
		</div>
	);
};
