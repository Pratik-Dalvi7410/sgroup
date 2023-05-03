import React from "react";
import "./Contact.css";
import {AiOutlineClockCircle} from "react-icons/Ai";
import {HiLockClosed} from "react-icons/Hi";
import video from "../assets/Video/Network.mp4";
import Footer from "../components/footer/Footer";
import Map from "../components/GoogleMap/Map";


function Contact() {

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
              <h2> Contact Us </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="contact style-2 py-3">
        <div className="container">
          <div className="section-wrapper row justify-content-center">
            <div className="col-lg-8 col-12">
              <div className="contact-part">
                <div className="contact-title">
                  <h4>Don't Hesitate to contact Us</h4>
                </div>
                <div className="contact-form d-flex flex-wrap justify-content-between">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                  />
                  <input type="tel" id="phone" name="tel" placeholder="Phone" />
                  <input type="text" id="subject" placeholder="Subject" />
                  <textarea
                    rows="7"
                    id="message"
                    placeholder="Enter Your Message"
                  ></textarea>
                  <input
                    class="btn"
                    onclick="gotowhatsapp()"
                    type="submit"
                    value="Send Message"
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-part">
                <div className="schedule">
                  <li> <i> <AiOutlineClockCircle/> </i>Sun - Fri : 9am - 6pm</li>
                  <li> <i> <HiLockClosed/> </i>Saturday : <span>Closed</span></li>
                </div>
                <div className="contact-info">
                <h4>We Are Here!</h4>
                <p>B- 146/147/68, Musalgaon M.I.D.C,</p>
                <p>Sinnar - Shirdi Road, Sinnar, </p>
                <p class="style-2">Nashik , Maharashtra - 422 113</p>
                <a href="https://www.google.com/maps/dir//19.844803,74.045859/@19.844803,74.045859,14z" target="_blank">Find Us On Google Map</a>
                <ul className="details">
                  <li><p>Email</p> info@s-group.org</li>
                  <li><p>Phone</p>+91 74208 83447</li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    <Map/>
    <Footer/>

    </>
  );
}

export default Contact;
