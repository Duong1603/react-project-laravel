import React from "react";
import About from "./Contents/About";
import Feedback from "./Contents/Feedback";
import Introduction from "./Contents/Introduction";
import NewPost from "./Contents/NewPost";
import Slide from "./Contents/Slide";
import Slogan from "./Contents/Slogan";
import Work from "./Contents/Work";

export default function Content() {
    return (
        <>
            <Slide></Slide>
            <Introduction></Introduction>
            <About></About>
            <Work></Work>
            <NewPost></NewPost>
            <Feedback></Feedback>
            <Slogan></Slogan>
        </>
    );
}
