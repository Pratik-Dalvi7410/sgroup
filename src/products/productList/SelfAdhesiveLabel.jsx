import React from "react";
import "./ProductList.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import SelfAdhesive1 from "../../assets/images/products/ProductList/Self-Adhesive-Label.jpg";
import SelfAdhesive2 from "../../assets/images/products/ProductList/Self-Adhesive-Label-2.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const SelfAdhesiveLabel = () => {
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
              <h2>Self Adhesive Label</h2>
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
                  <img src={SelfAdhesive1} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={SelfAdhesive2} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="case-info">
            <h3> About Self Adhesive Label </h3>
            <p>
              Self adhesive labels are indispensable to any business. They
              render identity to a product or a brand. Since the contemporary
              marketing space demands for solutions to the T, the label
              packaging becomes an important tool helping market the products
              off the shelves. Most of the businesses fail because they
              underestimate the power of pressure sensitive adhesive label
              packaging. As a result, they are unable to project their products
              in a certain way seldom connecting with the end user.
            </p>

            <p>
              These labels are a sophisticated means of packaging, eliminating
              the need of any separate gluing process and can be applied
              automatically using a label applicator. Modern day printing and
              finishing techniques offer a variety of finishes, creating a look
              and feel resonating with the brand.
            </p>

            <p>
              According to adhesive label printing companies, labels can be seen
              as an effective packaging solution and offer plethora of benefits.
              Let's take a look at these benefits:
              <ul>
                <li>Highly customizable</li>
                <li>Versatile</li>
                <li>Cost effective</li>
                <li>Durability</li>
                <li>Easy to use</li>
              </ul>
              <b>
                If your business also needs adhesive labels, then you must hire
                us as we are reputed adhesive label printing company to do the
                job for you.
              </b>
            </p>
            
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default SelfAdhesiveLabel;
