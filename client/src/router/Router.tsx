import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Connection } from "../modules/connection";
import { GameOptions } from "../modules/gameOptions";
import Chess from "../modules/chess/components/Chess";
import App from "../App";
import { GameEndModal } from "../modules/gameEnd";
import SelectGame from "../modules/gameSelection/components/SelectGame";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path='/select-game' element={<SelectGame/>}/>
      <Route path="/find-room">
          <Route path="/find-room/chess" element={<Connection game={'chess'}/>}/>
          <Route path="/find-room/checkers" element={<Connection game={'checkers'}/>}/>
          <Route path="/find-room/chess" element={<Connection game={'durak'}/>}/>
      </Route  >
      <Route path="/game-options" element={<GameOptions />} />
      <Route path="/game" element={<Chess />}>
        <Route path="/game/ended" element={<GameEndModal />} />
      </Route>
    </Route>
  )
);
