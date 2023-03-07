import React, { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { socket } from "../../../socket/socket";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useNavigate } from "react-router-dom";

function SetColors() {
  const navigate = useNavigate();
  const { setIsGameReadyToBegin, setUsersColors } = useActions();

  const { userColor, isChooser } = useTypedSelector(
    (state) => state.gameOptions
  );
  const { game } = useTypedSelector((state)=>state.game)
  useEffect(() => {
    socket.on("COLOR:SET", (color: "w" | "b") => {
      setUsersColors(color);
    });
    isChooser && socket.emit("COLOR:SET:REQUEST");
    setTimeout(() => {
      setIsGameReadyToBegin(true);
      navigate(`/game/${game}`);
    }, 2000);
  }, []);

  return (
    <div>
      <div>
        Вам выпала честь играть за...{" "}
        {userColor === "w" ? "белых" : "черных"}
      </div>
    </div>
  );
}

export default SetColors;
