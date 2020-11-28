import { makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

import { ContainerItem, ContainerItemProps } from './ContainerItem';
import { Avatar, AvatarProps } from '../Elements/Avatar';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	left: {
		marginRight: 10,
	},
	right: {
		textAlign: 'left',
	},
}));

export interface ContainerAvatarProps extends ContainerItemProps, AvatarProps {}

export const ContainerAvatar: React.FC<ContainerAvatarProps> = ({
	source,
	children,
	className,
	hoverType = 'default',
	size = 'default',
}): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerItem hoverType={hoverType} className={classes.root}>
			<div className={classes.left}>
				<Avatar size={size} source={source} />
			</div>
			<div className={clsx(classes.right, className)}>{children}</div>
		</ContainerItem>
	);
};
