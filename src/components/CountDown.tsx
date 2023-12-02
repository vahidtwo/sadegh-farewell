import { FC, useEffect } from "react";
import "./count-down.css";

const countdownDate = new Date("2023-12-11T16:00:00Z").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const difference = countdownDate - now;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);
  const milliseconds = Math.floor(difference % 1000);

  document.getElementById("days")!.innerText = days.toString().padStart(2, "0");
  document.getElementById("hours")!.innerText = hours
    .toString()
    .padStart(2, "0");
  document.getElementById("minutes")!.innerText = minutes
    .toString()
    .padStart(2, "0");
  document.getElementById("seconds")!.innerText = seconds
    .toString()
    .padStart(2, "0");
  document.getElementById("milliseconds")!.innerText = milliseconds
    .toString()
    .padStart(3, "0");
};

const CountDown: FC = () => {
  useEffect(() => {
    const interval = setInterval(updateCountdown, 1);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="timer">
        <div className="time-cont">
          <div className="time" id="days">
            00
          </div>
          <span>Days</span>
        </div>
        <div className="time-cont">
          <div className="time" id="hours">
            00
          </div>
          <span>Hours</span>
        </div>
        <div className="time-cont">
          <div className="time" id="minutes">
            00
          </div>
          <span>Minutes</span>
        </div>
        <div className="time-cont">
          <div className="time" id="seconds">
            00
          </div>
          <span>Seconds</span>
        </div>
        <div className="time-cont">
          <div className="time milisecs" id="milliseconds">
            000
          </div>
          <span>Miliseconds</span>
        </div>
      </div>
      <p className="timer-description">until Sadegh's farewell...</p>
    </>
  );
};

export default CountDown;
