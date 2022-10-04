import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../image/mainLogo.png';

const NavBar = () => {

    const navstyle = {
        position: "fixed",
        width: "100%",
        top: "0",
        zIndex: "1",
        // backgroundColor: "orange",
    }

    const textStyle = {
        position: "relative",
        left: "50px",
        top: "-30px",
        height: "0px",
        fontWeight: "bold",
        fontSize: "20px",
    }

    const userStyle = {
        position: "relative",
        left: "1350px",
        top: "-30px",
        height: "0px",
        fontWeight: "bold",
    }

    return (

        <div className='row shadow rounded m-0 p-3 bg-white' style={navstyle}>
            <Link to="/"><img src={Logo} className="d-flex" alt="brand" width="35px" /></Link>
            <div style={textStyle}>Inventory Management System</div>
            <div style={userStyle}>UserName</div>
        </div>

    );
}

export default NavBar;