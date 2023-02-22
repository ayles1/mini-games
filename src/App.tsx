import React from "react";
import Game from "./modules/game/Game";
import { Connection } from "./modules/connection";
import "./App.css";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { GameOptions } from "./modules/gameOptions";

const App = () => {
  const { isRoomReady } = useTypedSelector((state) => state.connection);
  const { isGameReadyToBegin } = useTypedSelector((state) => state.gameOptions);
  return (
    <div className="app">
      <Connection />

      {isRoomReady && !isGameReadyToBegin && <GameOptions />}
      {isGameReadyToBegin && <Game />}
    </div>
  );
};

export default App;
