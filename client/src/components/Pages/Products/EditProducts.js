import React from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editProductShowWindow, editProductCloseWindow } from './EditProductSlice'
import { showCategoryName } from './AddProductSlice'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../../../wrapper.css'
import TitleImg from '../../../image/MainBackground.png'

const EditProducts = (props) => {

    const dispatch = useDispatch()
    const { editProductShow, currentSelectedProduct } = useSelector((state) => state.EditProduct)
    const { categoryName } = useSelector((state) => state.AddProduct)

    const editHandleShow = () => {
        dispatch(editProductShowWindow(props.EditProducts))
    }

    const editHandleClose = () => {
        dispatch(editProductCloseWindow())
    }

    const validateUpdateProductSchema = Yup.object().shape({
        productID: Yup.number()
            .required("* ID is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        productName: Yup.string()
            .min(3, "* Must have at least 3 characters!!")
            .max(25, "* Must be less than 25 character!!")
            .required("* Name is Required!!"),
        productCategory: Yup.string()
            .required("* Status is Required!!"),
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
            <div>
                <i className="bi bi-pencil-square btn-sm" onClick={editHandleShow} />
            </div>
            <Modal show={editProductShow} onHide={editHandleClose}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>EDIT PRODUCTS</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ productID: currentSelectedProduct.productID, productName: currentSelectedProduct.productName, productCategory: currentSelectedProduct.productCategory, productQty: currentSelectedProduct.productQty, productPrice: currentSelectedProduct.productPrice }}
                        validationSchema={validateUpdateProductSchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {

                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="productID">
                                    <Form.Label column sm="2">ID :</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="productID" placeholder="Enter Product ID" onChange={handleChange} defaultValue={values.productID} style={{ borderColor: touched.productID && errors.productID ? "red" : null }} />
                                        {touched.productID && errors.productID ? (
                                            <Col className="error-message">{errors.productID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productName">
                                    <Form.Label column sm="2">NAME :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="productName" placeholder="Enter Product Name" onChange={handleChange} defaultValue={values.productName} style={{ borderColor: touched.productName && errors.productName ? "red" : null }} />
                                        {touched.productName && errors.productName ? (
                                            <Col className="error-message">{errors.productName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productCategory">
                                    <Form.Label column sm="3">CATEGORY :</Form.Label>
                                    <Col sm="5">
                                        <Form.Select id="selectCategory" type="text" name="productCategory" onChange={handleChange} defaultValue={values.productCategory} style={{ borderColor: touched.productCategory && errors.productCategory ? "red" : null }}>
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
                                        <Form.Control type="text" name="productQty" placeholder="Enter Quantity" onChange={handleChange} defaultValue={values.productQty} style={{ borderColor: touched.productQty && errors.productQty ? "red" : null }} />
                                        {touched.productQty && errors.productQty ? (
                                            <Col className="error-message">{errors.productQty}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="productPrice">
                                    <Form.Label column sm="3">PRICE :</Form.Label>
                                    <Col sm="4">
                                        <Form.Control type="text" name="productPrice" placeholder="Enter Price" onChange={handleChange} defaultValue={values.productPrice} style={{ borderColor: touched.productPrice && errors.productPrice ? "red" : null }} />
                                        {touched.productPrice && errors.productPrice ? (
                                            <Col className="error-message">{errors.productPrice}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting}>ADD</Button>
                                    <Button variant="outline-danger" size="sm" onClick={editHandleClose} >CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>

    )
}

export default EditProducts