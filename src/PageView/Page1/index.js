//@flow
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { TextField ,Button} from '@material-ui/core/index'
function PageOne() {
    const [number, setNumber] = useState(0);
    useEffect(() => {
        console.log(number, '===')
    });

    return <div>
        这里是page1
        <Link to="/">回到首页</Link>
        <div>{number}</div>
        <TextField
            id="standard-password-input"
            label="姓名"
            type="text"
            autoComplete="current-password"

            margin="normal"
        />
        <Button>按钮</Button>
    </div>
}

export default PageOne