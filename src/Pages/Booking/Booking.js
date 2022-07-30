import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

import { apiBooked, availableSession } from "../../Services/API/callApi";

moment.locale("en-VN");
const localizer = momentLocalizer(moment);

export default function ReactBigCalendar() {
  const beforeWorkMorning = 8,
    lunch = [11, 12, 13],
    afterWorking = [16, 17];
  const borderWorkHour = [beforeWorkMorning, ...lunch, ...afterWorking];
  const workingMinutes = [0, 30];
  const timeSessionPro = 2;
  // handle navigate
  const history = useNavigate();
  const id = useParams();

  const [eventsData, setEventsData] = useState([]);

  const [times, setTimes] = useState(() => {
    if (parseInt(id.id) === 3) return 3;
    else return 1;
  });
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
      ...((moment(date).hour() <= borderWorkHour[0] ||
        moment(date).day() === 0 ||
        moment(date).hour() === borderWorkHour[2] ||
        (moment(date).hour() === borderWorkHour[3] &&
          moment(date).minute() < workingMinutes[1]) ||
        moment(date).hour() >= borderWorkHour[5] ||
        (moment(date).hour() === borderWorkHour[4] &&
          moment(date).minute() >= workingMinutes[1])) && {
        style: {
          backgroundColor: "#fff990",
          color: "black",
        },
      }),
    }),
    []
  );

  const handleTimes = () => {
    if (times > 0) {
      setTimes((pre) => pre - 1);
    }
  };

  const handleSelect = ({ start, end }) => {
    // pass working time
    // start.getHours() > 8 && start.getHours() <= 11 && (end.getHours() <= 11 ||(end.getHours() <= 12 && end.getMinutes() < 30))
    if (availableMorning(start, end) || availableAfternoon(start, end)) {
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

  const availableMorning = (start, end) => {
    if (
      start.getHours() > borderWorkHour[0] &&
      (end.getHours() <= borderWorkHour[1] ||
        (end.getHours() <= borderWorkHour[2] &&
          end.getMinutes() < workingMinutes[1]))
    )
      return true;
    return false;
  };
  const availableAfternoon = (start, end) => {
    if (
      (start.getHours() > borderWorkHour[3] ||
        (start.getHours() === borderWorkHour[3] &&
          start.getMinutes() >= workingMinutes[1])) &&
      (end.getHours() <= borderWorkHour[4] ||
        (end.getHours() === borderWorkHour[4] &&
          end.getMinutes() === workingMinutes[1]))
    )
      return true;
    return false;
  };
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
      start.getHours() + timeSessionPro === end.getHours() &&
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
      start.getHours() + timeSessionPro === end.getHours() &&
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

  const handleConfirm = () => {
    console.log("test");
    history("/check-out", { state: { pick, session: id.id } });
  };
  const convertDateTime = (arr)=>{
    return arr.map(item=>({...item,
        start : new Date(item.start),
        end : new Date(item.end)
    }))
  }
  useEffect(() => {
    availableSession(id.id)
      .then(apiBooked().then((res) => {
        setEventsData(convertDateTime(res.data.data));
      }))
      .catch(res=>history("/error"));
  }, []);
    console.log(eventsData);
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
