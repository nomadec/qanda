import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

const defaultTimer = 30;
const timerInitialColor = 'info';
const timerHalfColor = 'warning';
const timerEndingColor = 'error';

const Timer = ({ seconds = defaultTimer, started = false }) => {
  const [time, setTime] = useState(seconds);
  const [timerRef, setTimerRef] = useState(undefined);
  const [timerColor, setTimerColor] = useState(timerInitialColor);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    updatedTimerStatus();

    return cleanUpOnUnmount;
  }, [started]);

  function updatedTimerStatus() {
    if (started) {
      stopTimer();
      startTimer();
    } else {
      stopTimer();
    }
  }

  useEffect(() => {
    changeTimerColor();
  }, [time]);

  function startTimer() {
    const intervalRef = setInterval(tickTack, 1000);
    setTimerRef(intervalRef);
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
        const currProgress = 100 - ((prevState - 1) / defaultTimer) * 100;
        setProgress(currProgress);
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
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        variant="determinate"
        value={progress}
        size={70}
        thickness={5.5}
        color={timerColor}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h6" component="div">
          {dayjs.duration(time * 1000).format('mm:ss')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Timer;
