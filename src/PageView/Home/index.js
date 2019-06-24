import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import RenderRouter from '_c/RenderRouter/renderRouter'
import {requireUserInfo} from "_p/Home/common.model";
class index extends Component {
    componentDidMount(){
        this.props.updateData()
    }
    render() {
        console.log(this.props)
        return <div>
            Hello Page
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
function mapPropsToDispatch(dispatch){
    return {
        updateData:()=>dispatch(requireUserInfo())
    }
}
export default connect(mapStateToProps,mapPropsToDispatch)(index)