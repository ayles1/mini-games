import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../app/App";
import { Connection } from "../modules/connection";
import { GameOptions } from "../modules/gameOptions";
import { GameEndModal } from "../modules/gameEnd";
import { SelectGame } from "../modules/gameSelection";
import { ChessGame } from "../modules/chess";
import { Durak } from "../modules/durak";
import SeaBattle from "../modules/seaBattle/components/SeaBattle";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path='/select-game' element={<SelectGame/>}/>
        <Route path="/find-room/:game" element={<Connection/>}/>
        <Route path="/game-options/:game" element={<GameOptions />} />
      <Route path="/game/chess" element={<ChessGame />}>
            <Route path="/game/chess/ended" element={<GameEndModal/>} />
      </Route>
        <Route path='/game/durak' element={<Durak/>}>
            <Route path='/game/durak/ended' element={<GameEndModal/>}/>
        </Route>
        <Route path="/game/sea-battle" element={<SeaBattle />}>
            <Route path="/game/sea-battle/ended" element={<GameEndModal/>} />
      </Route>
    </Route>
  )
);
