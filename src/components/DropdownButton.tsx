import { useContext } from "react";
import { AppContext } from "../context/context";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const DropdownButton = (props: any) => {
  const { state } = useContext(AppContext);
  const { toggleDropdown } = props;

  return (
    <button
      className={`dropdown-button-wrapper ${
        state.isDropdownVisible ? "opened" : "closed"
      }`}
      onClick={toggleDropdown}
    >
      <h3 className="dropdown-button-label">Universities</h3>
      <div className="dropdown-button-quantity">
        {(state.selectedOptions && state.selectedOptions.length) || 0}
      </div>
      <FontAwesomeIcon
        icon={state.isDropdownVisible ? faAngleUp : faAngleDown}
      />
      {state.isDropdownVisible && (
        <div className="dropdown-button-element"></div>
      )}
    </button>
  );
};
