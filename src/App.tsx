import React from 'react';
import { makeStyles } from '@material-ui/core';
import { Route, Switch } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Home } from './pages/Home';

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
				<Route path='/auth' component={Auth}></Route>
				<Route path='/' component={Home}></Route>
			</Switch>
		</div>
	);
};

export default App;
