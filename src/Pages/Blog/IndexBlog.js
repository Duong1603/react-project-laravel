import React from "react";
import Banner from "../../Components/Banner/Banner";
import Card from "./Card";
import Cardleft from "./Cardleft";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
export default function IndexBlog() {
    return (
        <>
            <MoveToTop />
            <Banner name={"Blogs"}></Banner>
            <div className="row">
                <Card></Card>
                <Cardleft></Cardleft>
            </div>
        </>
    );
}
