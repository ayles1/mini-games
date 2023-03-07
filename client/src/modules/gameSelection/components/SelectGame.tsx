import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import chess_img from '../assets/chess-img.png';
import durak_img from '../assets/durak-img.jpg';
import checkers_img from '../assets/checkers-img.png'
import '../game-selection.css'
import {useGlobalActions} from "../../../hooks/useGlobalActions";
function SelectGame() {
    const navigate = useNavigate()
    const [userId, setUserIdPlease] = useState(Math.random().toString(36).substring(2, 15))
    const { setGameType } = useGlobalActions()
    function handleGameConnection(game:'chess' | 'durak' | 'checkers' | 'sea-battle'){
        switch (game) {
            case 'chess':
                setGameType('chess')
                navigate(`/find-room/chess`)
                break
            case "checkers":
                setGameType('checkers')
                navigate('/find-room/checkers')
                break
            case "durak":
                setGameType('durak')
                navigate('/find-room/durak')
                break
            case 'sea-battle':
                setGameType('sea-battle')
                navigate('/find-room/sea-battle')
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
                </li>
                <li className='games-menu-item' onClick={()=>handleGameConnection("sea-battle")}>
                    <h2>Морской бой</h2>
                    <img src={durak_img} alt='Дурак'/>
                </li>

            </ul>
        </div>
    );
}

export default SelectGame;