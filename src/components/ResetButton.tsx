import { useContext } from "react";
import { AppContext } from "../context/context";

export const ResetButton = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  const handleResetItems = () => {
    // RESET_SELECTED_OPTIONS
    dispatch({
      type: "RESET_SELECTED_OPTIONS",
      payload:
        state.filteredOptions &&
        state.filteredOptions.map((option: any) => {
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
