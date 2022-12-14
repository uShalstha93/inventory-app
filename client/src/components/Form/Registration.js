import React, { useState } from 'react'
import { Form, Col, Row, Button, ToastContainer, Toast } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import RegisterImg from '../../image/IMS-LOGINBACK.png'
import TitleImg from '../../image/MainBackground.png'
// import '../../../wrapper.css'

const Registration = () => {

    document.title = `Register - Inventory`

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")

    const validateRegisterSchema = Yup.object().shape({
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
            // .max(11, "* Contact Number Must be Equal to 10 numbers!")
            .positive("* Must be positive number!")
            .integer("* Must be integer Value!"),
        email: Yup.string().email()
            .required(" * Email is Required!"),
        password: Yup.string()
            .required("* Password is Required!")
    })

    return (

        <div className="registration-body" style={{ backgroundImage: `url(${RegisterImg})` }}>
            <div className="form-body p-4 shadow rounded">
                <div className="text-center rounded shadow" style={{ background: "#5d5d74", color: "white", marginBottom: "-20px", backgroundImage: `url(${TitleImg})` }}>
                    <h1 className="" style={{ position: "relative" }}>SIGN UP NOW</h1>
                    <span>Welcome To Inventory Management System</span>
                </div>
                <Formik
                    initialValues={{ username: "", fullname: "", address: "", contactno: "", email: "", password: "" }}
                    validationSchema={validateRegisterSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userName: values.username,
                                    fullName: values.fullname,
                                    address: values.address,
                                    contactno: values.contactno,
                                    email: values.email,
                                    password: values.password
                                })
                            }
                            console.log(requestOptions.body)
                            fetch("http://localhost:2000/register", requestOptions)
                                // .then(alert(`${values.fullname} - Added Successfully`))
                                .then((res) => res.json())
                                .then(result => {
                                    setAlertMsg(result.message)
                                })
                                .then(setShowAlert(true))
                                .then(resetForm())
                                .then(setSubmitting(false))
                            // categorySubmit();
                            // resetForm();
                            // setSubmitting(false);
                        }, 500);

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
                            <Form.Group as={Row} className="mb-3" controlId="email">
                                <Form.Label column sm="4">Email:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name="email" placeholder="Enter Email" onChange={handleChange} value={values.email} style={{ borderColor: touched.email && errors.email ? "red" : null }} />
                                    {touched.email && errors.email ? (
                                        <Col className="error-message">{errors.email}</Col>
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
                            <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting} style={{ position: "relative", left: "6.5rem", marginTop: "10px" }}>SIGN UP</Button>
                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem", right: "1rem" }}>
                                Already Have Account ? <Link to="/login">SIGN IN</Link>
                            </Form.Text>
                        </Form>
                    )}
                </Formik>
            </div>
            <ToastContainer position="center" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={9000} style={{ fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "#6dcf6d", color: "black" }}>
                        <strong className="me-auto">REGISTRATION</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>

    )
}

export default Registration