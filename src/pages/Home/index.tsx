import { makeStyles } from '@material-ui/core';
import React from 'react';
import Main from '../../components/Home/Main';
import Header from '../../components/Home/Header';
import { DefaultPage } from './DefaultPage';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { NotFoundPage } from './NotFoundPage';
import { UserRoute } from './UserRoute';
import { ProtectedRoute } from '../../components/Route/ProtectedRoute';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
	},
}));

export const Home: React.FC = (): React.ReactElement => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Header></Header>
			<Main>
				<Switch>
					<ProtectedRoute
						exact
						path='/'
						component={() => <Redirect to='/home' />}
					/>
					<ProtectedRoute exact path='/home' component={DefaultPage} />
					<Route path='/search' component={SearchPage} />
					<Route path='/:userName' component={UserRoute} />
					<Route component={NotFoundPage}></Route>
				</Switch>
			</Main>
		</section>
	);
};
