import React from 'react';
import { Modal, Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { showWindow, closeWindow, changeCategoryID, changeCategoryName, changeCategoryStatus } from './AddCategorySlice';

const AddCategory = () => {

    const dispatch = useDispatch();
    const { show, categoryID, categoryName, categoryStatus } = useSelector((state) => state.AddCategory)
    // console.log(`show = ` + show)

    const handleShow = () => {
        dispatch(showWindow())
    }

    const handleClose = () => {
        dispatch(closeWindow())
    }

    const handleSubmit = () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    "catID": categoryID,
                    "catName": categoryName,
                    "catStatus": categoryStatus
                })
            }
            fetch("http://localhost:2000/category", requestOptions)
                .then(alert("Category Added!!"))                
                .then(handleClose)
        }
        catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <div className="shadow mb-4 pb-2 bg-white rounded btn" style={{ width: "200px" }} onClick={handleShow}>
                <div className="align-center">
                    <p className="m-0"><i className='bi bi-plus' /> ADD CATEGORY</p>
                </div>
            </div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header style={{ backgroundColor: "#e6e6e6" }} closeButton>
                    <Modal.Title>ADD CATEGORY</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-3" controlId="categoryID">
                            <Form.Label column sm="1">ID:</Form.Label>
                            <Col sm="5">
                                <Form.Control type="text" placeholder="Category ID" onKeyUp={(e) => dispatch(changeCategoryID(e.target.value))} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="categoryName">
                            <Form.Label column sm="2">NAME:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" placeholder="Enter Category Name" onKeyUp={(e) => dispatch(changeCategoryName(e.target.value))} />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="categoryStatus">
                            <Form.Label column sm="2">STATUS:</Form.Label>
                            <Col sm="5">
                                <Form.Select id="selectCategory" onChange={(e) => dispatch(changeCategoryStatus(e.target.value))}>
                                    <option>Select Status</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </Form.Select>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant='outline-primary' size='sm' onClick={handleSubmit}>ADD</Button>
                    <Button variant='outline-danger' size='sm' onClick={handleClose}>CLOSE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddCategory