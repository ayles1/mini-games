import React, {useEffect} from "react";
import "./App.css";
import {connectSocket} from "../socket/socket";
import {Outlet, useLocation, useNavigate} from "react-router-dom";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation()
  useEffect(() => {
    connectSocket();
    if(location.pathname === '/'){
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
