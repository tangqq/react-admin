import React, {Suspense, Component,lazy} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Loading from '../Loading/index';
import PropTypes from 'prop-types';
import {LocaleProvider,} from 'antd'
import zh_CN from 'antd/lib/locale-provider/zh_CN'
const routeFormat = (routes) => {
    let arr = [];
    routes.forEach(item => {
        if (item.component) {
            arr.push(item)
        } else if (item.routes && item.routes.constructor === Array) {
            arr = arr.concat(routeFormat(item.routes))
        }
    });
    return arr
};
export default class RouterMap extends Component {
    handleResize = () => {
        this.forceUpdate()
    };

    componentDidMount() {
        // window.onresize = throttle(this.handleResize, 500, 2000)
    }

    componentWillUnmount() {
        window.onresize = null;
    }

    render() {
        const {routes} = this.props;
        const arr = routeFormat(routes);
        const routerDom =arr.map((router, i) => {
            const {component, routes = [], authentication: auth, ...reset} = router;
            const Component = lazy(()=>component);
            return (
                <Route key={reset.path || i} {...reset} render={props => {
                    if (auth && typeof auth === 'function') {
                        const result = auth(props);
                        if (!result || typeof result !== 'object') {
                            throw `router.config.js--${reset.path} 路由配置里的 authentication函数必须返回一个对象`
                        }
                        const {isAuth, ...obj} = result;
                        return isAuth ? <Component {...props} routes={routes}/>
                            : <Redirect {...obj}/>
                    }
                    return <Component {...props} routes={routes}/>
                }}/>
            )
        });
        return (
            <LocaleProvider locale={zh_CN}>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        {routerDom}
                    </Switch>

                </Suspense>
            </LocaleProvider>
        )
    }
}
RouterMap.propTypes = {
    routes: PropTypes.array
};
RouterMap.defaultProps={
    routes:[]
}