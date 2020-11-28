import { IconButton, makeStyles } from '@material-ui/core';
import React from 'react';
import clsx from 'clsx';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		alignItems: 'center',
	},
}));

interface ButtonWithIconProps {
	children?: React.ReactNode;
	className?: string;
	size?: number;
	icon: () => React.ReactElement;
	onClick?: () => void;
}

const ButtonWithIcon: React.FC<ButtonWithIconProps> = ({
	children,
	className,
	size = 30,
	icon,
	onClick,
}) => {
	const classes = useStyles();

	return (
		<div className={clsx(classes.root, className)}>
			<IconButton
				style={{ width: size, height: size }}
				color='primary'
				onClick={() => onClick && onClick()}
			>
				{icon()}
			</IconButton>
			{children}
		</div>
	);
};

export default ButtonWithIcon;
