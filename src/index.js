/*
 * Gemplate
 * August 2017
 * Author: Giwan Persaud
 */

import style from 'style'
import React from 'react'
import ReactDOM from 'react-dom'

// Redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

import rootReducer from './reducers/reducers'
// custom components
import App from 'App'

const loggerMiddleware = createLogger();

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // allows for dispatch() for async - xhr requests
        loggerMiddleware // logs app actions
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app-container')
);
