import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	divider: {
		borderBottom: '8px solid rgb(245, 248, 250)',
	},
}));

const ContentDivider = () => {
	const classes = useStyles();

	return <div className={classes.divider}></div>;
};

export default ContentDivider;
