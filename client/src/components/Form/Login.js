import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeCaptchaKey, changeFullName, changeToken } from './LoginSlice'
import { Form, Col, Row, Button, ToastContainer, Toast } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import LoginImg from '../../image/IMS-LOGINBACK.png'
import TitleImg from '../../image/MainBackground.png'
import ReCAPTCHA from "react-google-recaptcha"

const Login = () => {

    document.title = `Sign In - Inventory`

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const recaptchaRef = React.createRef()

    const [showAlert, setShowAlert] = useState(false)
    const [alertMsg, setAlertMsg] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    const [captchakey, setCaptchaKey] = useState("")
    const [validateCaptcha, setValidateCaptcha] = useState(false)

    // console.log(process.env.REACT_APP_SITE_KEY)

    const recaptchaChange = (token) => {
        try {
            if (token) {
                setValidateCaptcha(true)
                setCaptchaKey(token)
                // console.log("true token", token)
            }
            else {
                setValidateCaptcha(false)
                alert("You are not HUMAN !!")
                // console.log("false token", token)
            }
        }
        catch (error) {
            console.log(error.message)
        }
    }

    //show password

    const togglePassword = () => {
        setShowPassword(prevState => !prevState)
    }

    // Form Validation

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
                    onSubmit={(values, { resetForm }) => {
                        // setSubmitting(true);
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

                            // compare username and password from backend

                            fetch("http://localhost:2000/login", requestOptions)
                                // .then(alert(`${values.username} - Login Successfully`))
                                .then((res) => res.json())
                                .then(result => {
                                    // alert(result.message)
                                    // const BrowserToken = localStorage.setItem("token", result._token)
                                    // BrowserToken !== undefined ? navigate('/') : alert(result.message)
                                    if (result._token) {
                                        localStorage.setItem("token", result._token)
                                        localStorage.setItem("fullName", result.fullName)
                                        localStorage.setItem("captchaKey", captchakey)
                                        // console.log(result.fullName,result._token)
                                        dispatch(changeFullName(result.fullName))
                                        dispatch(changeToken(result._token))
                                        dispatch(changeCaptchaKey(captchakey))
                                        navigate('/dashboard')
                                    }
                                    else {
                                        setShowAlert(true)
                                        setAlertMsg(result.message)
                                        setValidateCaptcha(false)
                                    }
                                })
                                .then(resetForm())
                                .then(recaptchaRef.current.reset())
                            // .then(setSubmitting(false))
                            // categorySubmit();
                            // resetForm();
                            // setSubmitting(false);
                        }, 500);

                    }}
                >

                    {({ values, errors, touched, handleChange, handleSubmit }) => (

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
                                    <Form.Control type={showPassword ? "text" : "password"} name="password" placeholder="Enter Password" onChange={handleChange} value={values.password} style={{ borderColor: touched.password && errors.password ? "red" : null }} />
                                    <Button style={{ backgroundColor: "white", borderColor: "white", position: "relative", left: "9.5rem", top: "-2.2rem", padding: "0.2rem" }} onClick={togglePassword}>
                                        {
                                            showPassword ? <i className="bi bi-eye-slash" style={{ position: "relative", color: "black" }} /> : <i className="bi bi-eye" style={{ position: "relative", color: "black" }} />
                                        }
                                    </Button>
                                    {touched.password && errors.password ? (
                                        <Col className="error-message" style={{ marginTop: "-2rem" }}>{errors.password}</Col>
                                    ) : null}
                                </Col>

                            </Form.Group>

                            <Form.Group className="mb-2">

                                <ReCAPTCHA
                                    ref={recaptchaRef}
                                    name="recaptcha"
                                    id="recaptcha"
                                    sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                    size="normal"
                                    onChange={recaptchaChange}
                                    onExpired={() => {
                                        recaptchaRef.current.reset()
                                    }}
                                />

                            </Form.Group>

                            <Form.Group className="mb-2">

                                <Form.Text style={{ position: "relative", left: "9rem" }}>Forget Password ?</Form.Text>

                            </Form.Group>

                            <Button variant="outline-primary" size="sm" type="submit" disabled={!validateCaptcha} style={{ position: "relative", left: "6.5rem", marginTop: "10px" }}>SIGN IN</Button>

                            <Form.Text className="text-muted" style={{ position: "relative", top: "2.5rem", right: "2rem" }}>
                                Already Have Account ? <Link to="/register">REGISTER</Link>
                            </Form.Text>

                        </Form>

                    )}

                </Formik>

            </div>

            {/* Message Alert Starts */}

            <ToastContainer position="center" className="p-3">
                <Toast onClose={() => setShowAlert(false)} show={showAlert} delay={5000} style={{ fontSize: "15px" }} autohide>
                    <Toast.Header style={{ background: "red", color: "black" }}>
                        <strong className="me-auto">LOG IN</strong>
                    </Toast.Header>
                    <Toast.Body>{alertMsg}</Toast.Body>
                </Toast>
            </ToastContainer>

            {/* Message Alert Ends */}

        </div>

    )
}

export default Login