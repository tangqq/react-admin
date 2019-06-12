import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class index extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <div>
            这里是page3
            <Link to="/">回到首页</Link>
        </div>
    }
}

export default index