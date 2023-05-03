import React from "react";
import "./ProductList.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import packagingFilms1 from "../../assets/images/products/ProductList/packaging-films1.jpg";
import packagingFilms2 from "../../assets/images/products/ProductList/packaging-films-2.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const PackagingFilm = () => {
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
              <h2> Packaging Films</h2>
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
                  <img src={packagingFilms1} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={packagingFilms2} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="case-info">
            <h3 class="text-capitalize">About Packaging Films</h3>
            <p>
              When it comes time to package your product you want to choose a
              packaging film that will improve product appearance and quality. S
              Group is an industry leading shrink wrap plastic supplier of the
              finest PVC packaging films available. our packaging shrink film
              will package your products to meet the most stringent standards
              enforced.
            </p>
            <p>
              S Group prides itself on the value of our packaging films. We
              carry polyolefin films with many different unique features
              including: Multi-layer films for most industrial shrink film
              applications, Cross Linked film for stronger seals and better
              zipper strength, High Speed film for automatic machine
              applications, Soft Shrink film for packaging items with limited
              substrates or backing, Hot slip film for easy pack off in cartons,
              and Low Temperature films for heat sensitive applications or low
              end equipment.
            </p>
            <p>
              Our customers can rely on our 20 years of experience and expertise
              to ensure exact film matches for all of your packaging
              applications. Our polyolefin films provide strong, clean seals,
              fantastic clarity, and run on any machinery from manual
              applications up to high speed industrial operations.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PackagingFilm;
