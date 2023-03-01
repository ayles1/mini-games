import * as GameInfoActions from "../store/chessInfo";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(GameInfoActions, dispatch);
}
