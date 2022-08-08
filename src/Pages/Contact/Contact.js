import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postContact } from "../../Services/Api/contactService";
import Banner from "../../Components/Banner/Banner";
import FormHandle from "../../Components/Form/FormHandle";
import MoveToTop from "../../Components/MoveToTop/MoveToTop";
import PreLoader from "../../Components/PreLoader/PreLoader";
import  { getModelFail,getModelSuccess } from "../../Services/Modal/Modal";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        problem: "",
    });
    const [isLoad, setIsLoad] = useState(false);

    const navigate = useNavigate();

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm((pre) => ({ ...pre, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoad(true);
        postContact(form)
        .then((res) => {
            setIsLoad(false);
            getModelSuccess( res.data.message)
            .then(result =>  navigate("/"));
        })
        .catch((err) => {
            setIsLoad(false);
            getModelFail(err.response.data.error);
        });
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
        <MoveToTop />
        <Banner name={"Contact"} />
        <div className="page-section">
            {isLoad ? (
            <PreLoader />
            ) : (
            <div className="container">
                <FormHandle
                form={form}
                setForm={handleInput}
                lb={lb}
                action={handleSubmit}
                />
            </div>
            )}
        </div>
        </>
    );
}
