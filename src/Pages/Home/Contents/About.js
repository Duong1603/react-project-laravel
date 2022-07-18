import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>

                <div className="page-section pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 py-3 wow fadeInUp">
                                <h1 className='text-about'>
                                    WHAT CAN RTT DO FOR YOU? <br />
                                </h1>
                                <p>Rapid Transformational Therapy</p>
                                <p className="text-grey mb-4">
                                    RTT is a hybrid therapy developed by Marisa Peer from London, England. It combines the best of hypnotherapy with unique methods for permanent and lasting changes, which result from as little as one session.<br />
                                    RTT helps you break ties with bad habits and enables people to achieve extraordinary outcomes in sports, business and performance arts.<br />
                                    It also improves focus, motivations and helps overcome fears and phobias.
                                </p>
                                <a href="about.html" className="btn btn-primary">
                                    Read More
                                </a>
                            </div>
                            <div className="col-lg-7 wow fadeInRight" data-wow-delay="400ms">
                                <div className="img-place custom-img-1">
                                    <img src="../assets/img/bg_3.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
