import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router-dom";
import Form from "../../Components/Form/Form_copy";
import PreLoader from "../../Components/PreLoader/PreLoader";
import { submit } from "../../Services/Api/callApi";
import { formatDate } from "../../Services/Formatting/date";
import { getModelFail, getModelSuccess } from "../../Services/Modal/Modal";
import "./CheckOut.css";



export default function CheckOut() {
    const { state } = useLocation();
    const history = useNavigate();
    const lb = {
        form_name: "Booking",
        name1: "Phone",
        name2: "Email",
        name3: "Full name",
        name4: "Detail more your problem",
    };
    const formatDateAfterClick = (arr) => {
        return arr.map((item) => {
        const start_meeting =formatDate(item.start);
        const end_meeting = formatDate(item.end);
        return {
            start_meeting,
            end_meeting
        };
        });
    };
    const [data, setData] = useState({ lb, isLoaded: false });
    const [form, setForm] = useState({
        session: formatDateAfterClick(state.pick),
        package: state.session,
    });
    const [preLoad, setPreLoad] = useState(false);

    const handleSubmit = () => {
        formatDateAfterClick(state.pick);
      
        setPreLoad(true);
        submit(form)
        .then((res) => {
        
            setPreLoad(false);
            getModelSuccess(res.data.message).then((result) => history("/"));
        })
        .catch((err) => {
       
            setPreLoad(false);
            getModelFail(err.response.data.error);
        });
    };

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
        {preLoad ? (
            <PreLoader />
        ) : data.isLoaded ? (

            <Form
            form={form}
            onSetForm={setForm}
            onSummitForm={handleSubmit}
            data={data}
            />
        ) : (
            ""
        )}
        </div>
    );
}
