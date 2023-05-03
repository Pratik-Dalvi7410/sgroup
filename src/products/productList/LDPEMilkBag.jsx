import React from "react";
import "./ProductList.css";
import LDPEMilk from "../../assets/images/products/ProductList/LDPE-Milk-Bag.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const LDPEMilkBag = () => {
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
              <h2>LDPE Milk Bag</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <div className="one-img">
              <img src={LDPEMilk} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About LDPE Milk Bag</h3>

            <p>
              Manufactured from 3 Layer LDPE film with high-quality multi-colour
              printing. Extra attachments of side Gusset bottom sealing, open
              flap with wicket hold punch (6mm and 8mm) along with bottom gusset
              with multiple flap bag making facilities. We offer LDPE water
              pouch film rolls, stretch film, milk packaging film, flexible
              packaging film, laminated packaging film and water packaging film.
            </p>
            <p>
              Our highly durable Milk bag is highly acknowledged in the national
              markets. Dairy Milk bag offered by us is available in various
              sizes and dimensions to meet the demands of the clients. Ideal for
              storing the milk, Eco friendly in nature, our Dairy Milk.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default LDPEMilkBag;
