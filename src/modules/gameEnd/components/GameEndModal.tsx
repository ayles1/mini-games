import React from "react";
import "../gameEnd.css";
import PlayAgain from "./PlayAgain";

function GameEndModal() {
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div>Игра закончилась вашим поносом</div>
        <PlayAgain />
      </div>
    </div>
  );
}

export default GameEndModal;
