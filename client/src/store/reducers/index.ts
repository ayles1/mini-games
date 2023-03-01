import { combineReducers } from "@reduxjs/toolkit";
import { connectionReducer } from "../../modules/connection";
import { chessInfoReducer } from "../../modules/chess/store/chessInfoReducer";
import { gameOptionsReducer } from "../../modules/gameOptions";
import { createApi } from "@reduxjs/toolkit/query";
import { gameEndReducer } from "../../modules/gameEnd/store/gameEndReducer";

export const rootReducer = combineReducers({
  chessInfo:chessInfoReducer,
  connection: connectionReducer,
  gameOptions: gameOptionsReducer,
  gameEnd: gameEndReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
