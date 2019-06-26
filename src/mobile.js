
import React from 'react';
import ReactDOM from 'react-dom';
import _class from '_s/mobile.module.less'
function App (){
  return <div className={_class.box}>hello word</div>
}
// Add this in your component file
ReactDOM.render(<App/>, document.getElementById('root'))
