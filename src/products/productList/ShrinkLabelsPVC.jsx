import React from "react";
import "./ProductList.css";
import shrinklabels from "../../assets/images/products/ProductList/shrink-labels.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const ShrinkLabelsPVC = () => {
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
              <h2>Shrink Labels (PVC)</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={shrinklabels} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Shrink Labels (PVC)</h3>
            <p>
              Shrink labelling is amongst the most advanced and versatile form
              of labelling the world over. High quality of heat shrink labels
              which are graced with brilliant colors & fine printing are
              suitable for all kinds of packing. Proud of multiple features,
              these can enhance the appearance and increase the value of the
              packed products, and can also resist dampness, dust and, what's
              more, it can prevent counterfeiting. It is insured that this label
              is perfect to protect the quality of the products packed with it.
              Attractive shrink labels can be shrink on to most contours of
              varied container substrates including glass, PET, Plastic,
              composite cans, tin cans etc.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShrinkLabelsPVC;
