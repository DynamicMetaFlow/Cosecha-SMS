import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';
import allReducers from './reducers';
import App from './components/App.js';


const logger = createLogger();
const store = createStore(
  allReducers,
  applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
