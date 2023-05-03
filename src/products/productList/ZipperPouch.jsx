import React from "react";
import "./ProductList.css";
import Zipperpouch from "../../assets/images/products/ProductList/Zipper-pouch.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const ZipperPouch = () => {
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
              <h2>Zipper pouch</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Zipperpouch} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Zipper pouch</h3>

            <p>
              Tamper Evidence and reseal ability, when combined together serve
              pouch for multipurpose applications with the ease of opening and
              dispensing. Various markets like Snacks, Namkeen, Dry fruits,
              pulses, cereals etc. requires such packaging that eliminates the
              use of glass or plastic containers.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Ease of dispensing the product.</li>
                <li>Most convenient & Simpler option</li>
                <li>Tamper Evident</li>
                <li>Better Aesthetic Appeal</li>
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

export default ZipperPouch;
