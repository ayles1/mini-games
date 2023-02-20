import React, { useEffect, useState } from "react";
import axios from "axios";
import { socket } from "../socket/socket";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const JoinRoom = () => {
  const { isJoined, privateOrPublic, roomId, isRoomOverflow, nickname } =
    useTypedSelector((state) => state.connection);
  const { setIsJoined, toggleMode, setRoomId, setRoomOverflow, setNickname } =
    useActions();
  const [roomReady, setRoomReady] = useState(true);
  const [enemyNick, setEnemyNick] = useState("");

  useEffect(() => {
    function listenJoiningRoom(event: any) {
      return socket.on(event, (users: any) => {
        setRoomReady(true);
        setEnemyNick(users.filter((user: any) => user !== nickname).toString());
        console.log(users);
      });
    }
    listenJoiningRoom("ROOM:JOINED");
    listenJoiningRoom("ROOM:OTHER_JOINED");

    socket.on("ROOM:OVERFLOW", () => {
      setRoomOverflow(true);
    });
  }, []);
  async function onFindPublic() {
    await axios.post("http://localhost:4444/rooms", {
      nickname,
    });
    setIsJoined(true);
    socket.emit("ROOM:JOIN:PUBLIC", { nickname });
  }
  async function onFindPrivate() {
    await axios.post("http://localhost:4444/rooms", {
      roomId,
      nickname,
    });
    setIsJoined(true);
    socket.emit("ROOM:JOIN:PRIVATE", { roomId, nickname });
  }

  return (
    <div>
      <div>{enemyNick}</div>
      {isJoined ? (
        isRoomOverflow && (
          <>
            <div>Комната уже заполнена</div>
            <button
              onClick={() => {
                setIsJoined(false);
                setRoomOverflow(false);
              }}
            >
              Вернуться назад
            </button>
          </>
        )
      ) : (
        <div className="search-container">
          <div>Введите ваш ник</div>
          <input
            maxLength={15}
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <div>Выберите режим поиска игры</div>
          <select
            onChange={(e) => toggleMode()}
            name="game-mode-select"
            id="select"
          >
            <option value="public" label="Общий поиск"></option>
            <option value="private" label="Приватная комната"></option>
          </select>
          {privateOrPublic === "private" && (
            <>
              <div>Введите номер комнаты</div>
              <input
                type="text"
                value={roomId}
                name="room-id"
                onChange={(e) => setRoomId(e.target.value)}
              />
            </>
          )}
          <button
            onClick={() => {
              privateOrPublic === "private" ? onFindPrivate() : onFindPublic();
            }}
          >
            Найти противника
          </button>
        </div>
      )}

      {!roomReady && <div>Ищем соперника....</div>}
    </div>
  );
};

export default JoinRoom;
