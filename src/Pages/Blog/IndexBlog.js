import React from "react";
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Cardleft from "./Cardleft";

import CategoriesBlog from './CategoriesBlog';
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
export default function IndexBlog() {
    return (
        <>
            <MoveToTop />
            <Header></Header>
            <Banner name={"Blogs"}></Banner>
            <CategoriesBlog></CategoriesBlog>
            <Footer></Footer>
        </>
    );
}
