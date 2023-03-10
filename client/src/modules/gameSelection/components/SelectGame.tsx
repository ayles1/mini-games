import React from 'react';
import {useNavigate} from "react-router-dom";
import chess_img from '../assets/chess-img.png';
import durak_img from '../assets/durak-img.jpg';
import checkers_img from '../assets/checkers-img.png'
import '../game-selection.css'
function SelectGame() {
    const navigate = useNavigate()
    function handleGameConnection(game:'chess' | 'durak' | 'checkers'){
        switch (game) {
            case 'chess':
                navigate('/find-room/chess')
                break
            case "checkers":
                navigate('/find-room/checkers')
                break
            case "durak":
                navigate('/find-room/durak')
        }
    }
    return (
        <div>
            <h1>Выберите игру</h1>
            <ul className='games-menu'>
                <li className='games-menu-item' onClick={()=>handleGameConnection("chess")}>
                    <h2 >Шахматы</h2>
                    <img src={chess_img} alt='Шахматы' />
                </li>
                <li className='games-menu-item' onClick={()=>handleGameConnection("checkers")}>
                    <h2 >Шашки</h2>
                    <img src={checkers_img} alt='Шашки' />
                </li>
                <li className='games-menu-item' onClick={()=>handleGameConnection("durak")}>
                    <h2 >Дурак</h2>
                    <img src={durak_img} alt='Дурак'/>
                </li><li className='games-menu-item' onClick={()=>handleGameConnection("durak")}>
                    <h2 >Дурак</h2>
                    <img src={durak_img} alt='Дурак'/>
                </li>

            </ul>
        </div>
    );
}

export default SelectGame;