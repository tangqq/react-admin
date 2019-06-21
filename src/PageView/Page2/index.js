import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class index extends Component {

    addNumber = (num: number): number => {
        console.log(num)
    };

    componentDidMount() {
       this.addNumber('23')
    }

    render() {
        return <div>
            这里是page2
            <Link to="/">回到首页</Link>
        </div>
    }
}

export default index