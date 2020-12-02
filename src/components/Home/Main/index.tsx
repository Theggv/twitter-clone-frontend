import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
	root: {
		[theme.breakpoints.down(1095)]: {
			flex: '1 0 920px',
			maxWidth: 920,
		},
		[theme.breakpoints.down(1005)]: {
			flex: '1 1 600px',
			maxWidth: 600,
		},
		[theme.breakpoints.down(750)]: {
			flex: '1 1 600px',
		},
		display: 'flex',
		flexDirection: 'row',

		flex: '1 0 990px',
		maxWidth: 990,
	},
}));

const Main: React.FC = ({ children }) => {
	const classes = useStyles();

	return <main className={classes.root}>{children}</main>;
};

export default Main;
