import React, { useEffect } from "react";
import "./App.css";
import { useTypedSelector } from "./hooks/useTypedSelector";
import { useActions } from "./hooks/useActions";
import { connectSocket } from "./socket/socket";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const { setIsChooser, setTime, setUserColor, setUsersNicknames } =
    useActions();
  const { isRoomReady, isFirstPlayer, nickname, enemyNickname } =
    useTypedSelector((state) => state.connection);
  const { isGameReadyToBegin, usersTime, userColor } = useTypedSelector(
    (state) => state.gameOptions
  );
  const { whitePlayer, blackPlayer } = useTypedSelector(
    (state) => state.chessInfo
  );
  useEffect(() => {
    setIsChooser(isFirstPlayer);
    setUsersNicknames({
      this: nickname,
      enemy: enemyNickname,
    });
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
    navigate("select-game");
  }, []);
  return (
    <div className={location.pathname ==='/select-game'?'app-init':'app'}>
      <Outlet />
    </div>
  );
};

export default App;
