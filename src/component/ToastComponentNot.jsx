/*import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastComponentNot({ appName, message, showToast, setShowToast }) {
    //const [show, setShow] = showToast;//useState(false);
   // const { showToast } = showToast;
    const onCloseToast = () => {
        //setShowToast(false);
        showToast(false);
    }
    return (
        <ToastContainer
            className="p-3"
            position='bottom-end'
            style={{ zIndex: 1 }}
        >
            <Toast onClose={() => onCloseToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
            </Toast>
        </ToastContainer>
    );
}

export default ToastComponentNot;*/