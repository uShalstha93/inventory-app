import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addShowWindow, addCloseWindow } from './AddCategorySlice';
import { Formik } from 'formik';
import * as Yup from 'yup';
import '../../../wrapper.css';

const AddCategory = () => {
    
    const dispatch = useDispatch();
    const { addShow } = useSelector((state) => state.AddCategory)

    const handleShow = () => {
        dispatch(addShowWindow())
    }

    const handleClose = () => {
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
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleShow}>
                <div className="align-center">
                    <p className="m-0"><i className='bi bi-plus' /> ADD CATEGORY</p>
                </div>
            </div>
            <Modal show={addShow} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6" }} closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                                    .then(alert("Category Added Successfully!!"))
                                    .then(resetForm())
                                    .then(setSubmitting(false))
                                // categorySubmit();
                                // resetForm();
                                // setSubmitting(false);
                            }, 500);

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
                                    <Button variant="outline-danger" size="sm" onClick={handleClose}>CLOSE</Button>
                                </Modal.Footer>
                            </Form>
                        )}
                    </Formik>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default AddCategory