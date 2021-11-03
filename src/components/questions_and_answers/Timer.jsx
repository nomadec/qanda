import React, { useEffect, useState } from "react";

const defaultTimer = 30;
const timerInitial = "timer_initial";
const timerHalf = "timer_half";
const timerEnding = "timer_ending";

const Timer = ({ studentInx, questionInx }) => {
  const [time, setTime] = useState(defaultTimer);
  const [timerRef, setTimerRef] = useState(undefined);
  const [timerColor, setTimerColor] = useState(timerInitial);

  useEffect(() => {
    setTime(defaultTimer);
    clearInterval(timerRef);
    const intervalRef = setInterval(tickTack, 1000);
    setTimerRef(intervalRef);

    return () => clearInterval(timerRef);
  }, [studentInx]);

  useEffect(() => {
    changeTimerColor();
  }, [time]);

  useEffect(() => {
    clearInterval(timerRef);
    console.log(timerRef);
    setTime(defaultTimer);
  }, [questionInx]);

  function tickTack() {
    setTime((prevState) => {
      if (prevState > 0) {
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  }

  function changeTimerColor() {
    if (time <= defaultTimer / 3) {
      setTimerColor(timerEnding);
    } else if (time <= defaultTimer / 2) {
      setTimerColor(timerHalf);
    }
  }

  return <div className={`timer ${timerColor}`}>{time}</div>;
};

export default Timer;
