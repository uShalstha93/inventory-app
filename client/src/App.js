import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from './components/Pages/Category/Category';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Products from './components/Pages/Products/Products';
import Registration from './components/Form/Registration';
import Login from './components/Form/Login';
import './wrapper.css';
import Homepage from './components/Pages/Dashboard/Homepage';
import Toast from '../src/components/Pages/Users/Toast'

const App = () => {

  return (

    // <Toast />

    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='category' element={<Category />} />
          <Route path='products' element={<Products />} />
          <Route path='customers' element={null} />
          <Route path='orders' element={null} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
      </Routes>
    </Router>
    
  )
}

export default App