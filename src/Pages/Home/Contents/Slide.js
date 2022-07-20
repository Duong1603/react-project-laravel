import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        return (
            <div>
                <div
                    className="page-hero bg-image overlay-dark"
                    style={{ backgroundImage: "url(../assets/img/bg_1.jpg)" }}
                >
                    <div className="hero-section">
                        <div className="container text-center wow zoomIn">
                            <span className="subhead">CERTIFIED HYPNOTHERAPISTRTT PRACTITIONER</span>
                            <h1 className="display-4">PHI PHI</h1>
                            <a href="#" className="btn btn-primary">
                                Let's Consult
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
