import * as gameInfoActions from "../../modules/game/store/gameInfo";
import * as connectionActions from "../../modules/connection/store/connection";
import * as gameOptionsActions from "../../modules/gameOptions/store/gameOptions";

export default {
  ...gameInfoActions,
  ...connectionActions,
  ...gameOptionsActions,
};
