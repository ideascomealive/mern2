import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AddToy from './components/AddToy';
import IndexToy from './components/IndexToy';
import EditToy from './components/EditToy';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router>
		<div>
			<Route path='/add-toy' component={AddToy} />
			<Route path='/index' component={IndexToy} />
			<Route exact path='/' component={App} />
			<Route path='/edit/:id' component={EditToy} />
		</div>
	</Router>, document.getElementById('root'));
registerServiceWorker();
