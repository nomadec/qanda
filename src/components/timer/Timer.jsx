import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import dayjs from 'dayjs';
import React, { useEffect, useState } from 'react';
import duration from 'dayjs/plugin/duration';
import ActionsMenu from '../ActionsMenu/ActionsMenu';
dayjs.extend(duration);

const defaultTimer = 30;
const defaultProgress = 100;
const timerInitialColor = 'info';
const timerHalfColor = 'warning';
const timerEndingColor = 'error';

const Timer = ({ seconds = defaultTimer, started = false }) => {
  const [time, setTime] = useState(seconds);
  const [isStarted, setIsStarted] = useState(false);

  const [timerRef, setTimerRef] = useState(undefined);
  const [timerColor, setTimerColor] = useState(timerInitialColor);
  const [progress, setProgress] = useState(defaultProgress);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    updatedTimerStatus();

    return cleanUpOnUnmount;
  }, [started, seconds]);

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
    setIsStarted(true);
  }

  function stopTimer() {
    clearInterval(timerRef);
    setTime(seconds);
    setProgress(defaultProgress);
    setTimerColor(timerInitialColor);
  }

  function cleanUpOnUnmount() {
    clearInterval(timerRef);
  }

  function tickTack() {
    setTime((prevState) => {
      if (prevState > 0) {
        const currProgress = 100 - ((prevState - 1) / seconds) * 100;
        setProgress(currProgress);
        return prevState - 1;
      } else {
        return prevState;
      }
    });
  }

  function changeTimerColor() {
    if (time <= seconds / 3) {
      setTimerColor(timerEndingColor);
    } else if (time <= seconds / 2) {
      setTimerColor(timerHalfColor);
    }
  }

  function handleMenuOpen() {
    setShowMenu(true);
  }

  function handleMenuClose() {
    setShowMenu(false);
  }

  function handleStart() {
    if (isStarted) {
      return;
    } else {
      startTimer();
    }
  }

  function handleReset() {
    stopTimer();
    startTimer();
  }

  return (
    <Box
      sx={{ position: 'relative', display: 'inline-flex' }}
      onMouseOver={handleMenuOpen}
    >
      <ActionsMenu
        showMenu={showMenu}
        handleMenuClose={handleMenuClose}
        handleStart={handleStart}
        handleReset={handleReset}
      />
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
