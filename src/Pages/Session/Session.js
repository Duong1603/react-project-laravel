import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Move_to_top from "../../Components/Move_to_top";
import ContentSession from "./ContentSession";

export default function Session() {
  return (
    <>
      <Move_to_top />
      <Header />
      <ContentSession />
      <Footer />
    </>
  );
}
