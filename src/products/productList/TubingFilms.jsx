import React from "react";
import "./ProductList.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import tubingfilms1 from "../../assets/images/products/ProductList/tubing-films1.jpg";
import tubingfilms2 from "../../assets/images/products/ProductList/tubing-films2.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const TubingFilms = () => {
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
              <h2> Tubing Films</h2>
            </div>
          </div>
        </div>
      </div>


      <div className="case-study-single py-5">
        <div className="container">
          <div className="head-cover">
            <Swiper
              slidesPerView={1}
              centeredSlides={true}
              spaceBetween={30}
              grabCursor={true}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="post-swiper"
            >
              <SwiperSlide>
                <div className="post-card">
                  <img src={tubingfilms1} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={tubingfilms2} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="owl-nav disabled">
            <button type="button" role="presentation" class="owl-prev">
              <span aria-label="Previous"></span>
            </button>
            <button type="button" role="presentation" class="owl-next">
              <span aria-label="Next"></span>
            </button>

            <div class="owl-dots">
              <button role="button" class="owl-dot">
                <span></span>
              </button>
              <button role="button" class="owl-dot active">
                <span></span>
              </button>{" "}
            </div>
          </div>

          <div className="section-wrapper row justify-content-center">
            <div className="col-lg-9 col-md-6 col-sm-12">
              <article>
                <div class="case-info">
                  <h3>About Tubing Films</h3>
                  <p>
                    S-Group offers a comprehensive range of products to suit any
                    custom packaging application. From single wound and
                    centerfold sheeting to polyethylene tubing, we can develop
                    the film or tubing you need for parts packing, overwrap and
                    more. Custom sizes, thicknesses, and materials available.
                  </p>
                  <p>
                    No matter what you're looking for, we can accommodate nearly
                    any specifications to deliver the PVC tubing film that best
                    suits your application.
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TubingFilms;
