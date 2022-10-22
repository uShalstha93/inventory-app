import React, { useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function ToastExample() {
    // const [position, setPosition] = useState('top-start');

    return (
        <ToastContainer position="top-end" className="p-3">
            <Toast style={{ position: "relative", top: "80px" }}>
                <Toast.Header>
                    <strong className="me-auto">Category</strong>
                </Toast.Header>
                <Toast.Body>Updated!</Toast.Body>
            </Toast>
        </ToastContainer>

        // <div>
        //     <ToastContainer position="top-end" className="p-3">
        //         <Toast>
        //             <Toast.Header>
        //                 <img
        //                     src="holder.js/20x20?text=%20"
        //                     className="rounded me-2"
        //                     alt=""
        //                 />
        //                 <strong className="me-auto">Bootstrap</strong>
        //                 <small className="text-muted">just now</small>
        //             </Toast.Header>
        //             <Toast.Body>See? Just like this.</Toast.Body>
        //         </Toast>
        //         <Toast>
        //             <Toast.Header>
        //                 <img
        //                     src="holder.js/20x20?text=%20"
        //                     className="rounded me-2"
        //                     alt=""
        //                 />
        //                 <strong className="me-auto">Bootstrap</strong>
        //                 <small className="text-muted">2 seconds ago</small>
        //             </Toast.Header>
        //             <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
        //         </Toast>
        //     </ToastContainer>
        // </div>
    );
}

export default ToastExample;