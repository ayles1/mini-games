import React, {FC} from "react";
import JoinRoom from "./JoinRoom";
import "../connection.css";
import {useActions} from "../hooks/useActions";
import {gameType} from "../types/connection";

interface  connectionProps{
    game:gameType
}

const Connection:FC<connectionProps> = ({game}) => {
    const { setGame } = useActions()
    setGame(game)
  return (
    <div>
      <JoinRoom />
    </div>
  );
};

export default Connection;
