import React, {lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import './index.scss';
import {Switch, Route} from 'react-router-dom'
import App from './App';
// import * as serviceWorker from './serviceWorker';
import RenderRouter from './components/RenderRouter/renderRouter'
import {routesConfig} from "./config";
import history from './config/history.config';
import store from './reducer';
import {LocaleProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";
import Loading from "./components/Loading";

ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <LocaleProvider locale={zh_CN}>
            <RenderRouter routes={routesConfig}/>
        </LocaleProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
/*<Suspense fallback={<Loading/>}>

<Switch>
<Route path={'/login'} render={
(props) => {
    const Com = lazy(() => import('./PageView/Login'));
    return <Com {...props}/>
}}/>

<Route path={'/p1'} render={
    (props) => {
        const Com = lazy(() => import('./PageView/Page1'));
        return <Com {...props}/>
    }}/>
<Route path={'/p2'} render={
(props) => {
    const Com = lazy(() => import('./PageView/Page2'));
    return <Com {...props}/>
}}/>
<Route path={'/p3'} render={
    (props) => {
        const Com = lazy(() => import('./PageView/Page3'));
        return <Com {...props}/>
    }}/>
<Route path={'/p4'} render={
(props) => {
    const Com = lazy(() => import('./PageView/Page4'));
    return <Com {...props}/>
}}/>
<Route path={'/p5'} render={
    (props) => {
        const Com = lazy(() => import('./PageView/Page5'));
        return <Com {...props}/>
    }}/>
<Route path={'/p6'} render={
(props) => {
    const Com = lazy(() => import('./PageView/Page6'));
    return <Com {...props}/>
}}/>
<Route path={'/p7'} render={
    (props) => {
        const Com = lazy(() => import('./PageView/Page7'));
        return <Com {...props}/>
    }}/>
<Route path={'/p8'} render={
(props) => {
    const Com = lazy(() => import('./PageView/Page8'));
    return <Com {...props}/>
}}/>
<Route path={'/'} render={
    (props) => {
        const Com = lazy(() => import('./PageView/Home'));
        return <Com {...props}/>
    }}/>
</Switch>
</Suspense>*/
