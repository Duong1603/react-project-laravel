import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {useNavigate} from "react-router-dom"
import Form from "../../Components/Form/Form_copy";

export default function CheckOut() {

    const lb = {
        form_name: "Get in touch",
        name1: "Phone",
        name2: "Email",
        name3: "Full name",
        name4: "Detail more your problem",
    };
    
    const history = useNavigate();

    const [data,setData] = useState({lb,isLoaded : false});
    const { state } = useLocation();

    const handlerClick = () => {
        return history(-1);
    };


    useEffect(()=>{
        if(state == null){
            history("/error")
        }
        else {
            
            setData(pre=>({...pre,isLoaded:true,state}))
        }
    },[])

    return (
        <div>
        <h2>this is checkout page </h2>
        <button onClick={handlerClick}>back</button>
        {data.isLoaded ?<Form lb={data} /> :""}
        </div>
    );
    }
