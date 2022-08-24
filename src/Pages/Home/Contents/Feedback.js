import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Feedback.css";
import { feedbackCustomer } from "../../../Services/Api/callApi";

export default function Feedback() {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        feedbackCustomer("numberOfComments=6").then(({ data }) =>
        setComments(data.data)
        );
    }, []);
    
    return (
        <div className="feedback">
        <div class="container">
            <h2 className="pt-3">PRAISE FROM CLIENTS</h2>
            <ul class="cards cards-feedback">
            {comments.map((comment) => {
                return (
                <li class="card">
                    <img
                    style={{ display: "flex", margin: "0 auto" }}
                    className="icon-feedback"
                    src="../assets/img/person/avatar.png"
                    alt=""
                    />
                    <div>
                    <h3 class="card-title text-center">{comment.user}</h3>
                    <div class="card-content">
                        <p>{comment.content}</p>
                    </div>
                    </div>
                </li>
                );
            })}
            </ul>
        </div>
        </div>
    );
}
