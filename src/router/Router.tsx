import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Connection } from "../modules/connection";
import { GameOptions } from "../modules/gameOptions";
import Game from "../modules/game/components/Game";
import App from "../App";
import { GameEndModal } from "../modules/gameEnd";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/find-room" element={<Connection />} />
      <Route path="/random" element={<GameOptions />} />
      <Route path="/game" element={<Game />}>
        <Route path="/game/ended" element={<GameEndModal />} />
      </Route>
    </Route>
  )
);
