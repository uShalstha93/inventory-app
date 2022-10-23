import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import NavBarLeft from '../../NavBarLeft/NavBarLeft'
import DashboardIMG from '../../../image/DashboardIMG.jpg'
// import ToastExample from '../Users/Toast'

const Homepage = () => {

    const navigate = useNavigate()

    useEffect(() => {
        if (!localStorage.getItem("token")) {
            navigate('/login')
        }
    }, [])

    return (

        <>
            <NavBar />
            <div className="wrapper" style={{ backgroundImage: `url(${DashboardIMG})` }}>
                <div className='row'>
                    <div className="col-2 p-4" style={{ minWidth: "250px" }}>
                        <NavBarLeft />
                    </div>
                    <div className="col-8" style={{ position: "relative", paddingTop: "2.5rem" }}>
                        <Outlet />
                    </div>
                </div>
            </div>
            {/* <ToastExample /> */}
            <Footer />
        </>

    )
}

export default Homepage