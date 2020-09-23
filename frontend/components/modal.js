import React, { useState } from 'react'; 
import ReactDom from 'react-dom'; 
import { AuthRoute } from '../util/route_util';
import SignupContainer from "./session_form/signup_container";

const MODAL_STYLES = {
    position: 'fixed', 
    height: 'auto',
    width: '500px', 
    top: '307px', 
    left: '500px',
    backgroundColor: '#FFF', 
    tranform: 'translate(-50%, -50%)',
    zIndex: 1000,
    padding: '25px 10px'
}

const OVERLAY_STYLES = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    right: 0, 
    bottom: 0, 
    backgroundColor: 'rgba(0, 0, 0, .7)',
    zIndex: 1000 
}
const Modal = ({ open, children, onClose }) => { 
    if (!open) return null 
    return ReactDom.createPortal(
        <>
            <div style ={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
            <button onClick = {onClose}>X</button>
            <SignupContainer/>
            { children }
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal;