import {gameType} from "../../types/game";
import {gameActionTypes} from "../types/game";

export function setGameType(payload:gameType){
    return {
        type:gameActionTypes.SET_GAME_TYPE,
        payload
    }
}