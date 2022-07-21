import React from "react";
import { Link } from "react-router-dom";
import "./Session.css";
import MoveToTop from "../../Components/MoveToTop"
export default function ContentSession() {
  return (
    <div className="container-session">
      <MoveToTop/>
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
          <p className="text mb-5 wow fadeInUp">
            We are a collective of health and wellness professionals based in
            Ubud, Bali, Indonesia bringing you a variety of 1-1 private session
            or bespoke group offerings designed to help you discover the new
            version of you that you’ve always wanted to be.
          </p>
          <p className="text mb-5 wow fadeInUp">
            We are a collective of health and wellness professionals based in
            Ubud, Bali, Indonesia bringing you a variety of 1-1 private session
            or bespoke group offerings designed to help you discover the new
            version of you that you’ve always wanted to be.
          </p>
          <div className="col-lg-12 mt-5">
              <h1 className="text-center mb-5 wow fadeInUp">Session</h1>
              <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 wow zoomIn">
                  <div className="card-doctor">
                    <div className="header">
                      <img src="../assets/img/doctors/doctor_1.jpg" alt="" />
                      <div className="meta">
                        <a href="#">
                          <span className="mai-call" />
                        </a>
                        <a href="#">
                          <span className="mai-logo-whatsapp" />
                        </a>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text-xl mb-0">Dr. Stein Albert</p>
                      <span className="text-sm text-grey">Cardiology</span>
                      <p>lorem* asdf jf ads jfh ads dsf jf sadkjfsadjfh kjds</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow zoomIn">
                  <div className="card-doctor">
                    <div className="header">
                      <img src="../assets/img/doctors/doctor_2.jpg" alt="" />
                      <div className="meta row justify-content-center">
                        <a style={{width:'100px'}} href="#">
                          <span >contact</span>
                        </a>
                        {/* <a href="#">
                          <span className="mai-logo-whatsapp" />
                        </a> */}
                      </div>
                    </div>
                    <div className="body">
                      <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                      <span className="text-sm text-grey">Dental</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow zoomIn">
                  <div className="card-doctor">
                    <div className="header">
                      <img src="../assets/img/doctors/doctor_3.jpg" alt="" />
                      <div className="meta">
                        <a href="#">
                          <span className="mai-call" />
                        </a>
                        <a href="#">
                          <span className="mai-logo-whatsapp" />
                        </a>
                      </div>
                    </div>
                    <div className="body">
                      <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                      <span className="text-sm text-grey">General Health</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}
