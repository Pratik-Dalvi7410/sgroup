import React from "react";
import "./ProductList.css";
import Corrugated from "../../assets/images/products/ProductList/Corrugated-box.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const Corrugatedbox = () => {
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
              <img src={Corrugated} alt="CardImage" />
            </div>
          </div>

          <div class="case-info">
            <h3>About Corrugated box</h3>

            <p>
              Manufactured from 3 Layer LDPE film with high-quality multi-colour
              printing. Extra attachments of side Gusset bottom sealing, open
              flap with wicket hold punch (6mm and 8mm) along with bottom gusset
              with multiple flap bag making facilities. We offer LDPE water
              pouch film rolls, stretch film, milk packaging film, flexible
              packaging film, laminated packaging film and water packaging film.
            </p>
            <p>
              We are Manufacturer, Supplier, Exporter of Corrugated Boxes,
              Packaging Solutions. Our setup is based in Nashik, Maharashtra,
              India. Some of advantages of corrugated boxes are:
              <ul>
                <li>Corrugated boxes are widely accepted and used packaging material in world, the corrugated boxes are available in different dimensions and specifications.</li>
                <li>Following factors are considered during box manufacturing</li>
                <li>Product dimensions</li>
                <li>Product weight</li>
                <li>Total products to be packed in one box</li>
                <li>Mode of shipping</li>
                <li>Product type (fragile, edible, electronic, etc.)</li>
                <li>Storage methods (cold storage, normal, etc.)</li>
                <li>Product shelf life</li>
              </ul>
              <p>We have all type of Corrugated Boxes like 3 ply, 5 ply, 7 ply, 9 ply.</p>
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Corrugatedbox;
