import React, { useEffect, useState } from "react";
import { socket } from "../../../socket/socket";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import UserTimeInput from "./UI/userTimeInput";
import Loader from "../../../Components/UI/Loader";

function SetTime() {
  const { setIsTimeOffered, setIsChooser, setUsersTime, setIsTimeSet } =
    useActions();
  const { timeOffer, isChooser } = useTypedSelector(
    (state) => state.gameOptions
  );
  const [isPending, setIsPending] = useState(false);
  useEffect(() => {
    socket.on("TIME:SET:OFFER", (time: number) => {
      setIsTimeOffered({ isTimeOffered: true, time });
    });
    socket.on("TIME:SET", (time: number) => {
      setUsersTime(time * 60);
      setIsTimeSet(true);
    });

    socket.on("CHOOSER:CHANGE", () => {
      setIsChooser(!isChooser);
    });
    return () => {
      socket.off("TIME:SET:OFFER");
      socket.off("TIME:SET");
      socket.off("CHOOSER:CHANGE");
    };
  }, [isChooser]);

  function onSettingTime(time: number) {
    setIsPending(true);
    socket.emit("TIME:SET:REQUEST", time);
  }
  function onChooserChange() {
    setIsPending(false);
    setIsTimeOffered({ isTimeOffered: false });
    socket.emit("TIME:SET:REJECT");
  }
  function onTimeConfirm(time: number) {
    socket.emit("TIME:SET:CONFIRM", time);
  }
  return (
    <div>
      {isChooser ? (
        <>
          {isPending ? (
            <>
              <div className="loader">Ждем подтверждения от соперника...</div>
              <Loader />
            </>
          ) : (
            <UserTimeInput onClick={onSettingTime} />
          )}
        </>
      ) : (
        <>
          {timeOffer.isTimeOffered ? (
            <div className="confirmation-form">
              <div>
                Противник предложил играть {timeOffer.time} минут. Вы согласны?
              </div>
              <div className="confirmation-form-buttons">
                <button onClick={() => onTimeConfirm(timeOffer.time)}>
                  Да
                </button>
                <button onClick={() => onChooserChange()}>Нет</button>
              </div>
            </div>
          ) : (
            <>
              <div className="loader">
                Ждем пока соперник предложит время...
              </div>
              <Loader />
            </>
          )}
        </>
      )}
    </div>
  );
}

export default SetTime;
