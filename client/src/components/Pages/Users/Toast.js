import React, { useState } from 'react';
// import { Alert } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastExample() {
    // const [position, setPosition] = useState('top-start');
    const [showAlert, setShowAlert] = useState(false)

    const clickMe = () => {
        setShowAlert(true);

    }

    return (
        <>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", top: "80px" }} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Category</strong>
                    </Toast.Header>
                    <Toast.Body>Updated!</Toast.Body>
                </Toast>
            </ToastContainer>
            <button onClick={clickMe}>
                ClickMe
            </button>
        </>
        // <>
        //     <Alert show={showAlert} variant="danger">Hello</Alert>
        //     <button className='container' onClick={() => clickMe()}>ClickMe</button>
        // </>
    );
}

export default ToastExample;