import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Move_to_top from "../../Components/MoveToTop";
import ContentSession from "./ContentSession";

export default function Session() {
  return (
    <>
      <Move_to_top/>
      <Header/>
      <Banner name ="Session"/>
      <ContentSession/>
      <Footer/>
    </>
  );
}
