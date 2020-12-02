import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
}));

export interface ButtonWithIconProps {
	children?: React.ReactNode;
	className?: string;
	size?: number;
	icon: React.ReactNode;
	onClick?: (e: any) => void;
	style?: React.CSSProperties;
}

export const ButtonWithIcon: React.FC<ButtonWithIconProps> = (props) => {
	const { children, className, size = 30, icon, onClick, style } = props;

	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)}>
			<IconButton
				style={{ width: size, height: size, ...style }}
				color='primary'
				onClick={(e) => onClick && onClick(e)}
			>
				{icon}
			</IconButton>
			{children}
		</div>
	);
};
