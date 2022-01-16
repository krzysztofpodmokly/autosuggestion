import { useReducer } from "react";
import { initialState } from "./context/state";
import { AppContext } from "./context/context";
import { reducer } from "./context/reducer";
import { Autosuggestion } from "./components/Autosuggestion";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Autosuggestion />
    </AppContext.Provider>
  );
};

export default App;
