import React, { useRef } from "react";
import "./Home.css";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper";
import { BsBuildings } from "react-icons/bs";
import cerd1Image from "../assets/images/home/01.png";
import cerd2Image from "../assets/images/home/02.png";
import logo1 from "../assets/images/home/1.png";
import logo2 from "../assets/images/home/2.png";
import logo3 from "../assets/images/home/3.png";
import logo4 from "../assets/images/home/4.png";
import logo5 from "../assets/images/home/5.png";
import logo6 from "../assets/images/home/6.png";
import logo7 from "../assets/images/home/7.png";
import logo8 from "../assets/images/home/8.png";
import logo9 from "../assets/images/home/9.png";
import logo10 from "../assets/images/home/10.png";
import logo11 from "../assets/images/home/11.png";
import logo12 from "../assets/images/home/12.png";
import logo13 from "../assets/images/home/13.png";
import logo14 from "../assets/images/home/14.png";
import logo15 from "../assets/images/home/15.png";
import logo16 from "../assets/images/home/16.png";
import logo17 from "../assets/images/home/17.png";
import logo18 from "../assets/images/home/18.png";
import logo19 from "../assets/images/home/19.png";
import logo20 from "../assets/images/home/20.png";
import logo21 from "../assets/images/home/21.png";
import logo22 from "../assets/images/home/22.png";
import logo23 from "../assets/images/home/23.png";
import logo24 from "../assets/images/home/24.png";
import logo25 from "../assets/images/home/25.png";
import logo26 from "../assets/images/home/26.png";
import Video2 from "../assets/Video/Network.mp4";
import footerlogo from "../assets/images/logo/logo.png";
import missionImage from "../assets/images/home/mission.png";
import visionImage from "../assets/images/home/vision.png";
import useWindowDimensions from "../hooks/Dimensions";

const Home = () => {
  const { width } = useWindowDimensions();

  return (
    <>
      {/* <Header /> */}
      <section class="banner d-flex align-items-center justify-content-center ">
        <div class="banner-content p-5 text-center d-flex align-items-center flex-column justify-content-center ">
          <h2 class="banner-header mb-4 text-uppercase">
            <TypeAnimation
              cursor={false}
              sequence={[
                "One Stop Solution for all Packaging Needs",
                2000,
                "Flexible Packaging SOLUTIONS THAT MAKE YOUR BUSINESS LOOK UNIQUE",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </h2>
          <p>
            Excellence is in the packaging. Innovative Packing is here
            torevolutionize how the food, coffee, cannabis, beverage and
            industrial sectors think aboutpackaging.
          </p>
        </div>
      </section>
      <div className="s-box">
        <div class="firms ">
          <div className="container">
            <div className="firms-list-container w-100 p-5">
              <h3> OUR FIRMS</h3>
              <Swiper
                slidesPerView={width > 992 ? 3 : width > 576 ? 2 : 1}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                className="firms-swiper"
              >
                <SwiperSlide>
                  <div className="firm-card">
                    <BsBuildings />
                    <h5> SB PACKAGING</h5>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="firm-card">
                    <BsBuildings />
                    <h5> SANKET POYMER</h5>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="firm-card">
                    <BsBuildings />

                    <h5> SANTU AEE INDUSTRIES</h5>
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div className="firm-card">
                    <BsBuildings />
                    <h5> DALVI INDUSTRIES </h5>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <div className="achievement">
        <div className="section-header">
          <h2>Looking for The First-Class Packaging Partner?</h2>
          <p>We are certified for the best in packaging.</p>
        </div>
        <div class="post-thumb ">
          <div className="container-post">
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
                  <img src={cerd1Image} alt="CardImage" />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="post-card">
                  <img src={cerd2Image} alt="CardImage" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>

      <div className="section-about">
        <h2 className="About-h2">About us</h2>
        <p className="About-p">
          S Group is in the business of packaging solutions for the last 15
          years. We provide labelling and flexible packaging solutions for the
          India's biggest brands. We provide needs to the various industries
          like food and beverages, dairy, health and beauty, personal and home
          care, pharmaceuticals etc. We have our inhouse best graphic designers.
          We visualize and maintain high standards at every stage. We offer
          end-to-end design ideas. We have a best in class printing press which
          are capable of printing over 8 colours to serve a brand's specific
          needs. We have plant machines with capability of 300 metric tons. Mono
          &amp; multi layer extruders, solvent less &amp; solvent based
          lamination machines, pouch and bag making machines, integrated quality
          management, end-to-end quality control with digitally mapped. We
          pleasure to ourselves that we have a high quality control with strict
          commitment to brand guidelines. Our Head offices, manufacturing units
          are based in Sinnar, Nashik.
        </p>
        <h2 class="mt-4 About-header">Our Clients</h2>

        <Swiper
          slidesPerView={width > 992 ? 3 : width > 576 ? 2 : 1}
          centeredSlides={true}
          spaceBetween={30}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="logo-swiper"
        >
          <SwiperSlide>
            <div className="logo-card">
              <img src={logo1} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo2} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo3} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo4} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo5} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo6} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo7} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo8} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo9} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo10} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo11} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo12} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo13} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo14} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo15} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo16} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo17} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo18} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo19} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo20} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo21} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo22} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo23} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo24} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo25} alt="logoImage" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="logo-card">
              <img src={logo26} alt="logoImage" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <section class="banner-box  align-items-center justify-content-center ">
        <div class="banner-box-content p-5 text-left d-flex align-items-left flex-column justify-content-top ">
          <img src={missionImage} alt="mission Image " />
          <h3 class="Mission"> Mission </h3>
          <p class="mission">
            Our mission is to provide best service to our existing clients by
            being the most responsive, offering superior quality at optimal cost
            by constant improvisation.
          </p>
        </div>

        <div class="banner-box-content p-5 text-left d-flex align-items-left flex-column justify-content-top ">
          <img src={visionImage} alt="mission Image " />
          <h3 class="Mission"> Vision </h3>
          <p class="mission">
            Our vision is to be a global leading and most admired packaging
            solutions provider with customer focus, by delivering excellence.
          </p>
        </div>
      </section>

      <section class="footer py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <img src={footerlogo} className="footer-logo mb-3" alt="Footer Logo" />
              <p className="footer-email mb-1">info@s-group.org</p>
              <p className="footer-number">+91 0250 235 2100</p>
            </div>
            <div className="col-lg-7">
              <div className="row">
                <div className="col-lg-6">
                  <p className="footer-links-title mb-4">About Us</p>
                  <ul className="footer-links m-0 p-0 d-flex flex-column align-items-start">
                    <li>Home</li>
                    <li>Our Products</li>
                    <li>Contact us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
