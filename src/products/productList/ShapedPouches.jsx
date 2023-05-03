import React from "react";
import "./ProductList.css";
import Shapedpouches from "../../assets/images/products/ProductList/Shaped-pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const ShapedPouches = () => {
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
              <h2>Shaped pouches</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Shapedpouches} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Shaped pouches</h3>
            <p>
              Our shaped pouches can be shaped as per the design, brand or
              product requirement with effective fitment options & better
              quality print for markets like beverages, food, confectionery
              items etc. as per the end user requirements.
            </p>

            <p>
            Glimpse of the variety of shaped Pouches
            </p>

            <p>
            Benefits:
              <ul>
                <li>Reinforce your branding</li>
                <li>Zero leakage & puncture resistant</li>
                <li>Guaranteed way to stand out on retail shelves</li>
                <li>Best option for hot & cold beverages</li>
                <li>Convenient & easy to use.</li>
                <li>Stand up feature can enhance aesthetic appeal.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShapedPouches;
