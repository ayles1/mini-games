import React, { useEffect } from "react";
import axios from "axios";
import { socket } from "../../../socket/socket";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { useActions } from "../../../hooks/useActions";
import { useNavigate } from "react-router-dom";

const JoinRoom = () => {
  const navigate = useNavigate();
  const {
    setIsJoined,
    toggleMode,
    setRoomId,
    setRoomOverflow,
    setNickname,
    setIsRoomReady,
    setEnemyNickname,
    setIsFirstPlayer,
  } = useActions();

  const {
    isJoined,
    privateOrPublic,
    roomId,
    isRoomOverflow,
    nickname,
    isRoomReady,
  } = useTypedSelector((state) => state.connection);
  useEffect(() => {
    function listenJoiningRoom(event: any) {
      socket.on(event, (users: Array<string>) => {
        setIsRoomReady(true);
        navigate("/random");
        setIsFirstPlayer(users[0] === nickname);
        setEnemyNickname(users.filter((user) => user !== nickname).toString());
      });
    }
    listenJoiningRoom("ROOM:JOINED");
    socket.on("ROOM:OVERFLOW", () => {
      setRoomOverflow(true);
    });
    return () => {
      socket.off("ROOM:JOINED");
      socket.off("ROOM:OVERFLOW");
    };
  }, [nickname]);

  async function onFindPublic() {
    await axios.post("http://localhost:4444/rooms", {
      nickname,
    });
    setIsJoined(true);
    socket.emit("ROOM:JOIN:PUBLIC", { nickname });
    setIsRoomReady(false);
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
          <select onChange={toggleMode} name="game-mode-select" id="select">
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

      {!isRoomReady && isJoined && (
        <div>
          <div className="loader">Ждем противника...</div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default JoinRoom;
