import React from "react";
import "./ProductList.css";
import Kraftpouch from "../../assets/images/products/ProductList/Kraft-pouch.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const KraftPouch = () => {
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
              <h2>Kraft pouch</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={Kraftpouch} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Kraft pouch</h3>
            <p>
              AKraft Paper Pouches are flexible packaging materials made from
              recycled craft paper lined with aluminum foil on the inside. To
              fit different requirements, these pouches are available in varying
              formats, shapes, and sizes. To keep the contents of the package
              moisture-free, these packages are generally laminated with
              aluminum foil. With the moisture-block properties, these are ideal
              for products ranging from edibles to pharmaceuticals.
            </p>

            <p>
              We offer versatility in flexible packaging products. To ensure the
              same, we offer Kraft Paper Pouches in various structures and
              sizes.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Portable and Lightweight</li>
                <li>Maximum Usage</li>
                <li>Agro-based with high burst and tensile strength</li>
                <li>Eco-friendly Alternative (Better than Plastic)</li>
                <li>Cost-Effective</li>
                <li>Durable and Strong</li>
                <li>Better Quality</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default KraftPouch;
