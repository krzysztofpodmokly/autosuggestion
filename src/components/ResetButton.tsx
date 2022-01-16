import { useContext } from "react";
import { AppContext } from "../context/context";
import { ActionType } from "../interface/actionTypes";
import { JsonObject } from "../interface/JsonObject";

export const ResetButton: React.FC<{}> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const handleResetItems = (): void => {
    dispatch({
      type: ActionType.RESET_SELECTED_OPTIONS,
      payload:
        state.filteredOptions &&
        state.filteredOptions.map((option: JsonObject) => {
          return { ...option, checked: false };
        }),
    });
  };

  return (
    <button className="reset-items" onClick={handleResetItems}>
      Reset
    </button>
  );
};
