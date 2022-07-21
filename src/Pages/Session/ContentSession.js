// import React from "react";
import React, { useState } from "react";
import "./Session.css";
import { Link } from "react-router-dom";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.substring(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? ".....Read more" : " Read less"}
      </span>
    </p>
  );
};

export default function ContentSession() {
  return (
    <div className="container-session">
      <MoveToTop />
      <div className="page-section">
        <div className="container">
          <div className="page-session-information">
            <h1 className="text-center mb-3 wow fadeInUp" id="tile-item-name">
              About Rapid Transformational Therapy (RTT)
            </h1>
            <p className="text mb wow fadeInUp">
              RTT is a hybrid therapy developed by Marisa Peer from London,
              England. It combines the best of hypnotherapy with unique methods
              for permanent and lasting changes, which result from as little as
              one session.
            </p>
            <p className="text mb wow fadeInUp">
              RTT helps you break ties with bad habits and enables people to
              achieve extraordinary outcomes in sports, business and performance
              arts.
            </p>
            <p className="text mb- wow fadeInUp">
              It also improves focus, motivations and helps overcome fears and
              phobias.
            </p>
            <ReadMore className="textSession">
              - RTT works with the subconscious mind, which is an extraordinary
              resource . It’s like a vaut where everything we’ve learned and
              experienced is kept. Experiences that shaped how we feel about
              life in general and why we react to certain things in particular.
              Our subconscious mind gives rise to epiphanies and brilliant ideas
            </ReadMore>
            <ReadMore className="textSession">
              - We learn to navigate life with conscious minds but changes
              directed by the conscious mind have limits. Will power alone
              cannot break the chain of bad habits. We find ourselves making the
              same New Years Resolution time and again. To change, we need to
              connect with the subconscious mind
            </ReadMore>
            <ReadMore className="textSessionp">
              - RTT gets you unstuck very quickly and easily by accessing your
              subconscious mind using hypnosis. Hypnotic trance is a completely
              natural state of inward focus. In hypnosis you are so absorbed,
              you’re not worrying about anything else. The heightened state of
              focus gives your mind more control. The critical chattering mind
              is bypassed. RTT helps your subconscious mind become receptive and
              more suggestible. RTT helps you change perceptions and thoughts at
              the subconscious level
            </ReadMore>
            <p className="text mb wow fadeInUp">
              - Positive suggestions like seeds are planted in the subconscious
              mind. New beliefs are able to take root, typically within 1
              session and no more than three
            </p>
            <p className="text mb wow fadeInUp">
              - RTT uses words that spark imaginations. Words are customized
              just for you.
            </p>
            <p className="text mb-5 wow fadeInUp">
              - with RTT you’re easily, effortlessly, happily break free from
              what was weighing you down{" "}
            </p>
          </div>
          <h1 className="text-center wow fadeInUp" id="tile-item-name">
            Our Sessions
          </h1>
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
                      <a style={{ width: "100px" }} href="#">
                        <span>contact</span>
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
      <div className="style-hr"></div>
    </div>
  );
}
