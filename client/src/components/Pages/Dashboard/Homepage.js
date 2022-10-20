import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import NavBar from '../../NavBar/NavBar'
import NavBarLeft from '../../NavBarLeft/NavBarLeft'
import Category from '../Category/Category'
import Dashboard from './Dashboard'

const Homepage = () => {

    return (

        <>
            {/* <NavBar /> */}
            <div className="wrapper">
                <div className='row'>
                    <div className="col-2 p-4" style={{ minWidth: "250px" }}>
                        <NavBarLeft />
                    </div>
                    <div className="col-8 p-5" style={{ position: "relative", right: "50px" }}>
                        <Routes>
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/category' element={<Category />} />
                        </Routes>
                    </div>
                </div>
            </div>
            <Footer />
        </>

    )
}

export default Homepage