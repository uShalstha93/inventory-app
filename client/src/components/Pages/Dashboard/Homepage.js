import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import NavBarLeft from '../../NavBarLeft/NavBarLeft'
import DashboardIMG from '../../../image/DashboardIMG.jpg'

const Homepage = () => {

    return (

        <>
            <NavBar />
            <div className="wrapper" style={{ backgroundImage: `url(${DashboardIMG})`}}>
                <div className='row'>
                    <div className="col-2 p-4" style={{ minWidth: "250px" }}>
                        <NavBarLeft />
                    </div>
                    <div className="col-8" style={{ position: "relative", paddingTop: "2.5rem" }}>
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Homepage