import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../image/IMSLogoP.png';
import TitleImg from '../../image/MainBackground.png'
import { Nav, Container, Navbar, NavDropdown, Button } from 'react-bootstrap';

const NavBar = () => {

    // const textStyle = {
    //     position: "relative",
    //     left: "80px",
    //     top: "-37px",
    //     height: "0px",
    //     fontWeight: "bold",
    //     fontSize: "30px",
    //     color: "white",
    //     fontFamily: "serif"
    // }

    // const userStyle = {
    //     position: "relative",
    //     left: "1350px",
    //     top: "-30px",
    //     height: "0px",
    //     fontWeight: "bold",
    //     color: "white"
    // }

    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem("token")
        navigate('/login')
    }

    return (

        // <div className='row shadow rounded m-0 p-3' style={{ backgroundImage: `url(${TitleImg})`, position: "fixed", width: "100%", top: 0, zIndex: 1 }}>
        //     <Link to="/"><img src={Logo} className="d-flex" alt="brand" width="70px" /></Link>
        //     <div style={textStyle}>Inventory Management System</div>
        //     <div style={userStyle}>UserName</div>
        // </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ fontFamily: "serif", backgroundImage: `url(${TitleImg})` }}>
            <Container>
                <Navbar.Brand as={Link} to='/dashboard'>
                    <img src={Logo} className="d-inline-block" alt="brand" width="70px" />
                    INVENTORY MANAGEMENT SYSTEM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavDropdown title="UserName" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Change Password</NavDropdown.Item>
                            <NavDropdown.Item as={Button} variant="light" onClick={logout}>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;