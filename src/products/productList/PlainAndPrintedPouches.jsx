import React from "react";
import "./ProductList.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import Plainandprintedpouches from "../../assets/images/products/ProductList/Plain-and-printed-pouches.jpg";
import Plainandprintedpouches2 from "../../assets/images/products/ProductList/Plain-and-printed-pouches-2.jpg";
import video from "../../assets/Video/Network.mp4"
import Footer from "../../components/footer/Footer";

const PlainAndPrintedPouches = () => {
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
              <h2>Plain and printed pouches</h2>
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
                  <img src={Plainandprintedpouches} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={Plainandprintedpouches2} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div class="case-info">
            <h3>About Pet/Cast Shrink Labels</h3>
            <p>
              We manufacture Pet Shrink Label. PET Shrink Label is good for all
              types of bottles, cups, trays and containers use. It has good
              printing quality, and good shrinkage. We offer shrink labels in
              pieces and in rolls.
            </p>

            <p>
              Pet shrink Labels that we provide is perfectly adapted to the
              required shape. Using state-of-the-art technology, we can offer
              you a wide range of excellent graphic solutions. Each shrink label
              is designed to generate an eye-catching image of your products.
              Our solutions are efficient, eco-friendly and offer both
              information and brand engagement. With creative packaging ideas,
              your brand can stand out from the crowd and generate repeat sales.
            </p>

            <p>
              Features that include PET Shrink Label:
              <ul>
                <li>Good printing quality</li>
                <li>Good printing quality</li>
                <li>Good printing quality</li>
              </ul>
            </p>
            <b>Level of decoration: Simple vs. complex</b>
            <p>
              Complex branding and decoration can also increase the per label
              costs of your PET shrink Label. But elements such as cold foil
              stamping, custom finishes and UV metallic inks also help to
              differentiate your product on the shelf — making the cost increase
              well worth it in many cases.
            </p>
          </div>

          <div className="task-challenge">
            <h3 className="text-lowercase">Properties</h3>
            <table>
              <tbody>
                <tr>
                  <th>Item</th>
                  <th>Thickness</th>
                  <th>Width</th>
                  <th>Shrinkage</th>
                </tr>
                <tr>
                  <td>PVC</td>
                  <td>0.035~0.07mm</td>
                  <td>40~600mm</td>
                  <td>TD 45~60% MD 0~5%</td>
                </tr>
                <tr>
                  <td>OPS</td>
                  <td>0.035~0.07mm</td>
                  <td>40~1050mm</td>
                  <td>TD 45~60% MD 0~5%</td>
                </tr>
                <tr>
                  <td>PET</td>
                  <td>0.03~0.06mm</td>
                  <td>12~1050mm</td>
                  <td>TD 40~70% MD 0~15%</td>
                </tr>
                <tr>
                  <td>PLA</td>
                  <td>0.035~0.07mm</td>
                  <td>40~1050mm</td>
                  <td>TD 45~60% MD 0~5%</td>
                </tr>
                <tr>
                  <td>POF</td>
                  <td>0.015~0.019mm</td>
                  <td>6~30 inch</td>
                  <td>TD 60~65% MD 60~65%</td>
                </tr>
                <tr>
                  <td>PE</td>
                  <td>0.04~0.25mm</td>
                  <td>200~3000mm</td>
                  <td>TD 20~65% MD 20~65%</td>
                </tr>
                <tr>
                  <td>PP</td>
                  <td>0.015~0.025mm</td>
                  <td>127~1016mm</td>
                  <td>TD 60~65% MD 60~65%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default PlainAndPrintedPouches;
