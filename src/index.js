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

import Nav from './app/Nav';
import ChartsContainer from './containers/ChartsContainer';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

let title = "Bright Plan LLC";

// store
const logger = createLogger();
const store = createStore(
  chartsReducer,
  applyMiddleware(thunk, promise, logger)
);

const App = () => (
  <div id="wrapper">
    <Nav title={title}/>
    <div id="page-wrapper">
      <div className="row">
          <div className="col-lg-12">
              <h1 className="page-header">Portfolio Charts</h1>
          </div>
      </div>
      <ChartsContainer />
    </div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
