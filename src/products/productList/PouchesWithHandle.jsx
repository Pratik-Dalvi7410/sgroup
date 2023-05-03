import React from "react";
import "./ProductList.css";
import PouchesHandle from "../../assets/images/products/ProductList/Pouches-with-handle.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const PouchesWithHandle = () => {
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
              <h2>Pouches with handle</h2>
            </div>
          </div>
        </div>
      </div>

      

      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={PouchesHandle} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Pouches with handle</h3>

            <p>
              Ease of convenience while handling the filled pouch is of utmost
              importance from customer's point of view. S-Group, leading
              manufacturer of pouches offers a variety of handling options such
              as Dori/Handle/Rivet/ Tear Notch/Zipper etc. for the ease of
              dispensing.
            </p>
            <p>
              Benefits:
              <ul>
                <li>Different formats of Pouch such as Stand up Pouch, Side Gusset Pouch, Three Side Seal, Center Seal Pouch etc.</li>
                <li>Size & Structure Availability</li>
                <li>Variety of handles</li>
                <li>Customized Printing</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PouchesWithHandle;
