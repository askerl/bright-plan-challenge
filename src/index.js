import React from 'react';
import ReactDOM from 'react-dom';

// store
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import chartsReducer from './reducers/reducer.js';

// bootstrap stylesheets
// import './vendor/bootstrap/css/bootstrap.min.css';
// import './vendor/metisMenu/metisMenu.min.css';
// import './vendor/bootstrap/css/sb-admin-2.min.css';
// import './vendor/font-awesome/css/font-awesome.min.css';

// main stylesheets
import './index.css';

// load bootsrap js
// global.jQuery = require('jquery');
// require('bootstrap')

import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

// Router
import { Router, Route, Redirect, browserHistory } from 'react-router';

// Components
import Layout from './app/Layout';
import ChartsContainer from './containers/ChartsContainer';
import Dashboard from './app/Dashboard';

// store
const logger = createLogger();
const store = createStore(
  chartsReducer,
  applyMiddleware(thunk, promise, logger)
);

const App = () => (
  <Router history={browserHistory}>
    <Redirect from="/" to="/charts" />
    <Route path="/" component={Layout}>
      <Route path="/dashboard" component={Dashboard}/>
      <Route path="/charts" component={ChartsContainer}/>
    </Route>
  </Router>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
  function() {
    console.timeEnd('react-app')
  }
);
