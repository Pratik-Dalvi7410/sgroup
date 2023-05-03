import React from "react";
import "./ProductList.css";
import PearlizedBOPP from "../../assets/images/products/ProductList/Pearlized-BOPP.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const PearlizedBopp = () => {
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
              <h2>Pearlized BOPP</h2>
            </div>
          </div>
        </div>
      </div>

      
      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
          <div className="one-img">
              <img src={PearlizedBOPP} alt="CardImage" />
            </div>
          </div>
          <div class="case-info">
            <h3>About Pearlized BOPP</h3>
            <p>
              One of the most preferred polymers in food packaging and in
              printing application is polypropylene due to its excellent
              properties like high-temperature resistance, low moisture
              resistance, and high stiffness. To improve mechanical properties,
              this film is stretched in both directions and across machine to
              form biaxially oriented polypropylene films (BOPP film).
            </p>
            <p>
              The global Pearlized BOPP film market is expected to grow
              alongside the increasing demand for surface printing. Having
              excellent strength, heat sealable properties of pearlized BOPP
              films makes it an ideal flexible packaging solution. In addition,
              pearlized BOPP film has better visual appeal when printed with
              translucent inks, the metallic effect can be obtained which makes
              packaging of the product attractive.
            </p>

            <p>
              Globally, the pearlized BOPP film Market is segmented on the basis
              of thickness and end use which is further segmented as:
            </p>

            <p>
              On the basis of thickness, the pearlized BOPP film Market is
              segmented as:
              <ul>
                <li>Less than 10 micron</li>
                <li>10-30 micron</li>
                <li>30-50 micron</li>
                <li>50 micron and above</li>
              </ul>
            </p>
            <p>
              On the basis of end use, the pearlized BOPP film market is
              segmented as:
              <ul>
                <li>Food</li>
                <li>Frozen food</li>
                <li>Bakery</li>
                <li>Confectionery</li>
                <li>PET food</li>
                <li>Household products</li>
                <li>Consumer Goods</li>
                <li>Personal care and Cosmetics</li>
              </ul>
            </p>
            <p>
              S Group takes single-source responsibility for your BOPP, from
              concept to grid distortion testing to commercialization, so you
              can rest assured that your BOPP will look exactly as intended on
              the shelf.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PearlizedBopp;
