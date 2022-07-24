import React from "react";
import { useNavigate } from "react-router";
import Form from "../../Components/Form/Form_copy";

export default function CheckOut() {
    const history = useNavigate();
    const handlerClick = () => {
        return history(-1);
    };
    const lb = {
        form_name: "Get in touch",
        name1: "Phone",
        name2: "Email",
        name3: "Full name",
        name4: "Detail more your problem",
    };

    return (
        <div>
        <h2>this is checkout page</h2>
        <button onClick={handlerClick}>back</button>
        <Form  lb={lb} />
        </div>
    );
    }
