import React from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { editShowWindow, editCloseWindow } from './AddCategorySlice'
import { Formik } from 'formik'
import * as Yup from 'yup'
import '../../../wrapper.css'

const EditCategory = (props) => {

    // const [itemEdit, setItemEdit] = useState(props.item)
    // const [editShow, setEditShow] = useState(true)

    const dispatch = useDispatch();
    const { editShow } = useSelector((state) => state.AddCategory)

    const editHandleShow = () => {
        dispatch(editShowWindow())
        // setEditShow(true)
    }

    const editHandleClose = () => {
        dispatch(editCloseWindow())
        // setEditShow(false)
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
                <Modal.Header style={{ backgroundColor: "#e6e6e6" }} closeButton>
                    <Modal.Title>EDIT CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Formik
                        initialValues={null}
                        validationSchema={validateUpdateCategorySchema}
                    >
                        {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                            <Form onSubmit={handleSubmit}>
                                <Form.Group as={Row} className="mb-3" controlId="categoryID">
                                    <Form.Label column sm="1">ID:</Form.Label>
                                    <Col sm="5">
                                        <Form.Control type="text" name="catID" placeholder="Category ID" defaultValue={null} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} disabled />
                                        {touched.catID && errors.catID ? (
                                            <Col className="error-message">{errors.catID}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryName">
                                    <Form.Label column sm="2">NAME:</Form.Label>
                                    <Col sm="8">
                                        <Form.Control type="text" name="catName" placeholder="Enter Category Name" onChange={handleChange} defaultValue={null} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} />
                                        {touched.catName && errors.catName ? (
                                            <Col className="error-message">{errors.catName}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} className="mb-3" controlId="categoryStatus">
                                    <Form.Label column sm="2">STATUS:</Form.Label>
                                    <Col sm="5">
                                        <Form.Select id="selectCategory" name="catStatus" onChange={handleChange} style={{ borderColor: touched.catID && errors.catID ? "red" : null }} >
                                            <option defaultValue={null}>Select Status</option>
                                            <option value="Active">Active</option>
                                            <option value="Inactive">Inactive</option>
                                        </Form.Select>
                                        {touched.catStatus && errors.catStatus ? (
                                            <Col className="error-message">{errors.catStatus}</Col>
                                        ) : null}
                                    </Col>
                                </Form.Group>
                                <Modal.Footer>
                                    <Button variant='outline-primary' size='sm' type="submit">UPDATE</Button>
                                    <Button variant='outline-danger' size='sm' onClick={editHandleClose}>CLOSE</Button>
                                    {/* {JSON.stringify(categoryList)} */}
                                </Modal.Footer>
                            </Form>
                        )}

                    </Formik>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default EditCategory
