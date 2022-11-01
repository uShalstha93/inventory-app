import React, { useState } from 'react'
import { Modal, Form, Col, Row, Button, Toast, ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addCustomerShowWindow, addCustomerCloseWindow } from './AddCustomerSlice'
import '../../../wrapper.css'
import TitleImg from '../../../image/MainBackground.png'
import { Formik } from 'formik'
import * as Yup from 'yup'

const AddCustomer = () => {

    const dispatch = useDispatch()
    const { addCustomerShow } = useSelector((state) => state.AddCustomer)

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const handleCustomerShow = () => {
        dispatch(addCustomerShowWindow())
    }

    const handleCustomerClose = () => {
        dispatch(addCustomerCloseWindow())
    }

    const validateAddCustomerSchema = Yup.object().shape({
        customerID: Yup.number()
            .required("* ID is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        customerName: Yup.string()
            .min(3, "* Must have at least 3 characters!!")
            .max(25, "* Must be less than 25 character!!")
            .required("* Name is Required!!"),
        customerAddress: Yup.string()
            .min(3, "* Must have at least 3 characters!!")
            .max(25, "* Must be less than 25 character!!")
            .required("* Address is Required!!"),
        customerContactNo: Yup.number()
            .required("* Contact Number is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        customerEmail: Yup.string().email()
            .required("* Email is Required!!")
    })

    return (

        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleCustomerShow}>
                <div className="align-center">
                    <p className="m-0" style={{ position: "relative", right: "5px" }}><i className="bi bi-plus" /> ADD CUSTOMER</p>
                </div>
            </div>
            <Modal show={addCustomerShow} onHide={handleCustomerClose} style={{ fontFamily: "serif" }} centered>
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>ADD CUSTOMER</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ customerID: "", customerName: "", customerAddress: "", customerContactNo: "", customerEmail: "" }}
                        validationSchema={validateAddCustomerSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true)
                            setTimeout(() => {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        customerID: values.customerID,
                                        customerName: values.customerName,
                                        customerAddress: values.customerAddress,
                                        customerContactNo: values.customerContactNo,
                                        customerEmail: values.customerEmail
                                    })
                                }
                                fetch("http://localhost:2000/customers", requestOptions)
                                    .then((res) => res.json())
                                    .then(result => {
                                        setAlertMsg(result.message)
                                    })
                                    .then(setShowAlert(true))
                                    .then(resetForm())
                                    .then(setSubmitting(false))
                                    .then(handleCustomerClose())
                            }, 100);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="customerID">
                                    <Form.Label column sm="2">ID :</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="customerID" placeholder="Enter Customer ID" onChange={handleChange} value={values.customerID} style={{ borderColor: touched.customerID && errors.customerID ? "red" : null }} />
                                        {touched.customerID && errors.customerID ? (
                                            <Col className="error-message">{errors.customerID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="customerName">
                                    <Form.Label column sm="2">NAME :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="customerName" placeholder="Enter Customer Name" onChange={handleChange} value={values.customerName} style={{ borderColor: touched.customerName && errors.customerName ? "red" : null }} />
                                        {touched.customerName && errors.customerName ? (
                                            <Col className="error-message">{errors.customerName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="customerAddress">
                                    <Form.Label column sm="3">ADDRESS :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="customerAddress" placeholder="Enter Customer Address" onChange={handleChange} value={values.customerAddress} style={{ borderColor: touched.customerAddress && errors.customerAddress ? "red" : null }} />
                                        {touched.customerAddress && errors.customerAddress ? (
                                            <Col className="error-message">{errors.customerAddress}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="customerContactNo">
                                    <Form.Label column sm="4">CONTACT NO :</Form.Label>
                                    <Col sm="7">
                                        <Form.Control type="text" name="customerContactNo" placeholder="Enter Customer Contact No" onChange={handleChange} value={values.customerContactNo} style={{ borderColor: touched.customerContactNo && errors.customerContactNo ? "red" : null }} />
                                        {touched.customerContactNo && errors.customerContactNo ? (
                                            <Col className="error-message">{errors.customerContactNo}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="customer Email">
                                    <Form.Label column sm="3">EMAIL :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="customerEmail" placeholder="Enter Customer Email" onChange={handleChange} value={values.customerEmail} style={{ borderColor: touched.customerEmail && errors.customerEmail ? "red" : null }} />
                                        {touched.customerEmail && errors.customerEmail ? (
                                            <Col className="error-message">{errors.customerEmail}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting}>ADD</Button>
                                    <Button variant="outline-danger" size="sm" onClick={handleCustomerClose} >CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", left: "15rem", fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">ADD CUSTOMER</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>

    )
}

export default AddCustomer