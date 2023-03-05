import React, { useEffect, useRef } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

const Timer = () => {
    const {
        decrementBlackTime,
        decrementWhiteTime,
        endTimer
    } = useActions();

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    const { whiteTime, blackTime, currentPlayer, usersNicknames, userColor} =
        useTypedSelector((state) => state.chess);
    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    useEffect(() => {
        checkGameEnding();
    }, [blackTime, whiteTime]);

    function checkGameEnding() {
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
            currentPlayer === 'w'
                ? decrementWhiteTime
                : decrementBlackTime;
        timer.current = setInterval(callback, 1000);
    }
    return (
        <div className="timer">
            <button>Покинуть игру</button>
            <div>Черные {blackTime}</div>
            <div>Белые {whiteTime}</div>

            <h3>
                Текущий игрок :{" "}
                {currentPlayer === userColor
                    ? usersNicknames.this
                    : usersNicknames.enemy}
            </h3>
        </div>
    );
};

export default Timer;