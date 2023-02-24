import React, { Component } from 'react';
import { Provider } from "react-redux";
import store from './redux/store'
import SnackbarProvider from 'react-simple-snackbar'

import MainApp from './MainApp'
import { Router } from 'react-router-dom';
import history from './history';

class App extends Component {
	render() {
		return (
			<SnackbarProvider>
				<Router history={history} basePath={window.location.pathname}>
					<Provider store={store}>
						<MainApp />
					</Provider>
				</Router>
			</SnackbarProvider>
		);
	}
}

export default App;
