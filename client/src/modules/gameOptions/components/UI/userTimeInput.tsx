import React, { FC, useState } from "react";

interface UserTimeInputProps {
  onClick: (...args: any[]) => any;
}

const UserTimeInput: FC<UserTimeInputProps> = ({ onClick }) => {
  const [userTime, setUserTime] = useState<string>("");

  return (
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
            onClick(Number(userTime));
          }
        }}
      >
        Начать
      </button>
    </div>
  );
};

export default UserTimeInput;
