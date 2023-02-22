import * as gameInfoActions from "../../modules/game/reducers/gameInfo";
import * as connectionActions from "../../modules/connection/reducers/connection";
import * as gameOptionsActions from "../../modules/gameOptions/reducers/gameOptions";

export default {
  ...gameInfoActions,
  ...connectionActions,
  ...gameOptionsActions,
};
