import * as gameEndActions from "../store/gameEnd";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(gameEndActions, dispatch);
}
