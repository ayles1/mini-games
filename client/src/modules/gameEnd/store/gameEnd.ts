import { gameEndActionTypes } from "../types/gameEnd";

export function endGame() {
  return {
    type: gameEndActionTypes.END_GAME,
  };
}
