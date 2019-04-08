import {combineReducers,createStore} from 'redux';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import root from './root';
import history from "../config/history.config";
import {applyMiddleware, compose} from "redux";

export const createCombineReducer= (history) => combineReducers({
    router:connectRouter(history),
     root
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    createCombineReducer(history),
    composeEnhancer(
        applyMiddleware(thunk,routerMiddleware(history))
    ),
)