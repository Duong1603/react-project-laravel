import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useParams } from "react-router";

moment.locale("en-VN");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {

    // booking for session 2 hours

    const [eventsData, setEventsData] = useState([]);

    const [pick, setPick] = useState([]);

    const id = useParams();

    const slotPropGetter = useCallback((date) => (
        {
            className: "slotDefault",
            // can not pick day< now
            ...(moment(date) < new Date() && {
                style: {
                  backgroundColor: 'darkgreen',
                  color: 'white',
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
           
        }
    ), []);

    useEffect(() => {
        setEventsData(events);
    }, []);

    const handleClick = () => {
        alert(pick.map(item=>(item.start+item.end)))
    };

    const handleSelect = ({ start, end }) => {
        console.log(start.getDay());
        console.log(end);
        // pass working time
        if (
            (start.getHours() > 8 &&
                start.getHours() <= 11 &&
                (end.getHours() <= 11 ||
                (end.getHours() <= 12 && end.getMinutes() < 30))) ||
            (start.getHours() > 13 && start.getHours() < 17) ||
            (start.getHours() === 13 &&
                start.getMinutes() >= 30 &&
                start.getHours() < 17)
            ) {
            // pass time > now 
            if (start >= new Date()) {
                // pass 30 minutes
                if ( start.getHours() + 2 === end.getHours() && start.getMinutes() === end.getMinutes() ) {
                setPick([
                    {
                    start,
                    end,
                    title: "test",
                    },
                ]);
                }
            }
            }
    };
    
    return (
        <div className="App">
            <h1>Time for GMT+7</h1>
            
            <h2>{parseInt(id.id) > 0 ? parseInt(id.id):"id is not a number"}</h2>
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
        <button onClick={handleClick}>confirm pick</button>
        </div>  
    );
}