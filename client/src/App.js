import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Category from './components/Pages/Category/Category';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Products from './components/Pages/Products/Products';
import Registration from './components/Form/Registration';
import Login from './components/Form/Login';
import './wrapper.css';
import Homepage from './components/Pages/Dashboard/Homepage';
import Customers from './components/Pages/Customers/Customers';
import Order from './components/Pages/Orders/Order';
import Users from './components/Pages/Users/User';
// import Toast from '../src/components/Pages/Users/Toast'

const App = () => {

  return (

    // <Toast />

    <Router>
      <Routes>
        <Route exact path='/' element={<Homepage />} >
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='category' element={<Category />} />
          <Route path='products' element={<Products />} />
          <Route path='customers' element={<Customers />} />
          <Route path='orders' element={<Order />} />
          <Route path='users' element={<Users />} />
        </Route>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Registration />} />
        <Route path='*' element={<h1 style={{ alignItems: "center", justifyContent: "center", textAlign: "center", position: "relative", top: "15rem" }}>Page Not Found !</h1>} />
      </Routes>
    </Router>
    
  )
}

export default App