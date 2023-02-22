import React, { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";

function SetTime() {
  const { setIsGameReadyToBegin, setIsTimeOffered } = useActions();
  const { timeOffer } = useTypedSelector((state) => state.gameOptions);
  const { isFirstPlayer } = useTypedSelector((state) => state.connection);
  const [userTime, setUserTime] = useState<string>("");
  useEffect(() => {
    socket.on("TIME:SET:OFFER", (time: number) => {
      setIsTimeOffered({ isTimeOffered: true, time });
    });
    socket.on("TIME:SET", (time: number) => {
      setIsGameReadyToBegin(true);
    });
    socket.on("TIME:SET:OTHER", (time: number) => {
      setIsGameReadyToBegin(true);
    });
  }, []);
  function onSettingTime(time: number) {
    socket.emit("TIME:SET:REQUEST", time);
  }
  function onTimeConfirm(time: number) {
    socket.emit("TIME:SET:CONFIRM", time);
  }
  return (
    <div>
      {isFirstPlayer ? (
        <div className="user-time-form">
          <label htmlFor="user-time">
            Предложите сопернику время игры в минутах
          </label>
          <input
            type="text"
            id="user-time"
            maxLength={4}
            onChange={(e) => setUserTime(e.target.value)}
          />
          <button
            onClick={() => {
              if (Number(userTime)) {
                console.log("clicked");
                onSettingTime(Number(userTime));
              }
            }}
          >
            Начать
          </button>
        </div>
      ) : (
        <>
          {timeOffer.isTimeOffered ? (
            <div>
              <div>
                Противник предложил играть {timeOffer.time} минут. Вы согласны?
              </div>
              <button onClick={() => onTimeConfirm(timeOffer.time)}>Да</button>
              <button>Нет</button>
            </div>
          ) : (
            <>
              <div className="loader">Противник найден! Ждем.</div>
              <div className="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SetTime;
