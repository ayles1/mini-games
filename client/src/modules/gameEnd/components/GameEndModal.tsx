import React from "react";
import "../gameEnd.css";
import PlayAgain from "./PlayAgain";
import {useLocation, useNavigate} from "react-router-dom";
import {socket} from "../../../socket/socket";

function GameEndModal() {
    const navigate = useNavigate()
    const location = useLocation()
    console.log(location.state)
    function onPlayAgain(){
        socket.emit('PLAY-AGAIN:REQUEST')
    }
  return (
    <div className="modal-overlay">
      <div className="modal-window">
        <div className='game-end-text'>Игра закончилась {location.state === 'win'?'вашей победой!':'вашим' +
            ' поражением!'}</div>
          <div className='game-end-buttons'>
              <button onClick={()=>{
                  onPlayAgain()
              }}>
                  Играть снова
              </button>
              <button onClick={()=>{
                  navigate('/select-game')
              }}>
                  Главная страница
              </button>
          </div>
      </div>
    </div>
  );
}

export default GameEndModal;
