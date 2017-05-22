import 'src/styles/app.less';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Our application routes
import Main from 'containers/Main';
import Home from 'containers/Home';
import Admin from 'containers/Admin';
import Things from 'containers/Things';

const routes = {
	path: '/',
	component: Main,
	indexRoute: { component: Home },
	childRoutes: [
		{ path: 'admin', component: Admin },
		{ path: 'admin/things', component: Things }
	]
};

const Handler = (
	<Router
		history={browserHistory}
		routes={routes}
	/>
);

ReactDOM.render(Handler, document.getElementById('bombcombos'));
