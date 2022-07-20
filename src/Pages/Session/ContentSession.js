import React from "react";
import "./Session.css";
export default function ContentSession() {
  
  return (
    <div className="container-session">
      <div className="page-section">
        <div className="container">
          <div className="page-session-information">
            <h1 className="text-center mb-3 wow fadeInUp">
              About Rapid Transformational Therapy (RTT)
            </h1>
            <p className="text wow fadeInUp">
              RTT is a hybrid therapy developed by Marisa Peer from London,
              England. It combines the best of hypnotherapy with unique methods
              for permanent and lasting changes, which result from as little as
              one session.
            </p>
            <p className="text wow fadeInUp">
              RTT helps you break ties with bad habits and enables people to
              achieve extraordinary outcomes in sports, business and performance
              arts.
            </p>
            <p className="text wow fadeInUp">
              It also improves focus, motivations and helps overcome fears and
              phobias.
            </p>
            <p className="text wow fadeInUp">
              - RTT works with the subconscious mind, which is an extraordinary
              resource . It’s like a vaut where everything we’ve learned and
              experienced is kept. Experiences that shaped how we feel about
              life in general and why we react to certain things in particular.
              Our subconscious mind gives rise to epiphanies and brilliant ideas
            </p>
            <p className="text wow fadeInUp">
              -We learn to navigate life with conscious minds but changes
              directed by the conscious mind have limits. Will power alone
              cannot break the chain of bad habits. We find ourselves making the
              same New Years Resolution time and again. To change, we need to
              connect with the subconscious mind{" "}
            </p>
            <p className="text wow fadeInUp">
              - RTT gets you unstuck very quickly and easily by accessing your
              subconscious mind using hypnosis. Hypnotic trance is a completely
              natural state of inward focus. In hypnosis you are so absorbed,
              you’re not worrying about anything else. The heightened state of
              focus gives your mind more control. The critical chattering mind
              is bypassed. RTT helps your subconscious mind become receptive and
              more suggestible. RTT helps you change perceptions and thoughts at
              the subconscious level{" "}
            </p>
            <p className="text wow fadeInUp">
              - Positive suggestions like seeds are planted in the subconscious
              mind. New beliefs are able to take root, typically within 1
              session and no more than three
            </p>
            <p className="text wow fadeInUp">
              -RTT uses words that spark imaginations. Words are customized just
              for you.
            </p>
            <p className="text wow fadeInUp">
              - with RTT you’re easily, effortlessly, happily break free from
              what was weighing you down
            </p>
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
                  <img
                    src="../assets/img/doctors/doctor_1.jpg"
                    alt=""
                    className="image-session"
                  />
                  <div className="meta" id="Book">
                    <a href=" #">Book</a>
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong>
                  <h5 className="text-center xl-4">FREE DISCOVERY CALL</h5>
                </strong>
                <p className="text-center mb text-grey" id="color-item-text">
                  Get in touch with Phi Phi for 30 minutes
                </p>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor" id="border-card">
                <div className="header">
                  <img
                    src="../assets/img/doctors/doctor_2.jpg"
                    alt=""
                    className="image-session"
                  />
                  <div className="meta" id="Book">
                    <a href=" #">Book</a>
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong>
                  <h5 className="text-center xl-4">ONE SESSION</h5>
                </strong>
                <p className="text-center mb text-grey" id="color-item-text">
                  Phi Phi brings to you 1:1 private session either online via
                  zoom or offline at her facility.
                </p>
              </div>
            </div>
            <div className="item">
              <div className="card-doctor" id="border-card">
                <div className="header">
                  <img
                    src="../assets/img/doctors/doctor_3.jpg"
                    alt=""
                    className="image-session"
                  />
                  <div className="meta" id="Book">
                    <a href=" #">Book</a>
                  </div>
                </div>
              </div>
              <div className="body" id="title-name">
                <strong>
                  <h5 className="text-center xl-4">PACKAGE OF THREE</h5>
                </strong>
                <p className="text-center mb text-grey" id="color-item-text">
                  {" "}
                  Book 3 sessions at one for the best price possible. (9 000 000
                  VND)
                </p>
              </div>
            
            </div>
          </div>
          <div  className="text wow fadeInUp">
      <strong><h4>Comment</h4></strong>
      <textarea id="txtArea" rows="3" cols="100"></textarea>
      </div>
        </div>
      </div>
     
    </div>
  );
}
