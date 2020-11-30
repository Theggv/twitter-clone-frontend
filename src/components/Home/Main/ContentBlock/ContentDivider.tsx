import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	divider: {
		height: 8,
		backgroundColor: 'rgb(245, 248, 250)',

		borderBottom: '1px solid rgba(128,128,128,0.15)',
	},
}));

const ContentDivider = () => {
	const classes = useStyles();

	return <div className={classes.divider}></div>;
};

export default ContentDivider;
