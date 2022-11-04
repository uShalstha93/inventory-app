import React, { useEffect, useState } from 'react'
import { Modal, Form, Col, Row, Button, Toast, ToastContainer, Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addOrderShowWindow, addOrderCloseWindow, showCustomerName, showProductName } from './AddOrderSlice'
import '../../../wrapper.css'
import TitleImg from '../../../image/MainBackground.png'
import { Formik } from 'formik'
import * as Yup from 'yup'

const AddOrder = () => {

    const dispatch = useDispatch()
    const { addOrderShow, product, customer } = useSelector((state) => state.AddOrder)

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const handleOrderShow = () => {
        dispatch(addOrderShowWindow())
    }

    const handleOrderClose = () => {
        dispatch(addOrderCloseWindow())
    }

    const fetchCustomerName = () => {
        fetch("http://localhost:2000/customers")
            .then((res) => res.json())
            .then(customerData => {
                dispatch(showCustomerName(customerData.detail))
            })
    }

    const fetchProductName = () => {
        fetch("http://localhost:2000/products")
            .then((res) => res.json())
            .then(productData => {
                dispatch(showProductName(productData.detail))
            })
    }

    useEffect(() => {
        fetchCustomerName()
        fetchProductName()
    }, [])

    const validateAddOrderSchema = Yup.object().shape({
        orderID: Yup.number()
            .required("* ID is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        customerID: Yup.number()
            .required("* Customer ID is Required!!"),
        customerName: Yup.string()
            .required("* Customer Name is Required!!"),
        productID: Yup.number()
            .required("* Product ID is Required!!"),
        productName: Yup.string()
            .required("* Product Name is Required!!"),
        contactNo: Yup.number()
            .required("* Contact Number is Required!!"),
        orderDate: Yup.date()
            .required("* Date is Required!!"),
        orderPrice: Yup.number()
            .required("* Price is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        orderQty: Yup.number()
            .required("* Quantity is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        orderStatus: Yup.string()
            .required("* Status is Required!!")
    })

    return (

        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleOrderShow}>
                <div className="align-center">
                    <p className="m-0" style={{ position: "relative", right: "5px" }}>
                        <i className="bi bi-plus" /> ADD ORDER
                    </p>
                </div>
            </div>
            <Modal show={addOrderShow} onHide={handleOrderClose} style={{ fontFamily: "serif" }} size="lg" >
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>ADD ORDER</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ orderID: "", customerID: "", customerName: "", productID: "", productName: "", contactNo: "", orderDate: "", orderQty: "", orderPrice: "", orderStatus: "" }}
                        validationSchema={validateAddOrderSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            // setTimeout(() => {
                            //     const requestOptions = {
                            //         method: "POST",
                            //         headers: { "Content-Type": "application/json" },
                            //         body: JSON.stringify({
                                        // orderID: values.orderID,
                                        // customerID: values.customerID,
                                        // customerName: values.customerName,
                                        // productID: values.productID,
                                        // productName: values.productName,
                                        // contactNo: values.contactNo,
                                        // orderDate: values.orderDate,
                                        // orderQty: values.orderQty,
                                        // orderPrice: values.orderPrice,
                                        // orderStatus: values.orderStatus
                            //         })
                            //     }
                            //     fetch("http://localhost:2000/orders", requestOptions)
                            //         .then((res) => res.json())
                            //         .then(result => {
                            //             setAlertMsg(result.message)
                            //         })
                            //         .then(setShowAlert(true))
                            //         .then(resetForm())
                            //         .then(setSubmitting(false))
                            //         .then(handleProductClose())
                            // }, 500);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="orderID">
                                    <Form.Label column sm="2">ORDER ID :</Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="text" name="orderID" placeholder="Enter Order ID" onChange={handleChange} value={values.orderID} style={{ borderColor: touched.orderID && errors.orderID ? "red" : null }} />
                                        {touched.orderID && errors.orderID ? (
                                            <Col className="error-message">{errors.orderID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Label><b>CUSTOMER FIELD</b><hr className="mt-1" /></Form.Label>
                                <Form.Group as={Row} className="mb-3" controlId="customers">
                                    <Form.Label column sm="2">CUST. ID :</Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="text" name="customerID" placeholder="Cust. ID" onChange={handleChange} value={values.customerID} style={{ borderColor: touched.customerID && errors.customerID ? "red" : null }} disabled />
                                        {touched.customerID && errors.customerID ? (
                                            <Col className="error-message">{errors.customerID}</Col>
                                        ) : null}
                                    </Col>
                                    <Form.Label column sm="2">CUST. NAME :</Form.Label>
                                    <Col sm="4">
                                        <Form.Select id="selectCustomer" type="text" name="customerName" onChange={handleChange} value={values.customerName} style={{ borderColor: touched.customerName && errors.customerName ? "red" : null }}>
                                            <option>Select Customer</option>
                                            {customer.map((custName, id) => {
                                                return (
                                                    <option>{custName.customerName}</option>
                                                )
                                            })}
                                        </Form.Select>
                                        {touched.customerName && errors.customerName ? (
                                            <Col className="error-message">{errors.customerName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="contactNo">
                                    <Form.Label column sm="2">CONTACT NO</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" name="contactNo" placeholder="Enter Contact No" onChange={handleChange} value={values.contactNo} style={{ borderColor: touched.contactNo && errors.contactNo ? "red" : null }} disabled />
                                        {touched.contactNo && errors.contactNo ? (
                                            <Col className="error-message">{errors.contactNo}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Label><b>PRODUCT FIELD</b><hr className="mt-1" /></Form.Label>
                                <Form.Group as={Row} className="mb-3" controlId="products">
                                    <Form.Label column sm="2">PROD. ID :</Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="text" name="productID" placeholder="Prod. ID" onChange={handleChange} value={values.productID} style={{ borderColor: touched.productID && errors.productID ? "red" : null }} disabled />
                                        {touched.productID && errors.productID ? (
                                            <Col className="error-message">{errors.productID}</Col>
                                        ) : null}
                                    </Col>
                                    <Form.Label column sm="2">PROD. NAME :</Form.Label>
                                    <Col sm="4">
                                        <Form.Select id="selectProduct" type="text" name="productName" onChange={handleChange} value={values.productName} style={{ borderColor: touched.productName && errors.productName ? "red" : null }}>
                                            <option>Select Product</option>
                                            {product.map((pName, id) => {
                                                return (
                                                    <option>{pName.productName}</option>
                                                )
                                            })}
                                        </Form.Select>
                                        {touched.productName && errors.productName ? (
                                            <Col className="error-message">{errors.productName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="orders">
                                    <Form.Label column sm="2">ORDER DATE :</Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="text" name="orderDate" placeholder="Enter Date" onChange={handleChange} value={values.orderDate} style={{ borderColor: touched.orderDate && errors.orderDate ? "red" : null }} />
                                        {touched.orderDate && errors.orderDate ? (
                                            <Col className="error-message">{errors.orderDate}</Col>
                                        ) : null}
                                    </Col>
                                    <Form.Label column sm="2">ORDER QTY:</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" name="orderQty" placeholder="Enter Quantity" onChange={handleChange} value={values.orderQty} style={{ borderColor: touched.orderQty && errors.orderQty ? "red" : null }} />
                                        {touched.orderQty && errors.orderQty ? (
                                            <Col className="error-message">{errors.orderQty}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="orderPrice">
                                    <Form.Label column sm="2">TOTAL PRICE:</Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="text" name="orderPrice" placeholder="Rs." onChange={handleChange} value={values.orderPrice} style={{ borderColor: touched.orderPrice && errors.orderPrice ? "red" : null }} />
                                        {touched.orderPrice && errors.orderPrice ? (
                                            <Col className="error-message">{errors.orderPrice}</Col>
                                        ) : null}
                                    </Col>
                                    <Form.Label column sm="2">STATUS :</Form.Label>
                                    <Col sm="4">
                                        <Form.Select id="orderStatus" type="text" name="orderStatus" onChange={handleChange} value={values.orderStatus} style={{ borderColor: touched.orderStatus && errors.orderStatus ? "red" : null }}>
                                            <option>Select Status</option>
                                            <option value="Pending">Pending</option>
                                            <option value="Delivered">Delivered</option>
                                        </Form.Select>
                                        {touched.orderStatus && errors.orderStatus ? (
                                            <Col className="error-message">{errors.orderStatus}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting}>ADD</Button>
                                    <Button variant="outline-danger" size="sm" onClick={handleOrderClose} >CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", left: "15rem", fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">ADD ORDER</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>

    )
}

export default AddOrder