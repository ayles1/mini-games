import {AnyAction} from "@reduxjs/toolkit";
import {Chess} from "chess.js";
import {IChessState, chessActionTypes} from "../types/chess";

const chessState : IChessState ={
    whiteTime:null,
    blackTime:null,
    isTimerEnded:false,
    game: new Chess(),
    position:null,
    usersNicknames:{
        this:'',
        enemy:''
    },
    userColor:null,
    isCheck:false,
    isCheckmate:false,
    currentPlayer:null,
    highlightedCells: []
}

export function chessReducer(state = chessState,action:AnyAction):IChessState{
    switch (action.type) {
        case chessActionTypes.CHESS_SET_TIME:
            return {...state, whiteTime:action.payload,blackTime:action.payload }
        case chessActionTypes.CHESS_DECREMENT_WHITE_TIME:
            if(state.whiteTime){
            return {...state,whiteTime:state.whiteTime - 1}
            }
            return  {...state,whiteTime:null}
        case chessActionTypes.CHESS_DECREMENT_BLACK_TIME:
            if(state.blackTime){
            return {...state,blackTime:state.blackTime - 1}
            }
            return {...state,blackTime:null}
        case chessActionTypes.CHESS_END_TIMER:
            return {...state,isTimerEnded:true}
        case chessActionTypes.CHESS_SET_CHESS_GAME:
            return {...state, game:action.payload}
        case chessActionTypes.CHESS_PARSE_POSITION:
            return {...state,position:action.payload}
        case chessActionTypes.CHESS_SET_USERS_NICKNAMES:
            return {...state,usersNicknames:action.payload}
        case chessActionTypes.CHESS_SET_USER_COLOR:
            return {...state, userColor : action.payload}
        case chessActionTypes.CHESS_SET_IS_CHECK:
            return {...state,isCheck:action.payload}
        case chessActionTypes.CHESS_SET_IS_CHECKMATE:
            return {...state,isCheckmate:action.payload}
        case chessActionTypes.CHESS_SET_CURRENT_PLAYER:
            return {...state,currentPlayer:action.payload}
        case chessActionTypes.CHESS_HIGHLIGHT_CELLS:
            return {...state, highlightedCells:action.payload}
        case chessActionTypes.CHESS_RESET_STATE:
            return chessState
        default:
            return state
    }
}