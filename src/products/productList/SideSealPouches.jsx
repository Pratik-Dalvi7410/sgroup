import React from "react";
import "./ProductList.css";
import sideseal from "../../assets/images/products/ProductList/side-seal-pouches.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const SideSealPouches = () => {
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
              <h2>3 side seal pouches</h2>
            </div>
          </div>
        </div>
      </div>

  
      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={sideseal} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About 3 side seal pouches</h3>
            <p>
              As the name suggests, the pouches that are sealed from the three
              sides and one side is kept open; and is heat sealed after the
              product is filled into it. These pouches serve a great purpose in
              different segments such as snacks, confectionery, pharmaceuticals
              & other markets.
            </p>
            <p>
            Benefits:
              <ul>
                <li>Ease of dispensing the product</li>
                <li>User Friendly & Space convenient</li>
                <li>Tear Notch availability for easy tearing</li>
                <li>Pocket Friendly choice for Start-ups</li>
                <li>Most convenient & simpler option.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SideSealPouches;
