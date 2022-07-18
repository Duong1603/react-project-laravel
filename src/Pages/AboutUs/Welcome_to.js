import React from "react";

export default function Welcome_to() {
  return (
    <div>
      <div className="page-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 wow fadeInUp">
              <h1 className="text-center mb-3">
                Welcome to Your Health Center
              </h1>
              <div className="text-lg">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt neque sit, explicabo vero nulla animi nemo quae
                  cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime
                  iure explicabo aut consequuntur. Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Nesciunt neque sit, explicabo
                  vero nulla animi nemo quae cumque, eaque pariatur eum ut
                  maxime! Tenetur aperiam maxime iure explicabo aut
                  consequuntur.
                </p>
                <p>
                  Expedita iusto sunt beatae esse id nihil voluptates magni,
                  excepturi distinctio impedit illo, incidunt iure facilis
                  atque, inventore reprehenderit quidem aliquid recusandae.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laudantium quod ad sequi atque accusamus deleniti placeat
                  dignissimos illum nulla voluptatibus vel optio, molestiae
                  dolore velit iste maxime, nobis odio molestias!
                </p>
              </div>
            </div>
            <div className="col-lg-10 mt-5">
              <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
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
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow zoomIn">
                  <div className="card-doctor">
                    <div className="header">
                      <img src="../assets/img/doctors/doctor_2.jpg" alt="" />
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
    </div>
  );
}
