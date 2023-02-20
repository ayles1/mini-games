import { combineReducers } from "@reduxjs/toolkit";
import { connectionReducer } from "./connectionReducer";
import { gameInfoReducer } from "./gameInfoReducer";

export const rootReducer = combineReducers({
  gameInfo: gameInfoReducer,
  connection: connectionReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
