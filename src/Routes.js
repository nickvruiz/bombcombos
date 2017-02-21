import 'src/styles/app.less';
import 'babel-polyfill';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';

// Our Application routes
import Main from 'containers/Main';

const routes = {
	path: '/',
	component: Main,
	indexRoute: { component: Main }
};

const Handler = <Router history={browserHistory} routes={routes} />;
ReactDOM.render(Handler, document.getElementById('bombcombos'));
