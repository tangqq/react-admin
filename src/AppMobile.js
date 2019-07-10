import React from 'react';
import {Provider} from 'react-redux';
import {ConnectedRouter} from 'connected-react-router';
// import * as serviceWorker from './serviceWorker';
import RenderRouterM from '_c/RenderRouter/RenderRouterMobile'
import history from "_C/history.config";
import routesConfig from '_C/routesMobile.config'
import store from './reducer';
// Add this in your component file
export default ()=>{
  return <Provider store={store}>
    <ConnectedRouter history={history}>
        <RenderRouterM routes={routesConfig}/>
    </ConnectedRouter>
  </Provider>
}