import React from "react";
import "./ProductList.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import busbar from "../../assets/images/products/ProductList/busbar.jpg";
import busbar2 from "../../assets/images/products/ProductList/busbar2.jpg";
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
              <h2>BUSBAR</h2>
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
                  <img src={busbar} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={busbar2} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

            <div className="w-100">
                <div class="case-info">
                  <h3 className="text-capitalize">About Busbar</h3>
                  <p>
                    Bus bar sleeves are an excellent latest modern technology
                    for insulation compared to age old conventional method of
                    taping and painting etc. Our Product is available from 12 mm
                    width to 350 mm width and in thickness ranging from 50
                    microns to 350 microns for the complete range of Bus Bar and
                    which covers the variations as required by local or export
                    units. Apart from the regular colors of Red, Yellow, Blue,
                    Black & Green, our innovative in-house team has also
                    developed new color like grey, green, brown and white and
                    hence adding a new dimension of color to the Busbar range.
                  </p>
                  </div>
                  <div className="task-challenge">
                  <h3 className="text-capitalize">Properties</h3>
                  <table>
                    <tbody>
                    <tr>
                      <td>Working Temperature</td>
                      <td>90℃</td>
                    </tr>

                    <tr>
                      <td>Dielectric Strength</td>
                      <td>20KV /sq mm</td>
                    </tr>

                    <tr>
                      <td>Insulation Resistance</td>
                      <td>20 x 10 Ω at 500 VDC</td>
                    </tr>

                    <tr>
                      <td>Tensile Strength</td>
                      <td>Min 400 Kg/sq cm</td>
                    </tr>

                    <tr>
                      <td>Ultimate Elongation</td>
                      <td>Min 11%</td>
                    </tr>

                    <tr>
                      <td>Fire Resistance (as per UL94-V) materials</td>
                      <td>Self Extinguishing with no dripping of</td>
                    </tr>

                    <tr>
                      <td>Shrinking Temperature</td>
                      <td>150℃- 170℃</td>
                    </tr>

                    </tbody>
                  </table>
                  </div>
            </div>
          </div>
        </div>
        <Footer/>
    </>
  );
};

export default TubingFilms;
