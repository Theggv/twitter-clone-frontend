import { makeStyles } from '@material-ui/core';
import React from 'react';

import { ContainerBase } from '../../../../containers/Containers';

const useStyles = makeStyles((theme) => ({
	contentBlockRoot: {
		[theme.breakpoints.down(750)]: {
			flex: '1 1 600px',
		},
		flex: '10 0 600px',
		maxWidth: '600px',
		textAlign: 'center',

		borderRight: '1px solid rgb(235, 238, 240)',
	},
}));

export const ContentBlock: React.FC = ({ children }): React.ReactElement => {
	const classes = useStyles();

	return (
		<ContainerBase className={classes.contentBlockRoot}>
			{children}
		</ContainerBase>
	);
};
