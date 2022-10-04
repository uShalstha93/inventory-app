import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { showWindow, closeWindow } from './AddCategorySlice';

const AddCategory = () => {

    const dispatch = useDispatch();
    const { show } = useSelector((state) => state.AddCategory)
    // console.log(`show = ` + show)

    const handleShow = () => {
        dispatch(showWindow())
    }

    const handleClose = () => {
        dispatch(closeWindow())
    }

    return (
        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleShow}>
                <div className="align-center">
                    <p className="m-0"><i className='bi bi-plus' /> ADD CATEGORY</p>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: "#ecc06e" }} closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="categoryID">
                            <Form.Label column sm="1">ID:</Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Category ID" />
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
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-primary'>ADD</Button>
                    <Button variant='outline-danger' onClick={handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCategory