import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RenderRouter from '_c/RenderRouter/renderRouter'
import {requireUserInfo} from "./common.model";
import _class from './home.module.less';

class index extends Component {
    componentDidMount(){
        this.props.requireUserInfo();

    }
    render() {
        return <div>
                <div className={_class.title}>Hello Page</div>
            <Link to="/login">跳转到登陆</Link>
            <br/>
            <Link to="/p1">Page1</Link>
            <br/>
            <Link to="/p2">Page2</Link>
            <br/>
            <Link to="/p3">Page3</Link>
            <br/>
            <Link to="/p4">Page4</Link>
            <br/>
            <Link to="/p5">Page5</Link>
            <br/>
            <Link to="/p6">Page6</Link>
            <br/>
            <Link to="/p7">Page7</Link>
            <br/>
            <Link to="/p8">Page8</Link>
            <br/>
            <Link to="/p9">Page9</Link>
            <RenderRouter routes={this.props.routes}/>
        </div>
    }
}
function mapStateToProps(state){
    return state.common
}


export default connect(mapStateToProps,{requireUserInfo})(index)