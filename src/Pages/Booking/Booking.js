import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useParams } from "react-router";
import { Link,useNavigate } from "react-router-dom";

import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { availableSession } from "../../Services/API/availableSession";


moment.locale("en-VN");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

    // handle navigate
    const history = useNavigate();
    const id = useParams();

    const [eventsData, setEventsData] = useState([]);

    const [times, setTimes] = useState(
        ()=>{
            if(id.id === 3) return 3
            else return 1
        }
    );
    const [pick, setPick] = useState([]);
   
    const slotPropGetter = useCallback(
        (date) => ({
        className: "slotDefault",
        // can not pick day< now
        ...(moment(date) < new Date() && {
            style: {
            backgroundColor: "darkgreen",
            color: "white",
            },
        }),
        // can not pick out side working time
        ...((moment(date).hour() <= 8 ||
            moment(date).day() === 0 ||
            moment(date).hour() === 12 ||
            (moment(date).hour() === 13 && moment(date).minute() < 30) ||
            moment(date).hour() >= 17 ||
            (moment(date).hour() === 16 && moment(date).minute() >= 30)) && {
            style: {
            backgroundColor: "#fff990",
            color: "black",
            },
        }),
        }),
        []
    );

    const handleTimes = ()=>{
        if(times>0){
            setTimes(pre=>pre-1)
        }
    }

    const handleSelect = ({ start, end }) => {

        // pass working time
        // start.getHours() > 8 && start.getHours() <= 11 && (end.getHours() <= 11 ||(end.getHours() <= 12 && end.getMinutes() < 30))
        if (availableMorning(start,end) || availableAfternoon(start,end)) {
        // pass time > now
        if (start >= new Date()) {
            switch (parseInt(id.id)) {
            case 1:
                pickSession1(start, end);
                handleTimes();
                break;
            case 2:
                pickSession2(start, end);
                handleTimes();
                break;
            default:
                pickSession3(start, end);
                break;
            }
        }
        }
    };

    const availableMorning = (start,end)=>{
       if( start.getHours() > 8 && (end.getHours() <= 11 ||(end.getHours() <= 12 && end.getMinutes() < 30)) ) return true
       return false
    }
    const availableAfternoon = (start,end)=>{
        if((start.getHours() > 13  || (start.getHours() === 13 && start.getMinutes() >= 30))  && (end.getHours() <= 15 || end.getHours() === 16 && end.getMinutes()===30)) return true
        return false
    }
    const pickSession1 = (start, end) => {
        if (
        start.getHours() === end.getHours() ||
        (start.getHours() === end.getHours() - 1 &&
            start.getMinutes() > end.getMinutes())
        ) {
        setPick([
            {
            start,
            end,
            title: "test",
            },
        ]);
        }
    };

    const pickSession2 = (start, end) => {
        if (
        start.getHours() + 2 === end.getHours() &&
        start.getMinutes() === end.getMinutes()
        ) {
        setPick([
            {
            start,
            end,
            title: "test",
            },
        ]);
        }
    };

    const pickSession3 = (start, end) => {
        if (
        start.getHours() + 2 === end.getHours() &&
        start.getMinutes() === end.getMinutes()
        ) {
        if (pick.length == 3) {
            setPick([
            ...pick.splice(1),
            {
                start,
                end,
                title: "test",
            },
            ]);
        } else {
            setPick([
            ...pick,
            {
                start,
                end,
                title: "test",
            },
            ]);
            setTimes((pre) => pre - 1);
        }
        }
    };

    const handleConfirm = ()=>{
        console.log("test");
        history('/check-out', { state:{pick,session:id.id} });
    }

    useEffect(() => {
        availableSession(id.id).then((response) => {
            if (response.data.code == 404) history("/error");
            else setEventsData(events);
        });
    }, []);
    
    return (
        <div className="App">
            <h1>Time for GMT+7</h1>
            <h2>you have: {times === 0 ? times + " But you can change " : times} </h2>
            <h2>{parseInt(id.id) > 0 ? parseInt(id.id) : "id is not a number"}</h2>
            <button onClick={() => history(-1)}>back</button>
            <Calendar
                views={["day", "agenda", "month", "week"]}
                selectable
                localizer={localizer}
                defaultDate={new Date()}
                defaultView="week"
                events={[...eventsData, ...pick]}
                style={{ height: "100vh" }}
                onSelectEvent={(event) => alert(event.title)}
                onSelectSlot={handleSelect}
                slotPropGetter={slotPropGetter}
            />
            <button onClick={handleConfirm}>Pick</button>
        </div>
    );
}
