import { makeStyles } from '@material-ui/core';
import React from 'react';
import Main from '../../components/Home/Main';
import Header from '../../components/Home/Header';
import { DefaultPage } from './DefaultPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { FullTweetPage } from './FullTweetPage';
import { SearchPage } from './SearchPage';
import { NotFoundPage } from './NotFoundPage';

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
			<Main>
				<Switch>
					<Route exact path='/'>
						<Redirect to='/home' />
					</Route>
					<Route exact path='/home'>
						<DefaultPage />
					</Route>
					<Route path='/:userName/status/:tweetId'>
						<FullTweetPage />
					</Route>
					<Route path='/search'>
						<SearchPage />
					</Route>
					<Route>
						<NotFoundPage />
					</Route>
				</Switch>
			</Main>
		</section>
	);
};

export default Home;
