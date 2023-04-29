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


const Product = () => {
  return (
    <>
      <div className="page-header">
        <div className="home-banner-image"> </div>
        <div className="image-overlay-bg"></div>
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
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${packaging })`}}>
                <p>Packaging Films</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${tubing})`}}>
                <p>Tubing Films</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${busbar} )` }}>
                <p>Busbar</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">Labels &nbsp; | &nbsp; <span>PVC Shrink Labels</span></h3>
          <div className="row justify-content-center">

            <div className="col-sm-12 col-md-12 col-lg-4">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${shrink })`}}>
                <p>Shrink Labels (PVC)</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-4">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${petcast})`}}>
                <p> Pet Shrink Labels</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-12 col-lg-4">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Plain})`}}>
                <p>Plain and printed pouches</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">Labels &nbsp; | &nbsp; <span>BOPP Labels</span></h3>
          <div className="row justify-content-center">

            <div className="col-sm-12 col-md-6 col-lg-6">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Pearlized})`}}>
                <p><p>Pearlized BOPP</p></p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <a href="poroduct-packaging-films.html">
                <div className="product-card " style= {{backgroundImage:`url(${Transparent})`}}>
                <p>Transparent BOPP</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>  

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">Labels </h3>
          <div className="row justify-content-center">

            <div className="col-sm-12">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Self})`}}>
                <p>Self Adhesive Label</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>  

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">LAMINATES</h3>
          <div className="row justify-content-center">

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${StandUp})`}}>
                <p>Stand up pouch</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Shaped})`}}>
                <p>Shaped pouches</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${pouches})`}}>
                <p>3 side seal pouches</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Kraft})`}}>
                <p>Kraft paper pouch</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Pouches})`}}>
                <p>Pouch with handle</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Spout})`}}>
                <p>Spout pouch</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Window})`}}>
                <p>Window pouches</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Centre})`}}>
                <p>Centre seal pouches</p>
                </div>
              </a>
            </div>


            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Aluminium})`}}>
                <p>Aluminium foil pouches</p>
                </div>
              </a>
            </div>


            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Paper})`}}>
                <p>Paper pouches</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Sidegusset})`}}>
                <p>Side gusset pouch</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 col-md-6 col-lg-3">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Zipper})`}}>
                <p>Zipper pouch</p>
                </div>
              </a>
            </div>

            <div className="col-sm-12 ">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${TransparentPouches})`}}>
                <p>Transparent pouches</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> 

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">MULTILAYER FILM</h3>
          <div className="row justify-content-center">

            <div className="col-sm-12 col-md-6 col-lg-6">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${ShrinkWrap})`}}>
                <p>Shrink Wrap</p>
                </div>
              </a>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-6">
              <a href="poroduct-packaging-films.html">
                <div className="product-card " style= {{backgroundImage:`url(${LDPEMilk})`}}>
                <p>LDPE Milk Bag</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>  

      <div className="products-list-area pt-4 mt-4">
        <div className="container">
        <h3 class="main-product-title mb-4">CORRUGATED BOX </h3>
          <div className="row justify-content-center">

            <div className="col-sm-12">
              <a href="poroduct-packaging-films.html">
                <div className="product-card" style= {{backgroundImage:`url(${Corrugated})`}}>
                <p>Corrugated box</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div> 
       
    </>
  );
};

export default Product;
