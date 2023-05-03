import React from "react";
import "./ProductList.css";
import Centresealpouches from "../../assets/images/products/ProductList/Centre-seal-pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const CentreSealPouches = () => {
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
              <h2>Centre seal pouches</h2>
            </div>
          </div>
        </div>
      </div>

     
      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Centresealpouches} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Centre seal pouches</h3>

            <p>
              Ideal packaging for powders up to 10 Kilograms, solids and pastes
              up to 1 Kilogram in which the pouch is center sealed at the back
              side with an extra margin (say 20mm). Another flexible and
              cost-effective packaging solution with widespread capabilities are
              pillow pouches. The lay-flat pouches are perfect to fit almost any
              product.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Best suited for pulses, Atta, suji, Pharmaceutical, electrical appliances etc.</li>
                <li>Leakage proof from corners</li>
                <li>Best for packing the items with thickness</li>
                <li>Extended shelf- life.</li>
                <li>Tamper & water - proof</li>
                <li>Withstand both high & low variation in temperatures</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CentreSealPouches;
