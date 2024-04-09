import React from 'react'
import './Footer.css'
import { assets } from '../assets/assets';


function Footer() {
  return (
    <>
      <div className="footer" id="footer">
        <div className="footerContent">
          <div className="footerleft">
            <img src={assets.logo} alt="" />
            <p>
              The Tomato app is a revolutionary platform that has transformed
              the way people discover and experience food. With its intuitive
              interface and extensive database of restaurants, cuisines, and
              reviews, Tomato empowers users to explore a diverse culinary
              landscape like never before. Whether searching for a cozy café for
              a morning coffee, a trendy eatery for a night out, or a hidden gem
              serving authentic cuisine, the app provides comprehensive
              information and user-generated reviews to aid in decision-making.
              Beyond its search functionality.
            </p>
            <div className="footerSocailIcons">
              <a href="https://www.linkedin.com/in/aditya-singh-1b42612b1">
                <img src={assets.linkedin_icon} alt="linkdin" />
              </a>
              <a href="https://www.instagram.com/adityathakur04?igsh=MXZwbDIya2V5OW56ZA==">
                {" "}
                <img src={assets.facebook_icon} alt="fb" />
              </a>

              <a href="https://x.com/Adityasingh0401?t=Yaxu79s8sKNFD2fJtD53iA&s=09">
                <img src={assets.twitter_icon} alt="x" />
              </a>
            </div>
          </div>
          <div className="footerCenter">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Delivey</li>
              <li>Policy</li>
            </ul>
          </div>
          <div className="footerRight">
            <h2>GET IN TOUCH</h2>
            <ul>
              <li>9760101554</li>
              <li>Aditya444401@gmail.com</li>
            </ul>
          </div>
        </div>
        <hr />
        <p className="copyright">Copyright 2024 @online site.com /Mohan</p>
      </div>
    </>
  );
}

export default Footer