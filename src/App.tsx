import React, { useEffect, useState } from "react";
import "./App.css";
import BoardComponent from "./components/BoardComponent";
import LostFigures from "./components/LostFigures";
import PlayAgain from "./components/PlayAgain";
import Timer from "./components/Timer";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { connectSocket } from "./socket/socket";
import JoinRoom from "./components/JoinRoom";
function App() {
  const { isMate, isTimerEnded, currentPlayer, board, whiteTime } =
    useTypedSelector((state) => state.gameInfo);
  const { restartGame, setTime } = useActions();

  const [userTime, setUserTime] = useState<string>("");

  useEffect(() => {
    connectSocket();
  }, []);

  useEffect(() => {
    restartGame();
  }, []);

  return (
    <div className="app">
      <JoinRoom />
      {!whiteTime ? (
        <div className="user-time-form">
          <label htmlFor="user-time">Введите время игры в минутах</label>
          <input
            type="text"
            id="user-time"
            maxLength={4}
            onChange={(e) => setUserTime(e.target.value)}
          />
          <button
            onClick={() => {
              if (Number(userTime)) {
                setTime(Number(userTime) * 60);
              }
            }}
          >
            Начать
          </button>
        </div>
      ) : isMate ? (
        <>
          <div>Шах и мат для {currentPlayer?.color}</div>
          <PlayAgain />
        </>
      ) : isTimerEnded ? (
        <PlayAgain />
      ) : (
        <>
          <Timer />
          <BoardComponent />
          <div>
            <LostFigures
              title="Черные фигуры"
              figures={board.lostBlackFigures}
            />
            <LostFigures
              title="Белые фигуры"
              figures={board.lostWhiteFigures}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
