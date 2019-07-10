import React,{Component} from 'react';
import {CSSTransition} from "react-transition-group";

function wrapAnimation(WrappedComponent) {
    return class extends Component {
        render() {
            return (
                <CSSTransition
                    in={this.props.match !== null}
                    classNames={{
                        enter: 'animated',
                        enterActive: 'fadeInLeft',
                        exit: 'animated',
                        exitActive: 'fadeOutRight'
                    }}
                    timeout={2000}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <WrappedComponent {...this.props} />
                </CSSTransition>
            )
        }
    }
}
export default wrapAnimation