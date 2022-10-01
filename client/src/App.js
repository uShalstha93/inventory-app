import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import NavBarLeft from './components/NavBarLeft/NavBarLeft';
import './wrapper.css';

const App = () => {

  return (

    <Router>
      <NavBar />
      <div className='wrapper'>
        <div className='row'>
          <div className="col-2 pr-0" style={{ minWidth: "200px" }}>
            <NavBarLeft />
          </div>
        </div>
      </div>
      <Footer />
    </Router>

  )
}

export default App