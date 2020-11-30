import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { ButtonWithIcon } from '../../../../../containers/Buttons';
import theme from '../../../../../theme';

const useStyles = makeStyles((theme) => ({
	root: {
		fontSize: 15,
		color: 'rgb(91, 112, 131)',

		'& .MuiIconButton-colorPrimary': {
			color: 'var(--color)',
		},

		'& svg': {
			color: 'rgb(91, 112, 131)',
		},

		'&:hover': {
			'& svg': {
				color: 'var(--color)',
			},
			'& #text': {
				color: 'var(--color)',
			},
			'& .MuiIconButton-colorPrimary': {
				backgroundColor: 'var(--background-color)',
			},
		},
	},
	default: {
		'& svg': {
			fontSize: 20,
		},
	},
	big: {
		'& svg': {
			fontSize: 25,
		},
	},
	text: {
		padding: '0 4px',
		fontSize: 13,
	},
}));

interface ButtonCounterProps {
	icon: React.ReactNode;
	text?: string | number;
	className?: string;
	onClick?: () => void;
	hoverProps?: {
		color: string;
		backgroundColor?: string;
	};
	type?: 'default' | 'big';
}

export const ButtonCounter: React.FC<ButtonCounterProps> = ({
	icon,
	text,
	className,
	onClick,
	hoverProps = {
		color: theme.palette.primary.main,
		backgroundColor: 'rgba(29, 161, 242, 0.1)',
	},
	type = 'default',
}) => {
	const classes = useStyles();

	const color = {
		'--color': hoverProps.color,
		'--background-color': hoverProps.backgroundColor,
	} as React.CSSProperties;

	return (
		<ButtonWithIcon
			icon={icon}
			className={clsx(
				classes.root,
				type === 'default' && classes.default,
				type === 'big' && classes.big,
				className
			)}
			onClick={onClick}
			style={color}
			size={type === 'default' ? 30 : 40}
		>
			{text ? (
				<div id='text' className={clsx(classes.text)} style={color}>
					{text}
				</div>
			) : null}
		</ButtonWithIcon>
	);
};
