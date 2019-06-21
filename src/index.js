import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import RenderRouter from './components/RenderRouter/renderRouter'
import {routesConfig} from "./config";
import history from './config/history.config';
import store from './reducer';
import {LocaleProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

// Add this in your component file
ReactDOM.render(<Provider store={store}>
    <ConnectedRouter history={history}>
        <LocaleProvider locale={zh_CN}>
            <RenderRouter routes={routesConfig}/>
        </LocaleProvider>
    </ConnectedRouter>
</Provider>, document.getElementById('root'))
