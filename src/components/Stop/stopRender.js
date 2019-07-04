import React from 'react';
import {Redirect} from 'react-router-dom'
import {isFunction,getDisplayName} from "_u/index";

export default (stopFunc) => WrappedComponent => {
    if(stopFunc && !isFunction(stopFunc)){
        throw new Error(`${getDisplayName(WrappedComponent)}"argment[0]:" is Function ==:(第一个参数必须为一个function)`)
    }
    const StopBox =(props)=> {
        if(stopFunc){
            const result = stopFunc(props);
            if(React.isValidElement(result)){
                return result;
            }else if(result && !isFunction(result)){
               return  <Redirect to={result}/>
            }
        }

        return  <WrappedComponent/>
    };
    StopBox.displayName = `StopContent(${getDisplayName(WrappedComponent)})`;
    return StopBox
}