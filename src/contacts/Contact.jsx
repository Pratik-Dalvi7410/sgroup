import React from "react";
import "./Contact.css";
import {AiOutlineClockCircle} from "react-icons/Ai";
import {HiLockClosed} from "react-icons/Hi";


function Contact() {

  return (
    <>
      <div className="page-header">
        <div className="home-banner-image"> </div>
        <div className="image-overlay-bg"></div>
        <div className="container">
          <div className="page-header-item d-flex align-items-center justify-content-center">
            <div className="post-content">
              <h2> Contact Us </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="breadcamp">
        <div className="container">
          <ul className="d-flex flex-wrap justify-content-center align-items-center">
            <li>
              <a href="index.html">Home </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-chevron-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                />
              </svg>
            </li>
            <li>
              <a class="active">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="contact style-2 padding-tb">
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

      <div className="mapouter">
        <div className="gmap_canvas">

        </div>
    </div>


    </>
  );
}

export default Contact;
