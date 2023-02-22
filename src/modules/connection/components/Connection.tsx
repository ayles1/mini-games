import React from "react";
import JoinRoom from "./JoinRoom";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import "../connection.css";

const Connection = () => {
  const { isRoomReady } = useTypedSelector((state) => state.connection);
  return (
    <div>
      <JoinRoom />
    </div>
  );
};

export default Connection;
