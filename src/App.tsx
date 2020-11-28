import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';
import Home from './pages/Home';

const useStyles = makeStyles((theme) => ({
	app: {
		color: theme.palette.text.primary,
	},
}));

const App: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.app}>
			<Switch>
				<Route path='/login' component={SignIn}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</div>
	);
};

export default App;
