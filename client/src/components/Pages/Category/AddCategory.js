import React, { useState } from 'react';
import { Modal, Form, Button, Row, Col, ToastContainer, Toast } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addShowWindow, addCloseWindow } from './AddCategorySlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../../wrapper.css';
import TitleImg from '../../../image/MainBackground.png';

const AddCategory = () => {

    const dispatch = useDispatch();
    const { addShow } = useSelector((state) => state.AddCategory)

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const handleCategoryShow = () => {
        dispatch(addShowWindow())
    }

    const handleCategoryClose = () => {
        dispatch(addCloseWindow())
    }

    const validateAddCategorySchema = Yup.object().shape({
        catID: Yup.number()
            .required("* ID is Required!!")
            .positive("* Must be positive number!!")
            .integer("* Must be Integer value!!"),
        catName: Yup.string()
            .min(3, "* Must have at least 3 characters!!")
            .max(25, "* Must be less than 25 character!!")
            .required("* Name is Required!!"),
        catStatus: Yup.string()
            .required("* Status is Required!!")
    })

    // const categorySubmit = () => {
    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({
    //             catID: values.catID,
    //             catName: values.catName,
    //             catStatus: values.catStatus,
    //         })
    //     }
    //     fetch("http://localhost:2000/category", requestOptions)
    //         .then(alert("Category Added Successfully!!"))
    // }

    return (
        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleCategoryShow}>
                <div className="align-center">
                    <p className="m-0" style={{ position: "relative", right: "5px" }}><i className='bi bi-plus' /> ADD CATEGORY</p>
                </div>
            </div>
            <Modal show={addShow} onHide={handleCategoryClose} style={{ fontFamily: "serif" }}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ catID: "", catName: "", catStatus: "" }}
                        validationSchema={validateAddCategorySchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            setTimeout(() => {
                                // alert(JSON.stringify(values, null, 2));
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        catID: values.catID,
                                        catName: values.catName,
                                        catStatus: values.catStatus,
                                    })
                                }
                                fetch("http://localhost:2000/category", requestOptions)
                                    // .then(alert(`${values.catName} - Category Added Successfully`))
                                    .then((res) => res.json())
                                    .then(result => {
                                        setAlertMsg(result.message)
                                    })
                                    .then(setShowAlert(true))
                                    .then(resetForm())
                                    .then(setSubmitting(false))
                                    .then(handleCategoryClose())
                                // categorySubmit();
                                // resetForm();
                                // setSubmitting(false);
                            }, 100);
                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                {/* {console.log(values)} */}
                                <Form.Group as={Row} className="mb-3" controlId="categoryID">
                                    <Form.Label column sm="2">ID :</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="catID" placeholder="Category ID" onChange={handleChange} value={values.catID} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} />
                                        {touched.catID && errors.catID ? (
                                            <Col className="error-message">{errors.catID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryName">
                                    <Form.Label column sm="2">NAME :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="catName" placeholder="Enter Category Name" onChange={handleChange} value={values.catName} style={{ borderColor: touched.catName && errors.catName ? "red" : null }} />
                                        {touched.catName && errors.catName ? (
                                            <Col className="error-message">{errors.catName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryStatus">
                                    <Form.Label column sm="2">STATUS:</Form.Label>
                                    <Col sm="5">
                                        <Form.Select id="selectCategory" name="catStatus" onChange={handleChange} value={values.catStatus} style={{ borderColor: touched.catStatus && errors.catStatus ? "red" : null }} >
                                            <option>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Form.Select>
                                        {touched.catStatus && errors.catStatus ? (
                                            <Col className="error-message">{errors.catStatus}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting}>ADD</Button>
                                    <Button variant="outline-danger" size="sm" onClick={handleCategoryClose}>CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", left: "15rem", fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">ADD CATEGORY</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default AddCategory