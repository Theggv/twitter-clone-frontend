import { makeStyles, useMediaQuery, useTheme } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderCircular } from '../../../containers/Loaders';
import {
	LoadingState,
	selectHeaderLoaded,
	selectMainLoading,
	setMainLoadingState,
	setSidebarLoadingState,
} from '../../../store/ducks/loading';
import ContentBlock from './ContentBlock';
import SideBar from './Sidebar';

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

const Main: React.FC = () => {
	const theme = useTheme();
	const classes = useStyles();
	const matches = useMediaQuery(theme.breakpoints.up(1005));

	const dispatch = useDispatch();
	const isHeaderLoaded = useSelector(selectHeaderLoaded);
	const isLoading = useSelector(selectMainLoading);

	dispatch(setSidebarLoadingState(LoadingState.LOADING));

	React.useEffect(() => {
		dispatch(setMainLoadingState(LoadingState.LOADED));
	}, [dispatch]);

	return (
		<main className={classes.root}>
			{isHeaderLoaded && !isLoading ? (
				<React.Fragment>
					<ContentBlock></ContentBlock>
					{matches ? <SideBar></SideBar> : null}
				</React.Fragment>
			) : (
				<LoaderCircular />
			)}
		</main>
	);
};

export default Main;
