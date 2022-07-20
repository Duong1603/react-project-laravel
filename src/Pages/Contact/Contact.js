import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Form from "../../Components/Form/Form";
import Header from "../../Components/Header/Header";
export default function Contact() {
    const lb = {
        form_name: "Get in touch",
        name1: "Name",
        name2: "Email",
        name3: "Subject",
        name4: "Detail more your problem",
    };
    return (
        <>
        <Header />
        <Banner name={"Contact"} />
        <div className="page-section">
            <div className="container">
            <Form lb={lb} />
            </div>
        </div>
        <Footer />
        </>
    );
}
