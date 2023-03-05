import React, {useEffect} from "react";
import "../chess.css";
import BoardComponent from "./BoardComponent";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { Outlet, useNavigate } from "react-router-dom";
import {useActions} from "../hooks/useActions";
import Timer from "./Timer";

function ChessGame() {
    const navigate = useNavigate();
    const { setCurrentPlayer } = useActions()
    useEffect(()=>{
        setCurrentPlayer('w')
    },[])
  return (
    <>
      <Outlet />
      <BoardComponent/>
      <Timer/>
    </>
  );
}

export default ChessGame;
