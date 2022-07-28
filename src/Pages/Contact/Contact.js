import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContact } from "../../Services/API/contactService";
import Banner from "../../Components/Banner/Banner";
import FormHandle from "../../Components/Form/FormHandle";
import Swal from "sweetalert2";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        description: "",
    });

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((pre) => ({ ...pre, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        postContact(form)
        .then((res) => {
            const err = res.data.errors;
            err !== undefined
            ? Swal.fire({
                title: "Error!",
                html: 
                
                    `<p>${err.name === undefined ? " ": err.name }</p>
                    <p>${err.description === undefined ? " ": err.description}</p>
                    <p>${err.phone === undefined ? " ": err.phone}</p>
                    <p>${err.email === undefined ? " ": err.email}</p>`,
                icon: "error",
                confirmButtonText: "Got it",
                })
            : Swal.fire("Good job!", res.data.message, "success")
                .then(
                (result) => {
                    // move to home page
                    navigate("/");
                }
                );
        })
        .catch((err) => console.log(err));
    };

    const lb = {
        form_name: "Get in touch",
        name1: "Phone",
        name2: "Email",
        name3: "Full name",
        name4: "Detail more your problem",
    };

    return (
        <>
            <MoveToTop/>
            <Banner name={"Contact"} />
            <div className="page-section">
                <div className="container">
                <FormHandle
                    form={form}
                    setForm={handleInput}
                    lb={lb}
                    action={handleSubmit}
                />
                </div>
            </div>
        </>
    );
}
