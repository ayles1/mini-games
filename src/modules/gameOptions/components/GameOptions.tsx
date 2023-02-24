import React, { useEffect } from "react";
import SetTime from "./SetTime";
import "../gameOptions.css";
import SetColors from "./SetColors";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

function GameOptions() {
  const { isTimeSet } = useTypedSelector((state) => state.gameOptions);
  useEffect(() => {}, []);
  return (
    <div>
      {!isTimeSet && <SetTime />}
      {isTimeSet && <SetColors />}
    </div>
  );
}

export default GameOptions;
