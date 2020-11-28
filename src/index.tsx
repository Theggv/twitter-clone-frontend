import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';
import theme from './theme';

import './index.css';

import App from './App';
import { store } from './store/store';

ReactDOM.render(
	<ThemeProvider theme={theme}>
		<React.StrictMode>
			<BrowserRouter>
				<Provider store={store}>
					<App />
				</Provider>
			</BrowserRouter>
		</React.StrictMode>
	</ThemeProvider>,
	document.getElementById('root')
);
