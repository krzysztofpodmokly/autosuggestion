import { useReducer } from "react";

import { initialState } from "./context/state";
import { AppContext } from "./context/context";
import { reducer } from "./context/reducer";
import { AutosuggestionSelect } from "./components/AutosuggestionSelect";

const App: React.FC = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <AutosuggestionSelect />
    </AppContext.Provider>
  );
};

export default App;
