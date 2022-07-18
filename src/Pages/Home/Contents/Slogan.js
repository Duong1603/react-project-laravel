import React, { Component } from 'react'

export default class Slogan extends Component {
    render() {
        return (
            <div>
                <div
                    className="page-section banner-home bg-image"
                    style={{ backgroundImage: "url(../assets/img/bg_2.jpg)" }}
                >
                    <h1 className="font-weight-normal mb-3">
                        Your thoughts control your actions,
                        your actions control the events
                        in life
                    </h1>
                </div>
            </div>
        )
    }
}
