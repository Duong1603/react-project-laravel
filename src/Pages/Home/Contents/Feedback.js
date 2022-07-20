import React, { Component } from 'react'

export default class Contact extends Component {
    render() {
        return (
            <div>
                <div class="Container">
                    <div class="first-component">
                        <h2 id="clients">PRAISE FROM CLIENTS</h2>
                    </div>
                    <div class="first-component">
                        <div class="First-profile">
                            <div class="Image-profile">
                                <img src="../assets/img/person/client.jpg" alt="" />
                            </div>
                            <div class="Content-profile">
                                <h4 className="name-client">ALISON HALVERSTON</h4>
                                <p className="feedback-client">Testimonials are brief statements from your brand's favorite words. It's a great way to convince customers to try your services</p>
                            </div>
                        </div>
                        <div class="First-profile">
                            <div class="Image-profile">
                                <img src="../assets/img/person/client.jpg" alt="" />
                            </div>
                            <div class="Content-profile">
                                <h4 className="name-client">SARAH JORDAN</h4>
                                <p className="feedback-client">Testimonials are brief statements from your brand's favorite words. It's a great way to convince customers to try your services</p>
                            </div>
                        </div>
                        <div class="First-profile">
                            <div class="Image-profile">
                                <img src="../assets/img/person/client.jpg" alt="" />
                            </div>
                            <div class="Content-profile">
                                <h2 className="name-client">JANICE MONTGOMERY</h2>
                                <p className="feedback-client">Testimonials are brief statements from your brand's favorite words. It's a great way to convince customers to try your services</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

