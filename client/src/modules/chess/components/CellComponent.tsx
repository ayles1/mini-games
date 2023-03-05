import React, {FC} from "react";
import {Color, PieceSymbol, Square,} from "chess.js";
import {useTypedSelector} from "../../../hooks/useTypedSelector";

interface CellProps {
    row:number,
    column:number,
    piece:{
       square:Square,
        type:PieceSymbol,
        color:Color,
    }
    | null,
    square: Square,
    number: number
    onClick:(column:number,row:number)=>void
}
const CellComponent: FC<CellProps> = ({row,column,piece,onClick,number}) => {

    const { highlightedCells } = useTypedSelector((state)=>state.chess)

    function checkHighlight(){
        if(highlightedCells.indexOf(number)>-1){
            return 'available'
        }
        return ''
    }
  return (
      <td className={['cell',piece?.type.concat(piece?.color),checkHighlight()].join(' ')} onClick={()=>onClick(column,row)}>
      </td>
  );
}
export default CellComponent