import React, { Component } from 'react'

export default class Work extends Component {
    render() {
        return (
            <div>
                <div className="page-section">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp">WORK WITH PHI PHI</h1>
                        <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
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
                                        <p className="text-xl mb-0">ONE SESSION</p>
                                        <span className="text-sm text-grey">Workouts to help you lose weight and build lean muscle</span>
                                    </div>
                                </div>
                            </div>
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
                                        <p className="text-xl mb-0">FREE DISCOVERY CALL</p>
                                        <span className="text-sm text-grey">Get in touch with Phi Phi for 30 mintues to discover what RTT can help with your problesm</span>
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
                                        <p className="text-xl mb-0">PACKAGE OF THREE</p>
                                        <span className="text-sm text-grey">Workouts to improve mobility and function post-injury</span>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="item">
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
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
