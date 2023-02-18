import React, { FC, useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { Colors } from "../models/Colors";

const Timer = () => {
  const {
    decrementBlackTime,
    decrementWhiteTime,
    setTime,
    endTimer,
    restartGame,
  } = useActions();

  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  const { whiteTime, blackTime, currentPlayer } = useTypedSelector(
    (state) => state.gameInfo
  );
  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  useEffect(() => {
    endTheGame();
  }, [blackTime, whiteTime]);

  function endTheGame() {
    if (whiteTime && blackTime) {
      if (whiteTime <= 0 || blackTime <= 0) {
        if (timer.current) {
          clearInterval(timer.current);
          endTimer();
        }
      }
    }
  }

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function handleRestart() {
    setTime(null);
    if (timer.current) {
      clearInterval(timer.current);
    }
    restartGame();
  }

  return (
    <div>
      <div>
        <button onClick={handleRestart}>Restart game</button>
        <div>Черные {blackTime}</div>
        <div>Белые {whiteTime}</div>
      </div>
    </div>
  );
};

export default Timer;
