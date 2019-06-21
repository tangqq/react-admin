import React, {Component} from 'react';
import _class from './loading.less'
class loading extends Component {
    render() {
        return <div
            className={_class.loading}>
            <div>
                加载中
            </div>
        </div>
    }
}

export default loading