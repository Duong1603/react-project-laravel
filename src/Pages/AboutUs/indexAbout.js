import React from "react";
import Welcome_to from "./Welcome_to";
import Our_doctor from "./Our_doctor";
import Top_about from "./Top_about";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
export default function indexAbout() {
  return (
    <>
        <MoveToTop/>
        <Header />
        <Banner name={"About Us"} />
        <div className="page-section">
            <div className="container">
                <Top_about/>
                <Welcome_to/>
                <Our_doctor/>
            </div>
        </div>
        <Footer />
        </>
  );
}
