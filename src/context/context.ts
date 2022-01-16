import React, { createContext } from "react";
import { AppActions } from "../interface/actionTypes";
import { initialState, State } from "./state";

export const AppContext = createContext<{
  state: State;
  dispatch: React.Dispatch<AppActions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
