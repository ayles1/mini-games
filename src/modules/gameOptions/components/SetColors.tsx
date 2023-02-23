import React, { useEffect } from "react";
import { useActions } from "../../../hooks/useActions";
import { socket } from "../../../socket/socket";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

function SetColors() {
  const { setIsGameReadyToBegin, setUsersColors } = useActions();
  const { userColor } = useTypedSelector((state) => state.gameOptions);
  useEffect(() => {
    socket.on("COLOR:SET", (color: "white" | "black") => {
      console.log("done");
      console.log(color);
      setUsersColors(color);
    });
    socket.emit("COLOR:SET:REQUEST");
    setTimeout(() => {
      setIsGameReadyToBegin(true);
    }, 5000);
  }, []);
  return (
    <div>
      Вам выпала честь играть за... {userColor === "white" ? "белых" : "черных"}
    </div>
  );
}

export default SetColors;
