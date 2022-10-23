import React from 'react'
import { Form, Col, Row, Button } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../image/IMS-LOGINBACK.png'
import TitleImg from '../../image/MainBackground.png'

const Login = () => {

    document.title = `Sign In - Inventory`

    const navigate = useNavigate()

    const validateLoginSchema = Yup.object().shape({
        username: Yup.string()
            .required("* UserName is Required!")
            .min(5, "* Must be Greater 5 characters!")
            .max(15, "* Must be Less than 15 characters!"),
        password: Yup.string()
            .required("* Password is Required!")
    })

    return (

        <div className="registration-body" style={{ backgroundImage: `url(${LoginImg})`, backgroundRepeat: "no-repeat" }}>
            <div className="form-body p-4 rounded">
                <div className="text-center rounded shadow" style={{ background: "#5d5d74", color: "white", backgroundImage: `url(${TitleImg})` }}>
                    <h1 className="" style={{ position: "relative" }}>SIGN IN</h1>
                    <span>Welcome To Inventory Management System</span>
                </div>
                <Formik
                    initialValues={{ username: "", password: "" }}
                    validationSchema={validateLoginSchema}
                    onSubmit={(values, { setSubmitting, resetForm }) => {
                        setSubmitting(true);
                        setTimeout(() => {
                            // alert(JSON.stringify(values, null, 2));
                            const requestOptions = {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    userName: values.username,
                                    password: values.password
                                })
                            }
                            // console.log(requestOptions.body)
                            fetch("http://localhost:2000/login", requestOptions)
                                // .then(alert(`${values.username} - Login Successfully`))
                                .then((res) => res.json())
                                .then(result => {
                                    // alert(result.message)
                                    // const BrowserToken = localStorage.setItem("token", result._token)
                                    // BrowserToken !== undefined ? navigate('/') : alert(result.message)
                                    if (result._token) {
                                        localStorage.setItem("token", result._token)
                                        navigate('/')
                                    }
                                    else {
                                        alert(result.message)
                                    }
                                })
                                .then(resetForm())
                                .then(setSubmitting(false))
                            // categorySubmit();
                            // resetForm();
                            // setSubmitting(false);
                        }, 500);

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
                            <Form.Group className="mb-2">
                                <Form.Text style={{ position: "relative", left: "9rem" }}>Forget Password ?</Form.Text>
                            </Form.Group>
                            <Button variant="outline-primary" size="sm" type="submit" disabled={isSubmitting} style={{ position: "relative", left: "6.5rem", marginTop: "10px" }}>SIGN IN</Button>
                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem", right: "2rem" }}>
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