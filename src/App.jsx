import React, { useState } from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Cart from './components/Cart';
import PlaceOrder from './components/PlaceOrder';
import Footer from './components/Footer';
import LoginPopUp from './components/LoginPopUp';

function App() {
  const [showLoginIn,setShowLogin]=useState(false)
  return (
    <>
      <BrowserRouter>
        {showLoginIn ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
        <div className="app">
          <Navbar setShowLogin={setShowLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/order" element={<PlaceOrder />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App