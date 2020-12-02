import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	divider: {
		height: 8,
		backgroundColor: 'rgb(245, 248, 250)',
		borderBottom: '1px solid rgb(235, 238, 240)',
	},
}));

export const ContentDivider = () => {
	const classes = useStyles();

	return <div className={classes.divider}></div>;
};
