import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const Login = () => {

    document.title = `Sign In - Inventory`

    const validateLoginSchema = Yup.object().shape({
        username: Yup.string()
            .required("* UserName is Required!")
            .min(5, "* Must be Greater 5 characters!")
            .max(15, "* Must be Less than 15 characters!"),
        password: Yup.string()
            .required("* Password is Required!")
    })

    return (

        <div className="registration-body">
            <div className="form-body p-4 rounded">
                <h1 className="text-center">SIGN IN</h1>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validateLoginSchema}
                    onSubmit={(values, { resetForm }) => {
                        console.log(values)
                    }}
                >
                    {({ values, errors, touched, handleChange, handleSubmit, isSubmitting }) => (
                        <Form onSubmit={handleSubmit} className="m-4">
                            <Form.Group as={Row} className="mb-3" controlId="username">
                                <Form.Label column sm="4">UserName:</Form.Label>
                                <Col sm="8">
                                    <Form.Control type="text" name="username" placeholder="UserName" onChange={handleChange} value={values.username} style={{ borderColor: touched.username && errors.username ? "red" : null }} />
                                    {touched.username && errors.username ? (
                                        <Col className="error-message">{errors.username}</Col>
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
                            <Button variant="outline-primary" size="sm" type="submit" style={{ position: "relative", left: "8rem", marginTop: "10px" }}>SIGN IN</Button>
                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem" }}>
                                Already Have Account ? <Link to="/register">REGISTER</Link>
                            </Form.Text>
                        </Form>
                    )}
                </Formik>
            </div>

        </div>

    )
}

export default Login