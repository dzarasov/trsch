import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Home, ProfileInfo} from './components/layout';
import { Provider } from 'react-redux';
import store from './stores/store';
import { BrowserRouter, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Provider store={store.configureStore()}>
				<BrowserRouter>
					<div>
						<Route exact path="/" component={Home} />
						<Route exact path="/profile/:username" component={ProfileInfo} />
					</div>
				</BrowserRouter>	
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));