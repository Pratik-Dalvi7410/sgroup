import React from "react";
import "./ProductList.css";
import Spoutpouch from "../../assets/images/products/ProductList/Spout-pouch.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const SpoutPouch = () => {
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
              <h2>Spout pouch</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Spoutpouch} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Spout pouch</h3>

            <p>
              Spout Pouches are ideal for packing liquid products. These pouches
              prevent leakage and are puncture-resistant. Our Unique Selling
              Proposition lies in manufacturing sturdy and lightweight spout
              pouches. These are comparatively better than the conventional
              Bottle-packaging as these are portable and are not fragile.
            </p>
            <p>
              Our Spout Pouches come with a pour spout for an easy-filling
              process ensuring that they pass the drop test without leakage. S
              Group is a leading Spout Pouch manufacturer offering supreme
              packaging solutions.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Optimized Cost</li>
                <li>Easily Pourable</li>
                <li>Convenient than Rigid Packaging</li>
                <li>Improved Aesthetic Appeal</li>
                <li>Ideal for Liquid Products</li>
                <li>Consumer can pack it after use.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SpoutPouch;
