import {gameType} from "../../types/game";

export interface IGameState {
    game:gameType | null
}
export enum gameActionTypes {
    SET_GAME_TYPE = "SET_GAME_TYPE"
}