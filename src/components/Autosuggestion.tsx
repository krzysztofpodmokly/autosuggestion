import { useContext, useEffect, useCallback, useRef } from "react";
import { DropdownButton } from "./DropdownButton";
import { Dropdown } from "./Dropdown";
import { useRequest } from "../hooks/useRequest";
import { AppContext } from "../context/context";
import { getDropdownOptionsData } from "../context/actions";

export const Autosuggestion = () => {
  const { doRequest } = useRequest();
  const { state, dispatch } = useContext(AppContext);
  const ref = useRef(null);

  const closeDropdownWithEscape = useCallback((e: any) => {
    if (e.key === "Escape") {
      dispatch({
        type: "TOGGLE_DROPDOWN",
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

  useEffect(() => {
    // getDropdownOptionsData(dispatch, doRequest);
  }, []);

  const handleDropdownToggle = () => {
    dispatch({
      type: "TOGGLE_DROPDOWN",
      payload: !state.isDropdownVisible,
    });
  };

  const handleClick = () => {
    document.addEventListener("click", (e) => {
      if (
        (ref.current &&
          //@ts-ignore
          !ref.current.contains(e.target)) ||
        ref.current === e.target
      ) {
        dispatch({
          type: "TOGGLE_DROPDOWN",
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
