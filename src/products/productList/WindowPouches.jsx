import React from "react";
import "./ProductList.css";
import WindowPouche from "../../assets/images/products/ProductList/Window-Pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const WindowPouches = () => {
  return (
    <>
      <div className="page-header">
        <video className="bg-video" autoPlay muted loop={true} controls={false} >
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay-bg"></div>
        <div className="container">
          <div className="page-header-item d-flex align-items-center justify-content-center">
            <div className="post-content">
              <h2>Window pouches</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={WindowPouche} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Window pouches</h3>

            <p>
              Product visibility enhances the brand image and creates a tempting
              sensation for the customer. The window feature enables to show off
              your product while maintaining the freshness, aroma & flavor
              intact inside the packaged pouch.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Best suited for Snacks, Namkeen, Dry fruits etc.</li>
                <li>Seeks consumer attention & reinforce your brand.</li>
                <li>One of the best displaying packaging option.</li>
                <li>Increase your turnover by reaching potential customers.</li>
                <li>Clear see through from the pouch into the product.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default WindowPouches;
