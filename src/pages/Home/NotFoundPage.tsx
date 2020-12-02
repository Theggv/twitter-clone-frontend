import { makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down(1005)]: {
			flex: '1 1 600px',
			maxWidth: '600px',
		},
		flex: '10 0 920px',
		maxWidth: '920px',
		textAlign: 'center',
        fontSize: 15,
        padding: '0 10px',
	},
	title: {
		fontSize: 23,
		fontWeight: 700,
		marginTop: 40,
	},
	subtitle: {
		marginTop: 40,
	},
	link: {
		color: 'rgb(27, 149, 224)',
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
}));

export const NotFoundPage: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className={classes.title}>
				К сожалению, такой страницы нет!
			</div>
			<div className={classes.subtitle}>
				Почему бы не попробовать{' '}
				<Link className={classes.link} to='/search'>
					поиск
				</Link>
				, чтобы найти что-нибудь еще?
			</div>
		</div>
	);
};
