import {AnyAction} from "@reduxjs/toolkit";
import {gameActionTypes, IGameState} from "../types/game";
const gameState : IGameState = {
    game:null

}
export function gameReducer(state = gameState,action:AnyAction):IGameState{
    switch (action.type) {
        case gameActionTypes.SET_GAME_TYPE:
            return {...state, game:action.payload}
        default:
            return state
    }
}