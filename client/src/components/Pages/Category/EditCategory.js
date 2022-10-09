import React from 'react'
import { Modal, Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { showWindow, closeWindow } from './AddCategorySlice'

const EditCategory = () => {

    const dispatch = useDispatch();
    const { show, categoryList } = useSelector((state) => state.AddCategory)

    const handleShow = () => {
        dispatch(showWindow())
    }

    const handleClose = () => {
        dispatch(closeWindow())
    }

    return (

        <>
            <div>
                <i className="bi bi-pencil-square btn-sm" onClick={handleShow} />
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6" }} closeButton>
                    <Modal.Title>EDIT CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="categoryID">
                            <Form.Label column sm="1">ID:</Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" name="categoryID" placeholder="Category ID" defaultValue={null} disabled />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="categoryName">
                            <Form.Label column sm="2">NAME:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Enter Category Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="categoryStatus">
                            <Form.Label column sm="2">STATUS:</Form.Label>
                            <Col sm="5">
                                <Form.Select id="selectCategory">
                                    <option>Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-primary' size='sm' onClick={null}>UPDATE</Button>
                    <Button variant='outline-danger' size='sm' onClick={handleClose}>CLOSE</Button>
                    {JSON.stringify(categoryList)}
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default EditCategory