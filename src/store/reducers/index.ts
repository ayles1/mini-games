import { combineReducers } from "@reduxjs/toolkit";
import { connectionReducer } from "../../modules/connection";
import { gameInfoReducer } from "../../modules/game/store/gameInfoReducer";
import { gameOptionsReducer } from "../../modules/gameOptions";

export const rootReducer = combineReducers({
  gameInfo: gameInfoReducer,
  connection: connectionReducer,
  gameOptions: gameOptionsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
