import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/IMSLogoP.png';
import TitleImg from '../../image/MainBackground.png'
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';

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

    return (

        // <div className='row shadow rounded m-0 p-3' style={{ backgroundImage: `url(${TitleImg})`, position: "fixed", width: "100%", top: 0, zIndex: 1 }}>
        //     <Link to="/"><img src={Logo} className="d-flex" alt="brand" width="70px" /></Link>
        //     <div style={textStyle}>Inventory Management System</div>
        //     <div style={userStyle}>UserName</div>
        // </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top" style={{ backgroundImage: `url(${TitleImg})` }}>
            <Container>
                <Navbar.Brand>
                    <Link to="/dashboard">
                        <img src={Logo} className="d-inline-block" alt="brand" width="70px" />
                    </Link>
                    INVENTORY MANAGEMENT SYSTEM
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ position: "absolute", right: "70px" }}>
                        <NavDropdown title="userName" id="collasible-nav-dropdown">
                            <NavDropdown.Item>Profile</NavDropdown.Item>
                            <NavDropdown.Item>Change Password</NavDropdown.Item>
                            <NavDropdown.Item>Log Out</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;