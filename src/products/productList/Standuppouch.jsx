import React from "react";
import "./ProductList.css";
import StandUpPouch from "../../assets/images/products/ProductList/Stand-up-pouch.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const Standuppouch = () => {
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
              <h2>Stand up pouch</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={StandUpPouch} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Stand up pouch</h3>
            <p>
              The term Stand Up refers to Packaging format. These pouches stand
              on their own with the help of the bottom gusset and exhibit reseal
              ability and reusability if the zipper option is available. The
              ability of Stand Up Pouches to stand firmly allows them to occupy
              minimum shelf space in supermarkets; making them an advanced
              replacement for conventional bag-in-box packaging.
            </p>

            <p>
              Our Stand Up Pouches are available in different sizes, shapes, and
              color variants ranging from matte, shiny to gloss. These are ideal
              for packaging a variety of products ranging from edibles to pharma
              products.
            </p>

            <p>
            Benefits:
              <ul>
                <li>High oxygen and moisture barrier properties</li>
                <li>Lightweight and portable</li>
                <li>Less storage space</li>
                <li>Complete protection of contents</li>
                <li>User-friendly packaging material</li>
                <li>Customized shapes and sizes</li>
              </ul>
            </p>

          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Standuppouch;
