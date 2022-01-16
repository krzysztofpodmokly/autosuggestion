import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../context/context";
import { DropdownButtonProps } from "../interface/DropdownButtonProps";

export const DropdownButton: React.FC<DropdownButtonProps> = (
  props
): JSX.Element => {
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
