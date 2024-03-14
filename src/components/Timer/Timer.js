import React, { useEffect, useState } from "react";
import "./Timer.css";

function Timer({ setshowModal }) {
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        if (minutes === 0) {
          clearInterval(timer);
          setshowModal(true);
        } else {
          setMinutes((prevMinutes) => prevMinutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds]);

  return (
    <div className="Quiz__timer">
      <span className="min">{minutes}</span> :{" "}
      <span className="sec">{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
  );
}

export default Timer;
