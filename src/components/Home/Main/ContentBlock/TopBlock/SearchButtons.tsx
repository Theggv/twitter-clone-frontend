import { Button, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
}));

export const SearchButtons: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Button color='primary'>Популярное</Button>
			<Button color='primary'>Последнее</Button>
			<Button color='primary'>Люди</Button>
			<Button color='primary'>Фотографии</Button>
			<Button color='primary'>Видео</Button>
		</div>
	);
};
