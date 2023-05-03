import React from 'react';
import "./Footer.css";
import footerlogo from "../../assets/images/logo/logo.png";


const Footer = () => {
  return (
    <section class="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img
                src={footerlogo}
                className="footer-logo mb-3"
                alt="Footer Logo"/>
              <p className="footer-email mb-1">info@s-group.org</p>
              <p className="footer-number">+91 0250 235 2100</p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6">
                  <p className="footer-links-title mb-4">About Us</p>
                  <ul className="footer-links m-0 p-0 d-flex flex-column align-items-start">
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>Contact us</li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <p className="footer-address-title mb-4">We Are Here!</p>
                  <ul className="footer-address m-0 p-0 d-flex flex-column align-items-start">
                    <span className="office">Office and Unit</span>
                    <p>
                      B- 146/147/68, Musalgaon M.I.D.C, Sinnar - Shirdi Road,
                      Sinnar, Nashik , Maharashtra - 422 113
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Copyright 2022 © <a href="index.html">SGROUP</a>. Design &amp;
            Developed by{" "}
            <a href="http://brighterbeetechnologies.com/" target="_blank">
              BBT
            </a>
          </p>
        </div>
        
      </section>
      
  )
}
export default Footer;
