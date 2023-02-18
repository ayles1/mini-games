import React, { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "../socket/socket";

const JoinRoom = () => {
  const [roomId, setRoomId] = useState<Record<string, any>>();
  const [privateOrPublic, setPrivateOrPublic] = useState("public");
  const [isLogged, setIsLogged] = useState(false);

  const [roomReady, setRoomReady] = useState(true);

  function onFind() {
    axios.post("http://localhost:4444/rooms", {
      roomId: "44431",
      userName: "vanek",
    });
    setIsLogged(true);
    socket.emit("ROOM:JOIN", { roomId: "404", userName: "vanek" });
  }

  return (
    <div>
      {!isLogged && (
        <div className="search-container">
          <div>Выберите режим поиска игры</div>
          <select
            onChange={(e) => setPrivateOrPublic(e.target.value)}
            name="game-mode-select"
            id="select"
          >
            <option value="public" label="Общий поиск"></option>
            <option value="private" label="Приватная комната"></option>
          </select>
          {privateOrPublic === "private" && (
            <>
              <div>Введите</div>
              <input type="text" name="room-id" />
            </>
          )}
          <button onClick={onFind}>Найти противника</button>
        </div>
      )}

      {!roomReady && <div>Ищем соперника....</div>}
    </div>
  );
};

export default JoinRoom;
