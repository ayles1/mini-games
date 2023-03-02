import React, {useEffect} from "react";
import "./App.css";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useActions} from "./hooks/useActions";
import {connectSocket} from "./socket/socket";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {Colors} from "./modules/chess/models/Colors";

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

  useEffect(() => {
    // setTime(usersTime);
  }, [isGameReadyToBegin]);
  useEffect(() => {
    connectSocket();
    if(location.pathname === '/'){
        // localStorage.setItem('persistenceId', userId)
        navigate("select-game");
    }
  }, []);
  return (
    <div className={location.pathname ==='/select-game'?'app-init':'app'}>
      <Outlet />
    </div>
  );
};

export default App;
