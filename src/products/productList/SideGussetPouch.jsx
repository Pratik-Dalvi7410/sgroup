import React from "react";
import "./ProductList.css";
import Sidegussetpouch from "../../assets/images/products/ProductList/Side-gusset-pouch.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const SideGussetPouch = () => {
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
              <h2>Side gusset pouch</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Sidegussetpouch} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Side gusset pouch</h3>

            <p>
              Side Gusset feature has become the latest packaging trend that
              adds to the style and uniqueness of the product. S-Group has a
              great market for Side Gusset pouches that offers pouches in a wide
              range of sizes, shapes, color & structure.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Very innovative & Unique in appearance</li>
                <li>Ease of use & Less Space Requirement</li>
                <li>Extra strength with the help of bottom sealing</li>
                <li>Standing feature, adds to better shelf display.</li>
                <li>Best suited for snacks, bulk packaging etc.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SideGussetPouch;
