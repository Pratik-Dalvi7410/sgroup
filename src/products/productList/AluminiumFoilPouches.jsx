import React from "react";
import "./ProductList.css";
import Aluminiumfoilpouches from "../../assets/images/products/ProductList/Aluminium-foil-pouches.jpg";
import video from "../../assets/Video/Network.mp4" 
import Footer from "../../components/footer/Footer";

const AluminiumFoilPouches = () => {
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
              <h2>Aluminium foil pouches</h2>
            </div>
          </div>
        </div>
      </div>
      
      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Aluminiumfoilpouches} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Aluminium foil pouches</h3>

            <p>
              The term Stand Up refers to “Packaging format”. The pouch stands
              by its own with the help of bottom gusset and exhibits reseal
              ability if zipper option is incorporated into it.
            </p>
            <p>
              Benefits:
              <ul>
                <li>User friendly & customized shapes.</li>
                <li>Display product & protect the contents</li>
                <li>Less storage space</li>
                <li>Light weight and better aesthetic appeal.</li>
                <li>High Oxygen & Moisture barrier properties</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AluminiumFoilPouches;
