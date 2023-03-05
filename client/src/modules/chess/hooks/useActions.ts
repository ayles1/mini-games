import * as chessActions from "../store/chess";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(chessActions, dispatch);
}
