import React from "react";
import Banner from "../../Components/Banner/Banner";
import Move_to_top from "../../Components/MoveToTop";
import ContentSession from "./ContentSession";

export default function Session() {
    return (
        <>
            <Move_to_top />
            <Banner name="Session" />
            <ContentSession />
        </>
    );
}
