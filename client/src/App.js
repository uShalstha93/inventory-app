import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import NavBarLeft from './components/NavBarLeft/NavBarLeft';
import Category from './components/Pages/Category/Category';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Products from './components/Pages/Products/Products';
import Registration from './components/Form/Registration';
import Login from './components/Form/Login';
import './wrapper.css';
import Homepage from './components/Pages/Dashboard/Homepage';

const App = () => {

  return (

    // <Router>
    //   <Routes>
    //     <Route exact path='/' element={<Homepage />} />
    //     <Route path='/register' element={<Registration />} />
    //     <Route path='/login' element={<Login />} />
    //   </Routes>
    // </Router>
    <Router>
      <NavBar />
      <div className='wrapper'>
        <div className='row'>
          <div className="col-2 p-4" style={{ minWidth: "250px" }}>
            <NavBarLeft />
          </div>
          <div className="col-8 p-5" style={{ position: "relative", right: "50px" }}>
            <Routes>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route path='/category' element={<Category />} />
              <Route path='/products' element={<Products />} />
              <Route path='/customers' element={null} />
              <Route path='/orders' element={null} />
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>

  )
}

export default App