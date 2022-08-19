import React, { useState, useCallback, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import "./Booking.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { apiBooked, availableSession } from "../../Services/Api/callApi";

moment.locale("en-VN");
const localizer = momentLocalizer(moment);

export default function Booking() {
  const beforeWorkMorning = 8,
    lunch = [11, 12, 13],
    afterWorking = [16, 17];
  const borderWorkHour = [beforeWorkMorning, ...lunch, ...afterWorking];
  const workingMinutes = [0, 30];
  const timeSessionPro = 2;

  const history = useNavigate();
  const id = useParams();
  const [eventsData, setEventsData] = useState([]);
  const [times, setTimes] = useState(() => {
    if (parseInt(id.id) === 3) return 3;
    else return 1;
  });
  const [pick, setPick] = useState([]);

  const pickTime = (start, end) => ({
    start,
    end,
    title: " meeting with mr Phuong",
  });

  const slotPropGetter = useCallback(
    (date) => ({
      className: "slotDefault",

      ...(moment(date) < new Date() && {
        style: {
          backgroundColor: "darkgreen",
          color: "white",
        },
      }),

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
    if (availableMorning(start, end) || availableAfternoon(start, end)) {
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
      setPick([pickTime(start, end)]);
    }
  };

  const pickSession2 = (start, end) => {
    if (
      start.getHours() + timeSessionPro === end.getHours() &&
      start.getMinutes() === end.getMinutes()
    ) {
      setPick([pickTime(start, end)]);
    }
  };

  const pickSession3 = (start, end) => {
    if (
      start.getHours() + timeSessionPro === end.getHours() &&
      start.getMinutes() === end.getMinutes()
    ) {
      if (pick.length == 3) {
        setPick([...pick.splice(1), pickTime(start, end)]);
      } else {
        setPick([...pick, pickTime(start, end)]);
        setTimes((pre) => pre - 1);
      }
    }
  };

  const handleConfirm = () => {
    console.log(pick);
    history("/check-out", { state: { pick, session: id.id } });
  };
  const convertDateTime = (arr) => {
    return arr.map((item) => ({
      ...item,
      start: new Date(item.start),
      end: new Date(item.end),
    }));
  };
  useEffect(() => {
    availableSession(id.id)
      .then(
        apiBooked().then((res) => {
          setEventsData(convertDateTime(res.data.data));
        })
      )
      .catch((res) => history("/error"));
  }, []);
  return (
    <div className="App">
      <h1>Time for GMT+7</h1>
      <h2>You have: {times === 0 ? times + " But you can change " : times} </h2>

      <div className="btn__pick--class">
        <button
          onClick={() => history(-1)}
          className="btn btn-primary"
          id="btn__back"
        >
          Back
        </button>
        <button
          onClick={handleConfirm}
          className="btn btn-primary"
          id="btn__pick"
        >
          Pick
        </button>
      </div>
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
        className="view__calendar mb-2"
      />
    </div>
  );
}
