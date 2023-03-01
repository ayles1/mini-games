import * as GameOptionsActions from "../store/gameOptions";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(GameOptionsActions, dispatch);
}
