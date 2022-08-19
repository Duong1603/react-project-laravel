import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Feedback() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/comment?numberOfComments=3").then(({ data }) => {
          console.log(data.data);
          setComments(data.data)
        });
    }, [])
  return (
    <div>
      <div>
        <div className="Container">
          <div className="first-component">
            <h2 id="clients">PRAISE FROM CLIENTS</h2>
          </div>
          <div className="first-component">
            {/* <div className="First-profile">
              <div className="Image-profile">
                <img src="../assets/img/person/avatar.png" alt="" />
              </div>
              <div className="Content-profile">
                <h4 classNameName="name-client">ALISON HALVERSTON</h4>
                <p classNameName="feedback-client">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div>
            <div className="First-profile">
              <div className="Image-profile">
                <img src="../assets/img/person/avatar.png" alt="" />
              </div>
              <div className="Content-profile">
                <h4 classNameName="name-client">SARAH JORDAN</h4>
                <p classNameName="feedback-client">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div>
            <div className="First-profile">
              <div className="Image-profile">
                <img src="../assets/img/person/avatar.png" alt="" />
              </div>
              <div className="Content-profile">
                <h2 classNameName="name-client">JANICE MONTGOMERY</h2>
                <p classNameName="feedback-client">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div> */}
            {comments.map((comment)=> {
                return (
                  <div className="First-profile">
                    <div className="Image-profile">
                      <img src="../assets/img/person/avatar.png" alt="" />
                    </div>
                    <div className="Content-profile">
                      <h2 className="name-client">{comment.user}</h2>
                      <p className="feedback-client">
                        {comment.content}
                      </p>
                    </div>
                  </div>
                );
            })}
          </div>
          {/* mobile */}
          <div className="first-component-mobile-title">
            <h2 id="clients">PRAISE FROM CLIENTS</h2>
          </div>
          <div className="first-component-mobile">
            {/* <div className="First-profile First-profile-mobile">
              <div className="Image-profile Image-profile-mobile">
                <img src="../assets/img/person/avatar.png" alt="" />
                <h4 classNameName="name-client name-client-mobile">
                  ALISON HALVERSTON
                </h4>
              </div>
              <div className="Content-profile Content-profile-mobile">
                <p classNameName="feedback-client feedback-client-mobile">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div>
            <div className="First-profile First-profile-mobile">
              <div className="Image-profile Image-profile-mobile">
                <img src="../assets/img/person/avatar.png" alt="" />
                <h4 classNameName="name-client name-client-mobile">SARAH JORDAN</h4>
              </div>
              <div className="Content-profile Content-profile-mobile">
                <p classNameName="feedback-client feedback-client-mobile">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div>
            <div className="First-profile First-profile-mobile">
              <div className="Image-profile Image-profile-mobile">
                <img src="../assets/img/person/avatar.png" alt="" />
                <h2 classNameName="name-client name-client-mobile">
                  JANICE MONTGOMERY
                </h2>
              </div>
              <div className="Content-profile Content-profile-mobile">
                <p classNameName="feedback-client feedback-client-mobile">
                  Testimonials are brief statements from your brand's favorite
                  words. It's a great way to convince customers to try your
                  services
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
