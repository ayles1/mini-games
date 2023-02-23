import React, { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useActions } from "../../../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import UserTimeInput from "./userTimeInput";

function SetTime() {
  const {
    setIsGameReadyToBegin,
    setIsTimeOffered,
    setIsTimeRejected,
    setIsChooser,
    setUsersTime,
    setIsTimeSet,
  } = useActions();
  const { timeOffer, isTimeRejected, isChooser } = useTypedSelector(
    (state) => state.gameOptions
  );
  useEffect(() => {
    socket.on("TIME:SET:OFFER", (time: number) => {
      setIsTimeOffered({ isTimeOffered: true, time });
    });
    socket.on("TIME:SET", (time: number) => {
      setUsersTime(time * 60);
      setIsTimeSet(true);
    });
    socket.on("TIME:SET:OTHER", (time: number) => {
      setUsersTime(time * 60);
      setIsTimeSet(true);
    });
    socket.on("CHOOSER:CHANGE", (data: string) => {
      setIsChooser(!isChooser);
    });
    return () => {
      socket.off("TIME:SET:OFFER");
      socket.off("TIME:SET");
      socket.off("TIME:SET:OTHER");
      socket.off("CHOOSER:CHANGE");
    };
  }, [isChooser]);

  function onSettingTime(time: number) {
    socket.emit("TIME:SET:REQUEST", time);
  }
  function onChooserChange() {
    socket.emit("TIME:SET:REJECT");
  }
  function onTimeConfirm(time: number) {
    socket.emit("TIME:SET:CONFIRM", time);
  }
  return (
    <div>
      {isChooser ? (
        <UserTimeInput onClick={onSettingTime} />
      ) : (
        <>
          {timeOffer.isTimeOffered ? (
            <div>
              <div>
                Противник предложил играть {timeOffer.time} минут. Вы согласны?
              </div>
              <button onClick={() => onTimeConfirm(timeOffer.time)}>Да</button>
              <button onClick={() => onChooserChange()}>Нет</button>
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
