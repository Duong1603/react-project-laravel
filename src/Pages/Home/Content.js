import React from "react";

export default function Content() {
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
            </div>{" "}
            {/* .page-section */}
            <div className="page-section pb-0">
            <div className="container">
                <div className="row align-items-center">
                <div className="col-lg-6 py-3 wow fadeInUp">
                    <h1>
                    Welcome to Your Health <br /> Center
                    </h1>
                    <p className="text-grey mb-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Accusantium aperiam earum ipsa
                    eius, inventore nemo labore eaque porro consequatur ex
                    aspernatur. Explicabo, excepturi accusantium! Placeat
                    voluptates esse ut optio facilis!
                    </p>
                    <a href="about.html" className="btn btn-primary">
                    Learn More
                    </a>
                </div>
                <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                    <div className="img-place custom-img-1">
                    <img src="../assets/img/bg-doctor.png" alt="" />
                    </div>
                </div>
                </div>
            </div>
            </div>{" "}
            {/* .bg-light */}
        </div>{" "}
        {/* .bg-light */}
        <div className="page-section">
            <div className="container">
            <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
            <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
                <div className="item">
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
                <div className="item">
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
                <div className="item">
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
                <div className="item">
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
                <div className="item">
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
        <div className="page-section bg-light">
            <div className="container">
            <h1 className="text-center wow fadeInUp">Latest News</h1>
            <div className="row mt-5">
                <div className="col-lg-4 py-2 wow zoomIn">
                <div className="card-blog">
                    <div className="header">
                    <div className="post-category">
                        <a href="#">Covid19</a>
                    </div>
                    <a href="blog-details.html" className="post-thumb">
                        <img src="../assets/img/blog/blog_1.jpg" alt="" />
                    </a>
                    </div>
                    <div className="body">
                    <h5 className="post-title">
                        <a href="blog-details.html">
                        List of Countries without Coronavirus case
                        </a>
                    </h5>
                    <div className="site-info">
                        <div className="avatar mr-2">
                        <div className="avatar-img">
                            <img src="../assets/img/person/person_1.jpg" alt="" />
                        </div>
                        <span>Roger Adams</span>
                        </div>
                        <span className="mai-time" /> 1 week ago
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 py-2 wow zoomIn">
                <div className="card-blog">
                    <div className="header">
                    <div className="post-category">
                        <a href="#">Covid19</a>
                    </div>
                    <a href="blog-details.html" className="post-thumb">
                        <img src="../assets/img/blog/blog_2.jpg" alt="" />
                    </a>
                    </div>
                    <div className="body">
                    <h5 className="post-title">
                        <a href="blog-details.html">
                        Recovery Room: News beyond the pandemic
                        </a>
                    </h5>
                    <div className="site-info">
                        <div className="avatar mr-2">
                        <div className="avatar-img">
                            <img src="../assets/img/person/person_1.jpg" alt="" />
                        </div>
                        <span>Roger Adams</span>
                        </div>
                        <span className="mai-time" /> 4 weeks ago
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-lg-4 py-2 wow zoomIn">
                <div className="card-blog">
                    <div className="header">
                    <div className="post-category">
                        <a href="#">Covid19</a>
                    </div>
                    <a href="blog-details.html" className="post-thumb">
                        <img src="../assets/img/blog/blog_3.jpg" alt="" />
                    </a>
                    </div>
                    <div className="body">
                    <h5 className="post-title">
                        <a href="blog-details.html">
                        What is the impact of eating too much sugar?
                        </a>
                    </h5>
                    <div className="site-info">
                        <div className="avatar mr-2">
                        <div className="avatar-img">
                            <img src="../assets/img/person/person_2.jpg" alt="" />
                        </div>
                        <span>Diego Simmons</span>
                        </div>
                        <span className="mai-time" /> 2 months ago
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 text-center mt-4 wow zoomIn">
                <a href="blog.html" className="btn btn-primary">
                    Read More
                </a>
                </div>
            </div>
            </div>
        </div>{" "}
        {/* .page-section */}
        <div className="page-section">
            <div className="container">
            <h1 className="text-center wow fadeInUp">Make an Appointment</h1>
            <form className="main-form">
                <div className="row mt-5 ">
                <div className="col-12 col-sm-6 py-2 wow fadeInLeft">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                    />
                </div>
                <div className="col-12 col-sm-6 py-2 wow fadeInRight">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Email address.."
                    />
                </div>
                <div
                    className="col-12 col-sm-6 py-2 wow fadeInLeft"
                    data-wow-delay="300ms"
                >
                    <input type="date" className="form-control" />
                </div>
                <div
                    className="col-12 col-sm-6 py-2 wow fadeInRight"
                    data-wow-delay="300ms"
                >
                    <select
                    name="departement"
                    id="departement"
                    className="custom-select"
                    >
                    <option value="general">General Health</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="dental">Dental</option>
                    <option value="neurology">Neurology</option>
                    <option value="orthopaedics">Orthopaedics</option>
                    </select>
                </div>
                <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                    <input
                    type="text"
                    className="form-control"
                    placeholder="Number.."
                    />
                </div>
                <div className="col-12 py-2 wow fadeInUp" data-wow-delay="300ms">
                    <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={6}
                    placeholder="Enter message.."
                    defaultValue={""}
                    />
                </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3 wow zoomIn">
                Submit Request
                </button>
            </form>
            </div>
        </div>{" "}
        {/* .page-section */}
        <div
            className="page-section banner-home bg-image"
            style={{ backgroundImage: "url(../assets/img/banner-pattern.svg)" }}
        >
            <div className="container py-5 py-lg-0">
            <div className="row align-items-center">
                <div className="col-lg-4 wow zoomIn">
                <div className="img-banner d-none d-lg-block">
                    <img src="../assets/img/mobile_app.png" alt="" />
                </div>
                </div>
                <div className="col-lg-8 wow fadeInRight">
                <h1 className="font-weight-normal mb-3">
                    Get easy access of all features using One Health Application
                </h1>
                <a href="#">
                    <img src="../assets/img/google_play.svg" alt="" />
                </a>
                <a href="#" className="ml-2">
                    <img src="../assets/img/app_store.svg" alt="" />
                </a>
                </div>
            </div>
            </div>
        </div>{" "}
    </>
  );
}
