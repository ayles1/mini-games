import * as chessInfoActions from "../../modules/chess/store/chessInfo";
import * as connectionActions from "../../modules/connection/store/connection";
import * as gameOptionsActions from "../../modules/gameOptions/store/gameOptions";
import * as gameEndActions from "../../modules/gameEnd/store/gameEnd";

export default {
  ...chessInfoActions,
  ...connectionActions,
  ...gameOptionsActions,
  ...gameEndActions,
};
