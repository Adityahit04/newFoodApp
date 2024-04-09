import React, { useState } from 'react'
import './LoginPopUp.css'
import { assets } from "../assets/assets";

function LoginPopUp({setShowLogin}) {
    const [currentState, setCurrentState] = useState("Sign Up");
  return (
    <>
      <div className="loginPopup">
        <form className="loginpopupcontainer">
          <div className="title">
            <h2>{currentState}</h2>
            <img
              onClick={() => setShowLogin(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <div className="loginpopupinput">
            {currentState === "Login" ? (
              <></>
            ) : (
              <input type="text" placeholder="Your Name" required />
            )}

            <input type="email" placeholder="Your email" required />
            <input type="password" placeholder="Password" required />
          </div>
          <button>
            {currentState === "Sign Up" ? "create account" : "Login "}
          </button>
          <div className="loginpopCond">
            <input type="checkbox" required />
            <p>By cotainung, i agree to the terms & privacy policy</p>
          </div>
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign up")}>Click here</span>
            </p>
          ) : (
            <p>
              Already have an acoount?
              <span onClick={() => setCurrentState("Login")}>Login Here</span>
            </p>
          )}
        </form>
      </div>
    </>
  );
}

export default LoginPopUp