import React from "react";
import { Link } from "react-router-dom";
import "./Session.css";
export default function ContentSession() {
  return (
    <div className="container-session">
      <div className="page-section">
        <div className="container">
          <div className="page-session-information">
            <h1 className="text-center mb-3 wow fadeInUp">
              What will you discover in our sessions?
            </h1>
            <p className="text wow fadeInUp">
              We believe that using methods such as Rapid Transformational
              Therapy (RTT), Meditation, Yoga, Cooking and Nutrition Classes,
              Art Therapy, Reiki, Aromatherapy, Mindfulness and Functional
              exercises, Gratitude Journaling, Daily Affirmations, you’ll
              discover a new version of you, the person you’ve always wanted to
              be.
            </p>
            <ul className="text mb-5 wow fadeInUp">
              <li>
                Why you should be doing what you love and loving what you do?
              </li>
              <li>
                How to finally break the cycle of frustration, to lead your life
                on your terms with confidence?
              </li>
              <li>
                When it’s OK not to be OK and the best way to change this?
              </li>
            </ul>
          </div>
          <h1 className="text-center wow fadeInUp">Our Sessions</h1>
          <p className="text mb-5 wow fadeInUp">
            We are a collective of health and wellness professionals based in
            Ubud, Bali, Indonesia bringing you a variety of 1-1 private session
            or bespoke group offerings designed to help you discover the new
            version of you that you’ve always wanted to be.
          </p>
          <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
            <div className="item">
              <div className="card-doctor" id="border-card">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_1.jpg" alt="" className="image-session" />
                  <div className="meta" id="Book">
                  <Link to={'/booking'}>Book</Link>                  
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong><h5 className="text-center xl-4">FREE DISCOVERY CALL</h5></strong>
                <p className="text-center mb text-grey" id="color-item-text">Get in touch with Phi Phi for 30 minutes</p>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor" id="border-card">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_2.jpg" alt="" className="image-session" />
                  <div className="meta" id="Book">
                    <Link to={'/booking'}>Book</Link>                  
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong><h5 className="text-center xl-4">ONE SESSION</h5></strong>
                <p className="text-center mb text-grey" id="color-item-text">Phi Phi brings to you 1:1 private session either online via zoom or offline at her facility.</p>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor" id="border-card">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_3.jpg" alt="" className="image-session" />
                  <div className="meta" id="Book">
                  <Link to={'/booking'}>Book</Link>                   
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong><h5 className="text-center xl-4">PACKAGE OF THREE</h5></strong>
                <p className="text-center mb text-grey" id="color-item-text"> Book 3 sessions at one for the best price possible.  (9 000 000 VND)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
