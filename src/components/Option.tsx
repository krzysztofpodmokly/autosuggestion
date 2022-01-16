import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import { AppContext } from "../context/context";
import { ActionType } from "../interface/actionTypes";
import { OptionProps } from "../interface/OptionProps";
import { JsonObject } from "../interface/JsonObject";

export const Option: React.FC<OptionProps> = (props): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);
  const { option, index } = props;

  const handleOptionChange = (position: number) => {
    const updatedState = state.filteredOptions!.map(
      (option: JsonObject, index: number) => {
        return index === position
          ? { ...option, checked: !option.checked }
          : { ...option, checked: option.checked };
      }
    );

    dispatch({
      type: ActionType.UPDATE_FILTERED_OPTIONS,
      payload: updatedState,
    });

    dispatch({
      type: ActionType.UPDATE_SELECTED_OPTIONS,
      payload: updatedState.filter((option: JsonObject) => option.checked),
    });
  };

  const sentence = `${option.country} - ${option.name}`;

  return (
    <li className="dropdown-item-wrapper">
      <div
        className={`dropdown-item ${
          state.filteredOptions &&
          state.filteredOptions[index].checked &&
          "active"
        }`}
      >
        <label className="dropdown-label">
          <input
            type="checkbox"
            onChange={() => handleOptionChange(index)}
            checked={false}
            className="dropdown-checkbox"
          />
          {sentence}
        </label>

        <div className="dropdown-icon">
          {state.filteredOptions && state.filteredOptions[index].checked && (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </div>
      </div>
    </li>
  );
};
