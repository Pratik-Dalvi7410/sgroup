import React from "react";
import "./ProductList.css";
import shrinkWrap from "../../assets/images/products/ProductList/Shrink-Wrap.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const ShrinkWrap = () => {
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
              <h2>Shrink Wrap</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={shrinkWrap} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Shrink Wrap</h3>

            <p>
              Our Shrink Packaging solutions deliver precise seals and accurate
              shrink wrapping for strong, attractive packages. Our solutions are
              available in manual, semi-automatic and automatic configurations
              depending on your production needs. Our systems offer easy,
              ergonomic product loading, quick film changeover and intuitive
              adjustments for sealing and wrapping.
            </p>
            <p>
              Shrink wrapping is an easy process that only requires two things
              that right kind of plastic wrap and heat. With just a roll of
              shrink wrap and a heating source, you can waterproof, weatherproof
              and tamperproof just about anything you have. Since there is no
              restriction on size to shrink wrap items, you have a way to
              protect even your bulkiest of items. But even this great packaging
              solution has a few potential hiccups.
            </p>
            <p>
              There are a wide variety of issues that can occur when shrink
              wrapping products using shrink film. In this post, we will walk
              through common shrink wrapping issues as well as solutions to
              them. Most of these issues are pretty common and easy to resolve
              by adjusting machine settings!
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ShrinkWrap;
