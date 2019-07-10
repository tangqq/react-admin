import {createStore} from 'redux';
import { routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import history from "_C/history.config";
import {applyMiddleware, compose} from "redux";
import createReducer from './combineModel'

import loadingMiddleware from './loadingMiddleware'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    createReducer(history),
    composeEnhancer(
        applyMiddleware(thunk,loadingMiddleware,routerMiddleware(history))
    ),
)
