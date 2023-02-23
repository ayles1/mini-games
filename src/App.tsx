import React, { useEffect } from "react";
import Game from "./modules/game/Game";
import { Connection } from "./modules/connection";
import "./App.css";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { GameOptions } from "./modules/gameOptions";
import { useActions } from "./hooks/useActions";
import { connectSocket } from "./socket/socket";

const App = () => {
  const { isRoomReady, isFirstPlayer } = useTypedSelector(
    (state) => state.connection
  );
  const { isGameReadyToBegin, usersTime, userColor } = useTypedSelector(
    (state) => state.gameOptions
  );
  const { whitePlayer, blackPlayer } = useTypedSelector(
    (state) => state.gameInfo
  );
  const { setIsChooser, setTime, setUserColor } = useActions();
  useEffect(() => {
    setIsChooser(isFirstPlayer);
  }, [isRoomReady]);
  useEffect(() => {
    setTime(usersTime);
  }, [isGameReadyToBegin]);
  useEffect(() => {
    if (whitePlayer && blackPlayer) {
      setUserColor(userColor === "white" ? whitePlayer : blackPlayer);
    }
  }, [whitePlayer]);
  useEffect(() => {
    connectSocket();
  }, []);
  return (
    <div className="app">
      <Connection />
      {isRoomReady && !isGameReadyToBegin && <GameOptions />}
      {isGameReadyToBegin && <Game />}
    </div>
  );
};

export default App;
