import React from 'react';
import { Link } from 'react-router-dom';
// import NavleftImg from '../../image/NavbarBackground.png'

const NavBarLeft = () => {

    return (

        <div className='navLink container p-4 rounded' style={{ fontSize: "20px" }}>

            <Link to="/dashboard">
                <p><i className="bi bi-house-fill mr-2"></i> DASHBOARD</p>
            </Link>

            <Link to="/category">
                <p><i className="bi bi-tags-fill mr-2"></i> CATEGORY</p>
            </Link>

            <Link to="/products">
                <p><i className="bi bi-archive-fill mr-2"></i> PRODUCTS</p>
            </Link>

            <Link to="/customers">
                <p><i className="bi bi-person-fill mr-2"></i> CUSTOMERS</p>
            </Link>

            <Link to="/orders">
                <p><i className="bi bi-receipt mr-2"></i> ORDERS</p>
            </Link>

            <Link to="/users">
                <p><i className='bi bi-people-fill mr-2'></i> USERS</p>
            </Link>
            
        </div>

    );
}

export default NavBarLeft;