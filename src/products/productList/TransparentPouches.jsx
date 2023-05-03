import React from "react";
import "./ProductList.css";
import Transparentpouches from "../../assets/images/products/ProductList/Transparent-pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const TransparentPouches = () => {
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
              <h2>Transparent pouches</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Transparentpouches} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Transparent pouches</h3>

            <p>
              New Start- Ups or entrepreneurs, sometimes require a test drive of
              their product into the market, requiring lesser quantities of
              pouches. Our aim is to encourage niche markets and support R&D for
              innovative products.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Clear Visibility of the product.</li>
                <li>Pocket- Friendly choice for Start- Ups.</li>
                <li>Stick your labels onto your pouch for brand recognition</li>
                <li>Optimized Cost</li>
                <li>Better Aesthetic Appeal</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TransparentPouches;
