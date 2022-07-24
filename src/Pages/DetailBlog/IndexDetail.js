import React from "react";
import Detail from "./Detail";
import Cardleft from "../Blog/Cardleft";
import Banner from "../../Components/Banner/Banner";

export default function IndexDetail() {
    return (
        <>
            <Banner name={"DetailBlog"}></Banner>
            <div className="page-section pt-5">
                <div className="container">
                <div className="row">
                    <Detail></Detail>
                    <Cardleft></Cardleft>
                </div>
                </div>
            </div>
        </>
    );
}
