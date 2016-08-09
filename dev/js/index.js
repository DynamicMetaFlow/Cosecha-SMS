import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
    applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
    <h1>Testing, testing</h1>,
    document.getElementById('root')
);
