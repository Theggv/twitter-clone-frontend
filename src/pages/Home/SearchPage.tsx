import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { ContentBlock } from '../../components/Home/Main/ContentBlock';
import { TopBlock } from '../../components/TopBlock';
import { SideBar } from '../../components/Home/Main/Sidebar';

import { ButtonSettings } from '../../containers/Buttons';
import { SearchButtons } from '../../components/TopBlock/SearchButtons';

const useStyles = makeStyles((theme) => ({
	header: {
		flex: 1,
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	headerTitle: {
		marginLeft: 10,
		cursor: 'pointer',
	},
	headerButton: {
		padding: '0 8px',
	},
}));

export const SearchPage: React.FC = () => {
	const classes = useStyles();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up(1005));

	return (
		<>
			<ContentBlock>
				<TopBlock
					showBackButton
					title={
						<div className={classes.header}>
							<div className={classes.headerTitle}>Главная</div>
							<ButtonSettings />
						</div>
					}
				/>
				<SearchButtons />
			</ContentBlock>
			{matches && <SideBar></SideBar>}
		</>
	);
};
