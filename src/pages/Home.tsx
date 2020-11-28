import { makeStyles } from '@material-ui/core';
import React from 'react';
import Main from '../components/Home/Main';
import Header from '../components/Home/Header';
import { useDispatch } from 'react-redux';
import {
	LoadingState,
	setHeaderLoadingState,
	setMainLoadingState,
} from '../store/ducks/loading';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
}));

const Home: React.FC = (): React.ReactElement => {
	const classes = useStyles();

	const dispatch = useDispatch();
	dispatch(setHeaderLoadingState(LoadingState.LOADING));
	dispatch(setMainLoadingState(LoadingState.LOADING));

	return (
		<section className={classes.root}>
			<Header></Header>
			<Main></Main>
		</section>
	);
};

export default Home;
