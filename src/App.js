import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import RenderRouter from '_c/RenderRouter/renderRouter'
import {routesConfig,history} from "_C";
import store from './reducer';
import {LocaleProvider} from "antd";
import zh_CN from "antd/lib/locale-provider/zh_CN";

// Add this in your component file
export default ()=>{
  return <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>
        <RenderRouter routes={routesConfig}/>
      </LocaleProvider>
    </ConnectedRouter>
  </Provider>
}
