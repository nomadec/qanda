import React, { useEffect, useState } from "react";

const defaultTimer = 30;
const timerInitialColor = "timer_initial";
const timerHalfColor = "timer_half";
const timerEndingColor = "timer_ending";

const Timer = ({ studentInx, questionInx }) => {
  const [time, setTime] = useState(defaultTimer);
  const [timerRef, setTimerRef] = useState(undefined);
  const [timerColor, setTimerColor] = useState(timerInitialColor);

  useEffect(() => {
    startTimer();

    return cleanUpOnUnmount;
  }, [studentInx]);

  useEffect(() => {
    changeTimerColor();
  }, [time]);

  useEffect(() => {
    stopTimer();
  }, [questionInx]);

  function startTimer() {
    setTime(defaultTimer);
    setTimerColor(timerInitialColor);
    clearInterval(timerRef);
    if (studentInx > -1) {
      const intervalRef = setInterval(tickTack, 1000);
      setTimerRef(intervalRef);
    }
  }

  function stopTimer() {
    clearInterval(timerRef);
    setTime(defaultTimer);
    setTimerColor(timerInitialColor);
  }

  function cleanUpOnUnmount() {
    clearInterval(timerRef);
  }

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
      setTimerColor(timerEndingColor);
    } else if (time <= defaultTimer / 2) {
      setTimerColor(timerHalfColor);
    }
  }

  return (
    <div className="timer_block">
      <div className={`timer ${timerColor}`}>{time}</div>
    </div>
  );
};

export default Timer;
