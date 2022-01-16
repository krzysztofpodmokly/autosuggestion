import React, { createContext } from "react";
import { initialState } from "./state";

export const AppContext = createContext<{
  state: any;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
