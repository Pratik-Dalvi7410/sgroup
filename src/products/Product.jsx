import React from "react";
import "./Product.css";
import packaging from "../assets/images/products/packaging-films.jpg";
import tubing from "../assets/images/products/tubing-films.jpg";
import busbar from "../assets/images/products/busbar.jpg";
import shrink from "../assets/images/products/shrink-labels.jpg";
import petcast from "../assets/images/products/petcast-shrink-labels.jpg";
import Plain from "../assets/images/products/Plain-and-printed-pouches.jpg";
import Pearlized from "../assets/images/products/Pearlized-BOPP.jpg";
import Transparent from "../assets/images/products/Transparent-BOPP.jpg";
import Self from "../assets/images/products/Self-Adhesive-Label.jpg";
import StandUp from "../assets/images/products/Stand-up-pouch.jpg";
import Shaped from "../assets/images/products/Shaped-pouches.jpg";
import pouches from "../assets/images/products/pouches.jpg";
import Kraft from "../assets/images/products/Kraft-pouch.jpg";
import Pouches from "../assets/images/products/Pouches-with-handle.jpg";
import Spout from "../assets/images/products/Spout-pouch.jpg";
import Window from "../assets/images/products/Window-pouches.jpg";
import Centre from "../assets/images/products/Centre-seal-pouches.jpg";
import Aluminium from "../assets/images/products/Aluminium-foil-pouches.jpg";
import Paper from "../assets/images/products/Paper-pouches.jpg";
import Sidegusset from "../assets/images/products/Side-gusset-pouch.jpg";
import Zipper from "../assets/images/products/Zipper-pouch.jpg";
import TransparentPouches from "../assets/images/products/Transparent-pouches.jpg";
import ShrinkWrap from "../assets/images/products/Shrink-Wrap.jpg";
import LDPEMilk from "../assets/images/products/LDPE-Milk-Bag.jpg";
import Corrugated from "../assets/images/products/Corrugated-box.jpg";
import video from "../assets/Video/Network.mp4";
import Footer from "../components/footer/Footer";

const Product = () => {
  return (
    <>
      <div className="page-header">
        <video className="bg-video" autoPlay muted loop={true} controls={false}>
          <source src={video} type="video/mp4" />
        </video>
        <div className="video-overlay-bg"></div>
        <div className="container">
          <div className="page-header-item d-flex align-items-center justify-content-center">
            <div className="post-content">
              <h2> Products </h2>
            </div>
          </div>
        </div>
      </div>

      {/* products-list-area */}

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 className="main-product-title mb-4">PVC Shrink Film</h3>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${packaging})`,
                }}
              >
                <p className="product-card-title">Packaging Films</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${tubing})`,
                }}
              >
                <p className="product-card-title">Tubing Films</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${busbar})`,
                }}
              >
                <p className="product-card-title">Busbar</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">
            Labels &nbsp; | &nbsp; <span>PVC Shrink Labels</span>
          </h3>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${shrink})`,
                }}
              >
                <p className="product-card-title">Shrink Labels (PVC)</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${petcast})`,
                }}
              >
                <p className="product-card-title"> Pet Shrink Labels</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Plain})`,
                }}
              >
                <p className="product-card-title">Plain and printed pouches</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">
            Labels &nbsp; | &nbsp; <span>BOPP Labels</span>
          </h3>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Pearlized})`,
                }}
              >
                <p className="product-card-title">Pearlized BOPP</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div
                className="product-card "
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Transparent})`,
                }}
              >
                <p className="product-card-title">Transparent BOPP</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">Labels </h3>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Self})`,
                }}
              >
                <p className="product-card-title">Self Adhesive Label</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">LAMINATES</h3>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${StandUp})`,
                }}
              >
                <p className="product-card-title">Stand up pouch</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Shaped})`,
                }}
              >
                <p className="product-card-title">Shaped pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${pouches})`,
                }}
              >
                <p className="product-card-title">3 side seal pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Kraft})`,
                }}
              >
                <p className="product-card-title">Kraft paper pouch</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Pouches})`,
                }}
              >
                <p className="product-card-title">Pouch with handle</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Spout})`,
                }}
              >
                <p className="product-card-title">Spout pouch</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Window})`,
                }}
              >
                <p className="product-card-title">Window pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Centre})`,
                }}
              >
                <p className="product-card-title">Centre seal pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Aluminium})`,
                }}
              >
                <p className="product-card-title">Aluminium foil pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Paper})`,
                }}
              >
                <p className="product-card-title">Paper pouches</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Sidegusset})`,
                }}
              >
                <p className="product-card-title">Side gusset pouch</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Zipper})`,
                }}
              >
                <p className="product-card-title">Zipper pouch</p>
              </div>
            </div>

            <div className="col-sm-12 ">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${TransparentPouches})`,
                }}
              >
                <p className="product-card-title">Transparent pouches</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">MULTILAYER FILM</h3>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${ShrinkWrap})`,
                }}
              >
                <p className="product-card-title">Shrink Wrap</p>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <div
                className="product-card "
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${LDPEMilk})`,
                }}
              >
                <p className="product-card-title">LDPE Milk Bag</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
          <h3 class="main-product-title mb-4">CORRUGATED BOX </h3>
          <div className="row justify-content-center">
            <div className="col-sm-12">
              <div
                className="product-card"
                style={{
                  background: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.8)), url(${Corrugated})`,
                }}
              >
                <p className="product-card-title">Corrugated box</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Product;
