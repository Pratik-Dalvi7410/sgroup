import React from "react";
import "./ProductList.css";
import Paperpouches from "../../assets/images/products/ProductList/Paper-pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const PaperPouches = () => {
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
              <h2>Paper pouches</h2>
            </div>
          </div>
        </div>
      </div>

      

      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Paperpouches} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Paper pouches</h3>

            <p>
              Highly acknowledged for their surface finish, S Group's paper
              pouches inhibits high strength, tamper resistant nature and leak
              proof design in an assortment of Sizes, Shapes & structures.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Best suited for food products, pharmaceutical items etc.</li>
                <li>Optimized Cost</li>
                <li>Eco- Friendly, as comparison to Plastic Pouches</li>
                <li>Better aesthetic appeal & Superior Quality</li>
                <li>Innovation In the field of packaging</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PaperPouches;
