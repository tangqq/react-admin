import React, {Suspense,  lazy} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom';
import Loading from '_c/Loading/Loading';
import PropTypes from 'prop-types';

/**
 * 配置路由，路由又配置JSON自动生成，包括路由拦截器的封装
 */
export default function RouterMap ({routes}){
    function resultRender(result, Component,fallback) {
        if (!result) {
            return Component
        } else if (result.constructor === Promise) {
            return <Loadable fallback={fallback}
                             lazy={result}
                             renderResolve={item => resultRender(item, Component,fallback)}
                             renderReject={toPath => <Redirect to={toPath}/>}
            />
        } else if ((typeof result === 'string') || result.pathname) {
            return <Redirect to={result}/>
        }
    }
    const routerDom = routes.map((router, i) => {
        const {component, routes = [], stopActive, ...reset} = router;
        let Template;
        if (typeof component === 'string') {
            let path;
            if (component.substr(0, 2) === './') {
                path = component.substring(2)
            } else if (component.substr(0, 1) === '/') {
                path = component.substring(1)
            } else {
                path = component
            }
            Template = lazy(() => import('_m_p/' + path))
        } else {
            Template = component
        }
        return (
            <Route key={reset.path || i} {...reset} render={props => {
                if (stopActive && typeof stopActive === 'function') {
                    const result = stopActive(props);
                    return resultRender(result, <Template {...props} routes={routes}/>,router.fallbackComponent||<Loading type={"three"}/>)
                }
                return <Template {...props} routes={routes}/>
            }}/>
        )
    });
    return  (
        <Suspense fallback={<Loading type="one"/>}>
            <Switch>
                {routerDom}
            </Switch>
        </Suspense>

    )
}

RouterMap.propTypes = {
    /**
     * 路由配置项
     */
    fallback:PropTypes.func,
    routes: PropTypes.arrayOf(
        PropTypes.shape({
            /**
             * 路由对应组件所在的位置，根路径为PageView
             */
            component:PropTypes.string,
            /**
             * 同Route path
             */
            path:PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.arrayOf(PropTypes.string)
            ]),
            /**
             * 同  Route exact
             */
            exact:PropTypes.bool,
            /**
             * 同  Route strict
             */
            strict:PropTypes.bool,
            /**
             * 同Route sensitive,是否大小写敏感。
             */
            sensitive:PropTypes.bool,
            fallbackComponent:PropTypes.node,
        })
    )
};
RouterMap.defaultProps = {
    routes: []
};

export class Loadable extends React.Component {
    state = {
        AnotherComponent: 'init',
        isErr: false
    };

    componentDidMount() {
        this.props.lazy.then((obj) => {
            this.setState({AnotherComponent: obj})
        }, (err) => {
            this.setState({AnotherComponent: err, isErr: true,})
        })
    }

    render() {
        let {AnotherComponent, isErr} = this.state;
        const {renderResolve, renderReject, fallback} = this.props;
        if (AnotherComponent === 'init') {
            return fallback;
        } else {
            return isErr ? renderReject(AnotherComponent) : renderResolve(AnotherComponent)
        }
    }
}

Loadable.propTypes = {
    renderReject: PropTypes.func,
    renderResolve: PropTypes.func,
};
Loadable.defaultProps = {
    renderReject: () => {
    },
    renderResolve: () => {
    }
};
