//@flow
import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'antd'
function PageOne() {
    const [number,setNumber] = useState(0);
    useEffect(()=>{
        console.log(number,'===')
    })

    function addNumber (number:boolean){
        setNumber(number+1)
    }
    addNumber('342')
        return <div>
            这里是page1
             <Link to="/">回到首页</Link>
            <div>{number}</div>
            <Button onClick={addNumber.bind(this,'3ddds2')}>加一</Button>
        </div>
}

export default PageOne