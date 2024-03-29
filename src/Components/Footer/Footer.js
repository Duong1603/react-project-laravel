import React from "react";
import { navLink } from "../../Services/NavLink";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="page-footer ">
            <div className="container">
                <div className="row px-md-3">
                    <div className="col-sm-6 col-lg-3 py-3">
                        <h5>Company</h5>
                        <ul className="footer-menu">
                            {navLink.map((item,i)=>
                            <li key={i}>
                                <Link to={item.to}>
                                    {item.name}
                                </Link>
                            </li>)}
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 py-3">
                        <h5>More</h5>
                        <ul className="footer-menu">
                        <li>
                            <a href="# ">Terms &amp; Condition</a>
                        </li>
                        <li>
                            <a href="# ">Privacy</a>
                        </li>
                        <li>
                            <a href="# ">Advertise</a>
                        </li>
                        <li>
                            <a href="# ">Join as Doctors</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 py-3">
                        <h5>Our partner</h5>
                        <ul className="footer-menu">
                        <li>
                            <a href="# ">One-Fitness</a>
                        </li>
                        <li>
                            <a href="# ">One-Drugs</a>
                        </li>
                        <li>
                            <a href="# ">One-Live</a>
                        </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-lg-3 py-3">
                        <h5>Contact</h5>
                        <p className="footer-link mt-2">
                        351 Willow Street Franklin, MA 02038
                        </p>
                        <a href="tel:0977733703" className="footer-link">
                        097 7733 703
                        </a>
                        <a href="mailto:Phionapham87@gmail.com"
                        className="footer-link">
                        Phionapham87@gmail.com
                        </a>
                        <h5 className="mt-3">Social Media</h5>
                        <div className="footer-sosmed mt-3">
                        <a href="# " target="_blank">
                            <span className="mai-logo-facebook-f" />
                        </a>
                        <a href="# " target="_blank">
                            <span className="mai-logo-twitter " />
                        </a>
                        <a href="# " target="_blank">
                            <span className="mai-logo-google-plus-g" />
                        </a>
                        <a href="# " target="_blank">
                            <span className="mai-logo-instagram" />
                        </a>
                        <a href="# " target="_blank">
                            <span className="mai-logo-linkedin" />
                        </a>
                        </div>
                    </div>
                </div>
                <hr />
                <p id="copyright">
                Copyright © 2022{" "}
                <a href="https://www.passerellesnumeriques.org/en/our-actions/vietnam/" >
                Passerelles numériques Vietnam
                </a>
                . All right reserved
                </p>
            </div>
        </footer>
    );
}
