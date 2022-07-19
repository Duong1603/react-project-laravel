import React from "react";
// import Welcome_to from "./Welcome_to";
// import Our_doctor from "./Our_doctor";
// import Top_about from "./Top_about";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";

export default function indexAbout() {
  return (
    <>
        <Header />
        <Banner name={"AboutUs"} />
        <div className="page-section">
            <div className="container">
                <top_about/>
                <welcome_to/>
                <our_doctor/>
            </div>
        </div>
        <Footer />
        </>
  );
}
