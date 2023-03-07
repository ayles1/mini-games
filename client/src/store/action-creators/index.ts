import * as chessActions from "../../modules/chess/store/chess";
import * as connectionActions from "../../modules/connection/store/connection";
import * as gameOptionsActions from "../../modules/gameOptions/store/gameOptions";
import * as gameEndActions from "../../modules/gameEnd/store/gameEnd";
import * as gameActions from "./game"
export default {
  ...gameActions,
  ...chessActions,
  ...connectionActions,
  ...gameOptionsActions,
  ...gameEndActions,
};
