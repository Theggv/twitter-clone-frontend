import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		color: theme.palette.text.primary,
		cursor: 'pointer',
		display: 'inline-flex',
		textDecoration: 'none',

		'& svg': {
			fontSize: 30,
			margin: '2px 0',
			color: theme.palette.text.primary,
		},

		'&:hover': {
			'& div#button': {
				transition: 'all 150ms',
				color: theme.palette.primary.main,
				backgroundColor: 'rgba(29, 161, 242, 0.1)',
			},

			'& svg': {
				transition: 'color 150ms',
				color: theme.palette.primary.main,
			},
		},
	},
	button: {
		display: 'flex',
		alignItems: 'center',
		flex: '0 0',

		fontSize: 19,
		fontWeight: 700,
		fontFamily: theme.typography.fontFamily,

		padding: '6px',
		margin: '0 1px',

		color: 'inherit',

		borderRadius: '100px',
	},
	selected: {
		color: theme.palette.primary.main,

		'& svg': {
			color: theme.palette.primary.main,
		},
	},
	text: {
		margin: '0 20px',
		userSelect: 'none',
	},
}));

interface HeaderLinkProps {
	className?: string;
	icon: React.ReactNode;
	text?: string;
	selected?: boolean;
	showText?: boolean;
	to: string;
	onClick?: () => void;
}

export const HeaderLink: React.FC<HeaderLinkProps> = ({
	className,
	icon,
	text,
	selected = false,
	showText = true,
	to,
	onClick,
}) => {
	const classes = useStyles();

	return (
		<Link
			to={to}
			className={clsx(classes.root, className)}
			onClick={onClick}
		>
			<div
				id='button'
				className={clsx(classes.button, selected && classes.selected)}
			>
				{icon}
				{showText && text && <div className={classes.text}>{text}</div>}
			</div>
		</Link>
	);
};
