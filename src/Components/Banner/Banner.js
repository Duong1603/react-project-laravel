import React from "react";
import { Link } from "react-router-dom";
export default function Banner(props) {
    return (
        <div
        className="page-banner overlay-dark bg-image"
        style={{ backgroundImage: "url(../assets/img/bg_image_1.jpg)" }}
        >
        <div className="banner-section">
            <div className="container text-center wow fadeInUp">
            <nav aria-label="Breadcrumb">
                <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
                <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {props.name}
                </li>
                </ol>
            </nav>
            <h1 className="font-weight-normal-banner">{props.name}</h1>
            </div>
        </div>
        </div>
    );
}
