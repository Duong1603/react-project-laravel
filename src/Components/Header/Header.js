import React from "react";

export default function Header() {
    return (
        <header>
            <div className="topbar">
                <div className="container">
                <div className="row">
                    <div className="col-sm-8 text-sm">
                    <div className="site-info">
                        <a href="tel:0967733703">
                        <span className="mai-call text-primary" /> 0967733703
                        </a>
                        <span className="divider">|</span>
                        <a href="mailto:Phionapham87@gmail.com">
                        <span className="mai-mail text-primary" /> Phionapham87@gmail.com
                        </a>
                    </div>
                    </div>
                    <div className="col-sm-4 text-right text-sm">
                    <div className="social-mini-button">
                        <a href="#">
                        <img style={{width:'1.5rem'}} src="assets/fonts/vietnam.svg"/>
                        </a>
                        <a href="#">
                        <img style={{width:'1.5rem'}} src="assets/fonts/united-kingdom.svg"/>
                        </a>
                    </div>
                    </div>
                </div>{" "}
                {/* .row */}
                </div>{" "}
                {/* .container */}
            </div>{" "}
        {/* .topbar */}
            <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
                <div className="container">
                <a className="navbar-brand" href="#">
                    <span className="text-primary">One</span>-Health
                </a>
                <form action="#">
                    <div className="input-group input-navbar">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="icon-addon1">
                        <span className="mai-search" />
                        </span>
                    </div>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Enter keyword.."
                        aria-label="Username"
                        aria-describedby="icon-addon1"
                    />
                    </div>
                </form>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupport"
                    aria-controls="navbarSupport"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupport">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">
                        Home
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">
                        About Us
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="doctors.html">
                        Session
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                        News
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">
                        Contact
                        </a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="btn btn-primary ml-lg-3" href="#">
                        Login / Register
                        </a>
                    </li> */}
                    </ul>
                </div>{" "}
                {/* .navbar-collapse */}
                </div>{" "}
                {/* .container */}
            </nav>
        </header>
    );
}
