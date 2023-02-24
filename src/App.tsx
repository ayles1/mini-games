import React, { useEffect } from "react";
import "./App.css";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { connectSocket } from "./socket/socket";
import { Outlet, useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const { setIsChooser, setTime, setUserColor } = useActions();

  const { isRoomReady, isFirstPlayer } = useTypedSelector(
    (state) => state.connection
  );
  const { isGameReadyToBegin, usersTime, userColor } = useTypedSelector(
    (state) => state.gameOptions
  );
  const { whitePlayer, blackPlayer } = useTypedSelector(
    (state) => state.gameInfo
  );
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
    navigate("/find-room");
  }, []);
  return (
    <div className="app">
      <Outlet />
    </div>
  );
};

export default App;
