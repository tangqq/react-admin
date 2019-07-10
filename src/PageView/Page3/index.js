import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { StopBox} from "_c/index";

class index extends Component {

    render() {
        return <StopBox stopFunc={()=>{
            return '/login'
        }}>
            <div>
                这里是page3
                <Link to="/">回到首页</Link>
            </div>
        </StopBox>
    }
}

export default index