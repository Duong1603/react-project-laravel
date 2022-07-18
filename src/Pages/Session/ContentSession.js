import React from "react";
import Session from "./Session.css";
export default function ContentSession() {
  return (
    <>
     <div
            className="page-hero bg-image overlay-dark"
            style={{ backgroundImage: "url(../assets/img/bg_image_1.jpg)" }}
        >
            <div className="hero-section">
            <div className="container text-center wow zoomIn">
                <span className="subhead">Let's make your life happier</span>
                <h1 className="display-4">Healthy Living</h1>
                <a href="#" className="btn btn-primary">
                Let's Consult
                </a>
            </div>
            </div>
        </div>
        <div className="bg-light">
            <div className="page-section py-3 mt-md-n5 custom-index">
            <div className="container">
                <div className="row justify-content-center">
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-secondary text-white">
                        <span className="mai-chatbubbles-outline" />
                    </div>
                    <p>
                        <span>Chat</span> with a doctors
                    </p>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-primary text-white">
                        <span className="mai-shield-checkmark" />
                    </div>
                    <p>
                        <span>One</span>-Health Protection
                    </p>
                    </div>
                </div>
                <div className="col-md-4 py-3 py-md-0">
                    <div className="card-service wow fadeInUp">
                    <div className="circle-shape bg-accent text-white">
                        <span className="mai-basket" />
                    </div>
                    <p>
                        <span>One</span>-Health Pharmacy
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        {/* .bg-light */}
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
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_1.jpg" alt="" className ="image-session"/>
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
                  <strong><p className="text-center xl-4">FREE DISCOVERY CALL</p></strong>
                  <p className="text-center mb text-grey">Get in touch with Phi Phi for 30 mintues to discover what RTT can help with your problesm</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_2.jpg" alt="" className ="image-session"/>
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
                <strong><p className="text-center xl-4">ONE SESSION</p></strong>
                  <p className="text-center mb text-grey">Workouts to help you lose weight and build lean muscle</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor">
                <div className="header">
                  <img src="../assets/img/doctors/doctor_3.jpg" alt="" className ="image-session"/>
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
                <strong><p className="text-center xl-4">PACKAGE OF THREE</p></strong>
                  <p className="text-center mb text-grey">Workouts to improve mobility and function post-injury</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
