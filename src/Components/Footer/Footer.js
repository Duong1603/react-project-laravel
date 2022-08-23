import React from "react";
import { navLink } from "../../Services/NavLink";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="page-footer">
      <div
        className="container page-footer-group"
        style={{ display: "flex", justifyContent: "space-around" }}
      >
        {/*  */}
        <div className="row px-md-3 block-left">
          <div className="">
            <h3>Phi Phi</h3>
            <Link className="navbar-brand " to={"/"}>
              <img
                style={{ width: "9rem", borderRadius: "10px" }}
                src="/assets/img/logoPhiPhi.png"
              />
            </Link>
            <div
              className="footer-sosmed mt-3"
              style={{ display: "flex", gap: "10px" }}
            >
              <a href="# " target="_blank">
                <span className="mai-logo-facebook-f" />
              </a>
              <a href="# " target="_blank">
                <span className="mai-logo-twitter" />
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
        {/*  */}
        <div
          className="row px-md-3 block-right"
          style={{ display: "flex", gap: "212px" }}
        >
          <div className="">
            <h5>Menu</h5>
            <ul className="footer-menu">
              {navLink.map((item, i) => (
                <li key={i}>
                  <Link to={item.to}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="col-sm-6 col-lg-4 py-4">
                    <h5>Our partner</h5>
                    <ul className="footer-menu">
                    <li>
                        <a href="https://www.passerellesnumeriques.org/vi/cac-trung-tam/vietnam/">
                        Passerelles numériques Vietnam
                        </a>
                    </li>
                    </ul>
                </div> */}
          <div className="">
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
          </div>
        </div>
        {/* <hr />
                <p id="copyright">
                Copyright © 2022{" "}
                <a href="https://www.passerellesnumeriques.org/en/our-actions/vietnam/">
                    Passerelles numériques Vietnam
                </a>
                . All right reserve
                </p> 
                </p>  */}
      </div>
    </footer>
  );
}
