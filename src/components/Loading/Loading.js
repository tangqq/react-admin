import React from 'react';
import './loading.less'

const LoadingOne = ({color}) => {
    return <svg className="loading-svg" version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
        <circle fill={color} stroke="none" cx="6" cy="50" r="6">
            <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.1"/>
        </circle>
        <circle fill={color} stroke="none" cx="26" cy="50" r="6">
            <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.2"/>
        </circle>
        <circle fill={color} stroke="none" cx="46" cy="50" r="6">
            <animate
                attributeName="opacity"
                dur="1s"
                values="0;1;0"
                repeatCount="indefinite"
                begin="0.3"/>
        </circle>
    </svg>
};
const LoadingTwo = ({color:{background,active}})=>{
    return <svg className="loading-svg" version="1.1" id="L3" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
<circle fill="none" stroke={background} stroke-width="4" cx="50" cy="50" r="44" style={{opacity:0.5}}/>
        <circle fill={active} stroke={"#fff"} stroke-width="3" cx="8" cy="54" r="6" >
    <animateTransform
        attributeName="transform"
        dur="2s"
        type="rotate"
        from="0 50 48"
        to="360 50 52"
        repeatCount="indefinite" />

  </circle>
</svg>
};
const LoadingTree = ({color})=>{
    return <svg className="loading-svg" version="1.1" id="L9" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 100 100" enable-background="new 0 0 0 0" xmlSpace="preserve">
    <path fill={color} d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
      <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          dur="1s"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite" />
  </path>
</svg>
};
const Loading = () => {
    return <div
        className="loading">
        <div>
            <LoadingTree color={'#7b1052'}/>
        </div>
    </div>
};

export default Loading