import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import {isFunction} from "_u/index";

export default class StopBox extends Component {
    return() {
        const {stopFunc,children} = this.props
        if (stopFunc) {
            const result = stopFunc();
            if (React.isValidElement(result)) {
                return result;
            } else if (result && !isFunction(result)) {
                return <Redirect to={result}/>
            }
        }
        return children
    }
}

StopBox.propTypes = {
    /**
     * 拦截函数，如果返回值是一个组件，就显示组件，如果返回值是string|object 就直接跳转到返回值指向地址。
     */
    stopFunc: PropTypes.func,
}
StopBox.defaultProps={
    stopFunc:()=>{}
}