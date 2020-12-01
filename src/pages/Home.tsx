import { makeStyles } from '@material-ui/core';
import React from 'react';
import Main from '../components/Home/Main';
import Header from '../components/Home/Header';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
}));

const Home: React.FC = (): React.ReactElement => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Header></Header>
			<Main></Main>
		</section>
	);
};

export default Home;
