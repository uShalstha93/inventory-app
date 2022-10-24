import React, { useEffect, useState } from 'react'
import { Modal, Form, Col, Row, Button, Toast, ToastContainer } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addProductShowWindow, addProductCloseWindow, showCategoryName } from './AddProductSlice'
import '../../../wrapper.css'
import TitleImg from '../../../image/MainBackground.png'
import { Formik } from 'formik'
import * as Yup from 'yup'

const AddProducts = () => {

    const dispatch = useDispatch()
    const { addProductShow, categoryName } = useSelector((state) => state.AddProduct)
    // console.log(useSelector((state) => state.AddProduct))

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const handleProductShow = () => {
        dispatch(addProductShowWindow())
    }

    const handleProductClose = () => {
        dispatch(addProductCloseWindow())
    }

    const fetchCategoryName = () => {
        fetch("http://localhost:2000/category")
            .then((res) => res.json())
            .then(data => {
                dispatch(showCategoryName(data.detail))
                // console.log(data.detail)
            })
    }

    useEffect(() => {
        fetchCategoryName()
    }, [])


    const validateAddProductSchema = Yup.object().shape({
        productID: Yup.number()
            .required("* ID is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        productName: Yup.string()
            .min(3, "* Must have at least 3 characters!!")
            .max(25, "* Must be less than 25 character!!")
            .required("* Name is Required!!"),
        productCategory: Yup.string()
            .required("* Category is Required!"),
        productQty: Yup.number()
            .required("* Quantity is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        productPrice: Yup.number()
            .required("* Price is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
    })

    return (

        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleProductShow}>
                <div className="align-center">
                    <p className="m-0" style={{ position: "relative", right: "5px" }}><i className="bi bi-plus" /> ADD PRODUCT</p>
                </div>
            </div>
            <Modal show={addProductShow} onHide={handleProductClose} style={{ fontFamily: "serif" }}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>ADD PRODUCT</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ productID: "", productName: "", productCategory: "", productQty: "", productPrice: "" }}
                        validationSchema={validateAddProductSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            setTimeout(() => {
                                const requestOptions = {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify({
                                        productID: values.productID,
                                        productName: values.productName,
                                        productCategory: values.productCategory,
                                        productQty: values.productQty,
                                        productPrice: values.productPrice
                                    })
                                }
                                fetch("http://localhost:2000/products", requestOptions)
                                    .then((res) => res.json())
                                    .then(result => {
                                        setAlertMsg(result.message)
                                    })
                                    .then(setShowAlert(true))
                                    .then(resetForm())
                                    .then(setSubmitting(false))
                                    .then(handleProductClose())
                            }, 500);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="productID">
                                    <Form.Label column sm="2">ID :</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="productID" placeholder="Enter Product ID" onChange={handleChange} value={values.productID} style={{ borderColor: touched.productID && errors.productID ? "red" : null }} />
                                        {touched.productID && errors.productID ? (
                                            <Col className="error-message">{errors.productID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productName">
                                    <Form.Label column sm="2">NAME :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="productName" placeholder="Enter Product Name" onChange={handleChange} value={values.productName} style={{ borderColor: touched.productName && errors.productName ? "red" : null }} />
                                        {touched.productName && errors.productName ? (
                                            <Col className="error-message">{errors.productName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productCategory">
                                    <Form.Label column sm="3">CATEGORY :</Form.Label>
                                    <Col sm="5">
                                        <Form.Select id="selectCategory" type="text" name="productCategory" onChange={handleChange} value={values.productCategory} style={{ borderColor: touched.productCategory && errors.productCategory ? "red" : null }}>
                                            <option>Select Category</option>
                                            {categoryName.map((item, idx) => {
                                                if (item.catStatus === "Active") {
                                                    return (
                                                        <option>{item.catName}</option>
                                                    )
                                                }
                                            })}
                                        </Form.Select>
                                        {touched.productCategory && errors.productCategory ? (
                                            <Col className="error-message">{errors.productCategory}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productQty">
                                    <Form.Label column sm="3">QUANTITY :</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" name="productQty" placeholder="Enter Quantity" onChange={handleChange} value={values.productQty} style={{ borderColor: touched.productQty && errors.productQty ? "red" : null }} />
                                        {touched.productQty && errors.productQty ? (
                                            <Col className="error-message">{errors.productQty}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productPrice">
                                    <Form.Label column sm="3">PRICE :</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" name="productPrice" placeholder="Enter Price" onChange={handleChange} value={values.productPrice} style={{ borderColor: touched.productPrice && errors.productPrice ? "red" : null }} />
                                        {touched.productPrice && errors.productPrice ? (
                                            <Col className="error-message">{errors.productPrice}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting}>ADD</Button>
                                    <Button variant="outline-danger" size="sm" onClick={handleProductClose} >CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", left: "15rem", fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">ADD PRODUCT</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default AddProducts