import { makeStyles } from '@material-ui/core';
import React from 'react';
import { ContainerBase } from '../../../../containers/Containers';

import StickyBox from 'react-sticky-box';

const useStyles = makeStyles((theme) => ({
	sidebarRoot: {
		[theme.breakpoints.up(1095)]: {
			flex: '0 0 360px',
			padding: '0 0 0 20px',
		},
		padding: '0 0 0 10px',
		flex: '0 0 300px',
		textAlign: 'center',
	},
	sidebarContainer: {
		paddingLeft: 10,
	},
}));

export const SideBar: React.FC = ({ children }): React.ReactElement | null => {
	const classes = useStyles();

	return (
		<ContainerBase className={classes.sidebarRoot}>
			<StickyBox className={classes.sidebarContainer}>
				{children}
			</StickyBox>
		</ContainerBase>
	);
};
