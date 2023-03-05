import React from "react";
import "../gameEnd.css";
import PlayAgain from "./PlayAgain";
import {useNavigate} from "react-router-dom";

function GameEndModal() {
    const navigate = useNavigate()
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div>Игра закончилась вашим поносом</div>
        <PlayAgain />
          <button onClick={()=>{
           navigate('/select-game')
          }}>
              Вернуться на главную страницу
          </button>
      </div>
    </div>
  );
}

export default GameEndModal;
