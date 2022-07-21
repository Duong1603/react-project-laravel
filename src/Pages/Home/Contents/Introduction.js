import React, { Component } from 'react'

export default class Introduction extends Component {
    render() {
        return (
            <div>
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
                    <div className="page-section pb-0">
                        <div className="page-section pb-0" id='small-image'>
                            <div className="container" >
                                <div className="row align-items-center">
                                    <div className="col-lg-2 wow fadeInRight" data-wow-delay="400ms">
                                        <div className="img-place custom-img-1">
                                            <img className="small-img" src="../assets/img/img_small.jpeg" alt="" />
                                        </div>
                                        <br />
                                    </div>
                                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
                                        <div className="img-place custom-img-1">
                                            <img src="../assets/img/phiphi.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4 py-3 wow fadeInUp">
                                        <h1 className='text-about'>
                                            ABOUT PHI PHI <br />
                                        </h1>
                                        <p className="text-grey mb-4" id='custom-phi'>
                                            Rapid Transformational Therapy <br />
                                            Phi Phi is a passionate RTT practitioner who loves to accompany you on your healing journey. From as little as one session, Phi Phi is able to help you break free from your undesired habits and problems, such as smoking, gambling, anxiety etc. Through this process, Phi Phi will be your trusted therapist to help you unfold into the version that you’ve always wanted to be.
                                        </p>
                                        <a href="about.html" className="btn btn-primary">
                                            Read More
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
