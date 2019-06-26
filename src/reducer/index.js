import {createStore} from 'redux';
import { routerMiddleware} from 'connected-react-router';
import thunk from 'redux-thunk';
import {history} from "_C";
import {applyMiddleware, compose} from "redux";
import createReducer from './combineModel'

const loadingMiddleware=store=>next=>action=>{
    console.log(action)
    if(action.constructor===Promise){
        store.dispatch({type:'LOADING',loading:false});
        action.then((aa)=>{
            next({type:'LOADING',loading:true})
        },bb=>{
            console.log('vvv',bb)
        }).catch(err=>{
            console.log(231)
            next({type:'LOADING',loading:false,status:'err'})
        })
    }else{
        return next(action);
    }
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(
    createReducer(history),
    composeEnhancer(
        applyMiddleware(thunk,loadingMiddleware,routerMiddleware(history))
    ),
)
