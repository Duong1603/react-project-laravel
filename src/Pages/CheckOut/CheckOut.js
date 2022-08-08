import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form_copy";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./CheckOut.css";

import {
//   calculateFee,
//   calculateFeeQr,
  submit,
} from "../../Services/Api/callApi";

export default function CheckOut() {
    const lb = {
        form_name: "Booking",
        name1: "Phone",
        name2: "Email",
        name3: "Full name",
        name4: "Detail more your problem",
    };
   
    const handleSubmit = () => {
        
        console.log(form);
        // if (form.payment === "momo-qr")
        //   calculateFeeQr().then((res) => {
        //     console.log(res);
        //     window.location.href = res.data.url;
        //   });
        // else {
        //   calculateFee().then((res) => {
        //     console.log(res);
        //     window.location.href = res.data.url;
        //   });
        // }
        submit()
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err));
    };
    const history = useNavigate();

    const [data, setData] = useState({ lb, isLoaded: false });
    const [form, setForm] = useState({});

    const { state } = useLocation();

    const handlerClick = () => {
        return history(-1);
    };

    useEffect(() => {
        if (state == null) {
        history("/error");
        } else {
        setData((pre) => ({ ...pre, isLoaded: true, state }));
        }
    }, []);

    return (
        <div>
        <h2>This is checkout page </h2>
        <button onClick={handlerClick}>Back </button>
        {data.isLoaded ? (
            <Form
            form={form}
            onSetForm={setForm}
            onSummitForm={() => handleSubmit()}
            data={data}
            />
        ) : (
            ""
        )}
        </div>
    );
}
