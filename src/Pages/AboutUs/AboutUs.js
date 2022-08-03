import React from "react";

import Banner from "../../Components/Banner/Banner";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
import Welcome from "./Welcome";
import TopAbout from "./TopAbout";
import OurDoctor from "./OurDoctor";
export default function AboutUs() {
    return (
        <>
        <MoveToTop />
        <Banner name={"About Us"} />
        <div className="page-section">
            <div className="container">
            <TopAbout />
            <Welcome />
            <OurDoctor />
            </div>
        </div>
        </>
    );
}
