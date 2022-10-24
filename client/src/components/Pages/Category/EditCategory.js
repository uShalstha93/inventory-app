import React, { useState } from 'react'
import { Modal, Form, Button, Row, Col, ToastContainer, Toast } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editShowWindow, editCloseWindow } from './EditCategorySlice'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../../../wrapper.css'
import TitleImg from '../../../image/MainBackground.png'

const EditCategory = (props) => {

    const dispatch = useDispatch();
    const { editShow, currentSelectedItem } = useSelector((state) => state.EditCategory)
    // console.log(currentSelectedItem)

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const editHandleShow = () => {
        dispatch(editShowWindow(props.EditItem))
    }

    const editHandleClose = () => {
        dispatch(editCloseWindow())
    }

    const validateUpdateCategorySchema = Yup.object().shape({
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

    return (

        <>
            <div>
                <i className="bi bi-pencil-square btn-sm" onClick={editHandleShow} />
            </div>
            <Modal show={editShow} onHide={editHandleClose}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6", backgroundImage: `url(${TitleImg})`, color: "white" }} closeButton>
                    <Modal.Title>EDIT CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ background: "aliceblue" }}>
                    <Formik
                        initialValues={{ catID: currentSelectedItem.catID, catName: currentSelectedItem.catName, catStatus: currentSelectedItem.catStatus }}
                        validationSchema={validateUpdateCategorySchema}
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            setSubmitting(true);
                            setTimeout(() => {
                                // alert(JSON.stringify(values, null, 2));
                                const requestOptions = {
                                    method: 'PUT',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({
                                        catID: values.catID,
                                        catName: values.catName,
                                        catStatus: values.catStatus,
                                    })
                                }
                                fetch("http://localhost:2000/category", requestOptions)
                                    // .then(alert(`${values.catName} - Category Updated Successfully`))
                                    .then((res) => res.json())
                                    .then(result => {
                                        setAlertMsg(result.message)
                                    })
                                    .then(setShowAlert(true))
                                    .then(resetForm())
                                    .then(setSubmitting(false))
                                    .then(editHandleClose)
                                // categorySubmit();
                                // resetForm();
                                // setSubmitting(false);
                            }, 100);

                        }}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="categoryID">
                                    <Form.Label column sm="2">ID :</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="catID" placeholder="Category ID" defaultValue={values.catID} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} disabled />
                                        {touched.catID && errors.catID ? (
                                            <Col className="error-message">{errors.catID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryName">
                                    <Form.Label column sm="2">NAME :</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="catName" placeholder="Enter Category Name" onChange={handleChange} defaultValue={values.catName} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} />
                                        {touched.catName && errors.catName ? (
                                            <Col className="error-message">{errors.catName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryStatus">
                                    <Form.Label column sm="2">STATUS:</Form.Label>
                                    <Col sm="5">
                                        <Form.Select id="selectCategory" name="catStatus" onChange={handleChange} defaultValue={values.catStatus} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} >
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
                                    <Button variant='outline-primary' size='sm' type="submit" disabled={isSubmitting}>UPDATE</Button>
                                    <Button variant='outline-danger' size='sm' onClick={editHandleClose}>CLOSE</Button>
                                    {/* {JSON.stringify(categoryList)} */}
                                </Modal.Footer>
                            </Form>
                        )}

                    </Formik>
                </Modal.Body>
            </Modal>
            <ToastContainer position="top-end" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ position: "relative", left: "45rem", fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">UPDATE CATEGORY</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}

export default EditCategory
