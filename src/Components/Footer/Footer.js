import React from "react";
import { navLink } from "../../Services/NavLink";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <footer className="page-footer ">
            <div className="container">
                <div className="row px-md-3">
                <div className="col-sm-6 col-lg-4 py-4">
                    <h5>Company</h5>
                    <ul className="footer-menu">
                    {navLink.map((item, i) => (
                        <li key={i}>
                        <Link to={item.to}>{item.name}</Link>
                        </li>
                    ))}
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-4 py-4">
                    <h5>Our partner</h5>
                    <ul className="footer-menu">
                    <li>
                        <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/">
                        Passerelles numériques Vietnam
                        </a>
                    </li>
                    </ul>
                </div>
                <div className="col-sm-6 col-lg-4 py-4">
                    <h5>Contact</h5>
                    <ul className="footer-menu">
                    <li>
                        <a href="tel:0977733703" className="footer-link">
                        097 7733 703
                        </a>
                    </li>
                    <li>
                        <a href="mailto:Phionapham87@gmail.com" className="footer-link">
                        Phionapham87@gmail.com
                        </a>
                    </li>
                    </ul>
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
                <a href="https://www.passerellesnumeriques.org/en/our-actions/vietnam/">
                    Passerelles numériques Vietnam
                </a>
                . All right reserved
                </p>
            </div>
        </footer>
    );
}
