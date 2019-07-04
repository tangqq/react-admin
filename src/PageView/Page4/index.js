import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {stop} from "_c/index";
import {connect} from 'react-redux';
class PageFour extends Component {

    render() {
        return <div>
            这里是page4
            <Link to="/">回到首页</Link>
        </div>
    }
}

export default stop()(PageFour)