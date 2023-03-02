import React, {useEffect} from 'react';
import {useActions} from "../hooks/useActions";
// import {useTypedSelector} from "../../../hooks/useTypedSelector";
// import {Cell} from "../models/Cell";
// import {Colors} from "../models/Colors";
// import {Board} from "../models/Board";
// import {Figure} from "../models/figures/Figure";
//
// function ChessInit() {
//     const { } = useActions()
//     const { board } = useTypedSelector(state => state.chessInfo)
//
//     useEffect(()=>{
//         const board = new Board([])
//
//         const cells: Cell[][] = []
//         for (let i = 0; i < 8; i++) {
//         const row: Cell[] = [];
//         for (let j = 0; j < 8; j++) {
//             if ((i + j) % 2 !== 0) {
//                 row.push(new Cell(j, i, Colors.BLACK, null,board));
//             } else {
//                 row.push(new Cell(j, i, Colors.WHITE, null,board));
//                 }
//             }
//         cells.push(row);
//         }
//         const injectedCells: Cell[][] = cells.map((row,rowIndex)=>{
//             row.map((cell,colIndex)=>{
//                 const figure = cell.figure !== null
//                 // ? new Figure()
//             })
//         })
//     })
//     return (
//         <div></div>
//     );
// }
//
// export default ChessInit;


// for (let i = 0; i < 8; i++) {
//     const row: Cell[] = [];
//     for (let j = 0; j < 8; j++) {
//         if ((i + j) % 2 !== 0) {
//             row.push(new Cell(j, i, Colors.BLACK, null,this));
//         } else {
//             row.push(new Cell(j, i, Colors.WHITE, null,this));
//         }
//     }
//     this.cells.push(row);
// }