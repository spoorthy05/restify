import React from 'react';
import Spinner from '../Spinner/Spinner';

const Modal = (props) => {
    return (
        <div 
          className="Modal"
          style={{
            transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: props.show ? '1' : '0'
          }}>
          {props.children}
          {!props.error && <Spinner/>}
          {props.error && <button onClick={props.modalClosed}>Close</button>}
        </div>
    )
}

export default Modal;
