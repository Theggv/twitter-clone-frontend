import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'rgb(247, 249, 250)',
		borderRadius: 16,
		margin: '5px 0 15px',
	},
}));

export const ContainerRounded: React.FC = ({ children }): React.ReactElement => {
	const classes = useStyles();

	return <aside className={classes.root}>{children}</aside>;
};
