import * as connectionActions from "../store/connection";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";

export function useActions() {
  const dispatch = useDispatch();
  return bindActionCreators(connectionActions, dispatch);
}
