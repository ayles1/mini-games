import React, { useEffect, useState } from "react";
import CellComponent from "./CellComponent";
import { socket } from "../../../socket/socket";
import {Chess, Square} from "chess.js";
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useNavigate} from "react-router-dom";

const BoardComponent = () => {
    const navigate = useNavigate()
    const { game, highlightedCells,currentPlayer,userColor } = useTypedSelector((state)=>state.chess)
    const { setCurrentPlayer,setGame,highlightCells,setIsCheck,setIsCheckmate } = useActions()
    const [selectedCell, setSelectedCell] = useState<any>(null)
    const board = game.board()
    const letters = 'abcdefgh'
    useEffect(()=>{
        socket.on("UPDATE:BOARD",(fen)=>{
            setCurrentPlayer(currentPlayer === 'w'?'b':'w')
            setGame(new Chess(fen))
        })
        return ()=>{
            socket.off('UPDATE:BOARD')
        }
    },[board])
    useEffect(()=>{
        if(game.isCheck()){
            setIsCheck(true)
        }
        if(game.isCheckmate()){
            navigate('/game/ended')
            setIsCheckmate(true)
        }
    },[currentPlayer])
    function handleMoves(){
        socket.emit('MOVE',game.fen())
    }

    function getPos(column:number,row:number){
        return letters[column] + Math.abs(8-row) as Square
    }
    function handleClick(column:number,row:number){
        if(currentPlayer !== userColor){
            return;
        }
        const square = getPos(column, row)
        const piece = game.get(square)
        const squareNumber = column + row * 16
        const moves = game?._moves({square}).map((move)=>move.to)
        if(piece && piece.color === currentPlayer){
            highlightCells(moves!)
            setSelectedCell(letters[column] + Math.abs(8-row) as Square)
            return
        }
        if(piece !== selectedCell && highlightedCells.indexOf(squareNumber)>-1 ){
            game?.move({from:selectedCell,to:square})
            setGame(game)
            highlightCells([])
            setSelectedCell(null)
            setCurrentPlayer(currentPlayer === 'w'?'b':'w')
            handleMoves()
            return
        }
    }
  return (
    <table className='chess'>
      <tbody className='board'>
      {board?.map((row,rowIndex)=>(
          <tr key={rowIndex}>
            {row.map((square,columnIndex)=>(
              <CellComponent
              key={`${columnIndex}${rowIndex}`}
              row={rowIndex}
              column={columnIndex}
              piece={square}
              square={letters[columnIndex] + Math.abs(8-rowIndex) as Square}
              onClick={handleClick}
              number = {columnIndex + rowIndex * 16}
              />
            ))}
          </tr>
      ))}
      </tbody>
    </table>
  );
};

export default BoardComponent;

