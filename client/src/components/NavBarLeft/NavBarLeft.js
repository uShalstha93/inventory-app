import React from 'react';
import { Link } from 'react-router-dom';

const NavBarLeft = () => {

    return (

        <div className='navLink container ml-2 position-fixed' style={{ fontSize: "20px", backgroundColor: "#e6e6e6"}}>
            <Link to="/">
                <p className="leftMenuLetter"><i className="bi bi-house-fill mr-2"></i> DASHBOARD</p>
            </Link>
            <Link to="/products">
                <p className="leftMenuLetter"><i className="bi bi-archive-fill mr-2"></i> PRODUCTS</p>
            </Link>
            <Link to="/purchase">
                <p className="leftMenuLetter"><i className="bi bi-cart-fill mr-2"></i> PURCHASE</p>
            </Link>
            <Link to="/sales">
                <p className="leftMenuLetter"><i className="bi bi-receipt mr-2"></i> SALES</p>
            </Link>
        </div>

    );
}

export default NavBarLeft;