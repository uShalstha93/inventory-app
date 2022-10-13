import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import NavBarLeft from './components/NavBarLeft/NavBarLeft';
import Category from './components/Pages/Category/Category';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Products from './components/Pages/Products/Products';
// import DefaultForm from './components/Form/DefaultForm';
import './wrapper.css';

const App = () => {

  return (

    // <DefaultForm />
    <Router>
      <NavBar />
      <div className='wrapper'>
        <div className='row'>
          <div className="col-2 pr-0" style={{ minWidth: "200px" }}>
            <NavBarLeft />
          </div>
          <div className="col-8 pl-0">
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route path='/category' element={<Category />} />
              <Route path='/products' element={<Products />} />
              {/* <Route path='/purchase' element={} />
              <Route path='/sales' element={} /> */}
            </Routes>
          </div>
        </div>
      </div>
      <Footer />
    </Router>

  )
}

export default App