import { useContext, useEffect, useCallback, useRef } from "react";

import { DropdownButton } from "./DropdownButton";
import { Dropdown } from "./Dropdown";
import { AppContext } from "../context/context";
import { ActionType } from "../interface/actionTypes";

export const Autosuggestion: React.FC<{}> = (): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const ref = useRef(null);

  const closeDropdownWithEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") {
      dispatch({
        type: ActionType.TOGGLE_DROPDOWN,
        payload: false,
      });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", closeDropdownWithEscape);

    return () => {
      window.removeEventListener("keydown", closeDropdownWithEscape);
    };
  }, [closeDropdownWithEscape]);

  const handleDropdownToggle = (): void => {
    dispatch({
      type: ActionType.TOGGLE_DROPDOWN,
      payload: !state.isDropdownVisible,
    });
  };

  const handleClick = (): void => {
    document.addEventListener("click", (e) => {
      if (
        (ref.current &&
          //@ts-ignore
          !ref.current.contains(e.target)) ||
        ref.current === e.target
      ) {
        dispatch({
          type: ActionType.TOGGLE_DROPDOWN,
          payload: false,
        });
      }
    });
  };

  return (
    <div className="container" ref={ref} onClick={handleClick}>
      <DropdownButton toggleDropdown={handleDropdownToggle} />

      {state.isDropdownVisible && <Dropdown />}
    </div>
  );
};
