import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import search from "../assets/search_icon.png";
import basket from "../assets/basket_icon.png";
import {Link} from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext';


function Navbar({ setShowLogin }) {
  const [menu, setmenu] = useState("home");
  const {cartTotal}=useContext(StoreContext)
  return (
    <>
      <div className="navbar">
        <Link to={"/"}>
          <img src={logo} alt="" className="logo" />
        </Link>

        <ul className="navMenu">
          <Link
            to="/"
            onClick={() => setmenu("home")}
            className={menu === "home" ? "active" : ""}
          >
            Home
          </Link>
          <a
            href="#menu"
            onClick={() => setmenu("menu")}
            className={menu === "menu" ? "active" : ""}
          >
            Menu
          </a>
          <a
            href="#footer"
            onClick={() => setmenu("contact")}
            className={menu === "contact" ? "active" : ""}
          >
            Contact Us
          </a>
        </ul>
        <div className="navRight">
          <img src={search} alt="" className="searchIconImg" />
          <div className="basketImg">
            <Link to="/cart">
              <img src={basket} alt="" className="basket" />
            </Link>

            <div className={cartTotal()===0?'':'dot'}></div>
          </div>
          <button className="btn" onClick={() => setShowLogin(true)}>
            Sign Up
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar