import React, { Component } from 'react'

export default class Slogan extends Component {
    render() {
        return (
            <div>
                <div
                    className="page-section banner-home bg-image1"
                    style={{ backgroundImage: "url(../assets/img/bg_slogan.jpg)" }}
                >
                    <h1 className="font-weight-normal mb-3" id='text-slogan'>
                        Your thoughts control your actions,
                        your actions control the events
                        in life
                    </h1>
                    <div className='slogan-btn'>
                    <button type="button" className="slogan">CHANGE YOUR <br/>THOUGHT NOW</button>
                    </div>
                </div>
            </div>
        )
    }
}
