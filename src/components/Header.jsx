import React from 'react'
import './Header.css'
import {assets} from '../assets/assets'

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="img">
          <img className="headerImg" src={assets.header_img} alt="main photo" />
        </div>
        <div className="headerContent">
          <h2>Order your favourite food here</h2>

          <p>
            Choose from a diverse menu feature a delectable array of dishes with
            the finest ingredients and expertise.Our mission is to satisfy your
            cravings and elevate your dining experience, one delicious meal at a
            time.
          </p>
          <button>View Menu</button>
        </div>
      </div>
    </>
  );
}
