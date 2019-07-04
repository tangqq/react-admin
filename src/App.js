import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
import './styles/index.less';
// import * as serviceWorker from './serviceWorker';
import RenderRouter from '_c/RenderRouter/renderRouter'
import {routesConfig,history} from "_C";
import store from './reducer';
import {LocaleProvider} from "antd";
import _class from '_s/App.module.less'
import zh_CN from "antd/lib/locale-provider/zh_CN";
// Add this in your component file
export default ()=>{
  return <Provider store={store}>
    <ConnectedRouter history={history}>
      <LocaleProvider locale={zh_CN}>
        <RenderRouter routes={routesConfig}/>
      </LocaleProvider>
      <div className={_class.box}>hello word</div>
    </ConnectedRouter>
  </Provider>
}