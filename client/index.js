import 'react-toolbox/lib/commons.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import configureStore from './store';

const logger = createLogger();

const store = configureStore(applyMiddleware(thunk, promise, logger));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'));

if (module.hot){
  module.hot.accept('./reducers', () =>{
    const nextRootReducer = require('./reducers/index');
    const store = configureStore(applyMiddleware(thunk, promise, logger));

    ReactDOM.render(
        <Provider store={store}>
          <App />
        </Provider>,
        document.getElementById('app'));


  });
}
