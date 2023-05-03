import React from "react";
import "./ProductList.css";
import TransparentBOPP from "../../assets/images/products/ProductList/Transparent-BOPP.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const TransparentBopp = () => {
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
              <h2>Transparent BOPP</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={TransparentBOPP} alt="CardImage" />
            </div>
          </div>
          <div class="case-info">
            <h3>About Transparent BOPP</h3>
            <p>
              S-GROUP is manufacturing transparent BOPP Lable. We provide these
              in variety to successfully go closer in the way of meeting buyers
              diverse requirements. Our company as a manufacturer take into
              consideration present packaging requirements for coming up with
              solutions, highly perfect. Our range comprises Transparent BOPP
              Bags. We know responsibilities, undeniably call for focus, hence,
              we keep our major focus on maintaining the best quality in range.
              Our company well handles huge production needs by including modern
              technologies and tools in manufacturing. Innovative approach makes
              easier for us to give superior packaging solutions.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TransparentBopp;
