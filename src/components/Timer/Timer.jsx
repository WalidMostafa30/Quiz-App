/* eslint-disable react/prop-types */
import { useEffect } from "react";
import "./Timer.css";

const Timer = ({ setDisabled, seconds, setSeconds }) => {
  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds !== 0) {
        setSeconds((prevSeconds) => prevSeconds - 1);
      } else {
        setDisabled(true);
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, setDisabled, setSeconds]);

  return (
    <div className="Quiz__timer">
      <span className="min">00</span> :{" "}
      <span className="sec">{seconds < 10 ? "0" + seconds : seconds}</span>
    </div>
  );
};

export default Timer;
