import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
// import '../../../wrapper.css'

const Registration = () => {

    const validateFormSchema = Yup.object().shape({
        username: Yup.string()
            .required("* UserName is Required!")
            .min(5, "* Must be Greater 5 characters!")
            .max(15, "* Must be Less than 15 characters!"),
        fullname: Yup.string()
            .required("* Full Name is Required!")
            .min(5, "* Must be Greater than 5 Character!")
            .max(25, "* Must be Less than 25 characters!"),
        address: Yup.string()
            .required("* Address is Required!"),
        contactno: Yup.number()
            .required("* Contact Number is Required!")
            .min(10, "* Must be of 10 numbers")
            .positive("* Must be positive number!")
            .integer("* Must be integer Value!"),
        password: Yup.string()
            .required("* Password is Required!")
    })

    return (

        <div className="registration-body">
            <div className="form-body pb-4 shadow rounded">
            <h3 className="mt-3 text-center">Register Now</h3>

            <Formik
                initialValues={{ username: "", fullname: "", address: "", contactno: "", password: "" }}
                validationSchema={validateFormSchema}
                onSubmit={(values, { resetForm }) => {

                }}
            >
                {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                    <Form onSubmit={handleSubmit} className="m-5">
                        <Form.Group as={Row} className="mb-3" controlId="username">
                            <Form.Label column sm="4">UserName:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="username" placeholder="UserName" onChange={handleChange} value={values.username} style={{ borderColor: touched.username && errors.username ? "red" : null }} />
                                {touched.username && errors.username ? (
                                    <Col className="error-message">{errors.username}</Col>
                                ) : null}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="fullname">
                            <Form.Label column sm="4">Full Name:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="fullname" placeholder="Enter Full Name" onChange={handleChange} value={values.fullname} style={{ borderColor: touched.fullname && errors.fullname ? "red" : null }} />
                                {touched.fullname && errors.fullname ? (
                                    <Col className="error-message">{errors.fullname}</Col>
                                ) : null}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="address">
                            <Form.Label column sm="4">Address:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="address" placeholder="Enter Address" onChange={handleChange} value={values.address} style={{ borderColor: touched.address && errors.address ? "red" : null }} />
                                {touched.address && errors.address ? (
                                    <Col className="error-message">{errors.address}</Col>
                                ) : null}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="contactno">
                            <Form.Label column sm="4">Contact No:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="text" name="contactno" placeholder="Enter Contact Number" onChange={handleChange} value={values.contactno} style={{ borderColor: touched.contactno && errors.contactno ? "red" : null }} />
                                {touched.contactno && errors.contactno ? (
                                    <Col className="error-message">{errors.contactno}</Col>
                                ) : null}
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="password">
                            <Form.Label column sm="4">Password:</Form.Label>
                            <Col sm="8">
                                <Form.Control type="password" name="password" placeholder="Enter Password" onChange={handleChange} value={values.password} style={{ borderColor: touched.password && errors.password ? "red" : null }} />
                                {touched.password && errors.password ? (
                                    <Col className="error-message">{errors.password}</Col>
                                ) : null}
                            </Col>
                        </Form.Group>
                        <Button variant="outline-primary" size="sm" type="submit">Register</Button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>

    )
}

export default Registration