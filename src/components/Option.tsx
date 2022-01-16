import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { AppContext } from "../context/context";
import parser from "html-react-parser";

export const Option = (props: any) => {
  const { state, dispatch } = useContext(AppContext);
  const { option, index } = props;

  const handleOptionChange = (position: any) => {
    const updatedState = state.filteredOptions.map(
      (item: any, index: number) => {
        return index === position
          ? { ...item, checked: !item.checked }
          : { ...item, checked: item.checked };
      }
    );

    dispatch({
      type: "UPDATE_FILTERED_OPTIONS",
      payload: updatedState,
    });

    dispatch({
      type: "UPDATE_SELECTED_OPTIONS",
      payload: updatedState.filter((option: any) => option.checked),
    });
  };

  const sentence = `${option.country} - ${option.name}`;

  // {sentence.slice(0, sentence.indexOf(state.userInput))}
  // {parser(`<b>${state.userInput}</b>`)}
  // {sentence.slice(
  //   sentence.indexOf(state.userInput) + state.userInput.length,
  //   sentence.length
  // )}

  return (
    <li className="dropdown-item-wrapper">
      <div
        className={`dropdown-item ${
          state.filteredOptions[index].checked && "active"
        }`}
      >
        <label className="dropdown-label">
          <input
            type="checkbox"
            value={option.value}
            onChange={() => handleOptionChange(index)}
            checked={false}
            className="dropdown-checkbox"
          />
          {sentence}
        </label>

        <div className="dropdown-icon">
          {state.filteredOptions[index].checked && (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </div>
      </div>
    </li>
  );
};
