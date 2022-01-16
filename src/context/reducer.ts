import { AppActions, ActionType } from "../interface/actionTypes";
import { State } from "./state";

export const reducer = (state: State, action: AppActions): State => {
  switch (action.type) {
    case ActionType.START_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ActionType.END_LOADING:
      return {
        ...state,
        loading: false,
      };

    case ActionType.SET_ERRORS:
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    case ActionType.REMOVE_ERRORS:
      return {
        ...state,
        errors: [],
      };

    case ActionType.RESET_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: null,
        filteredOptions: action.payload,
      };

    case ActionType.FILTER_OPTIONS:
      return {
        ...state,
        filteredOptions: action.payload,
      };

    case ActionType.UPDATE_FILTERED_OPTIONS:
      return {
        ...state,
        filteredOptions: action.payload,
      };

    case ActionType.UPDATE_SELECTED_OPTIONS:
      return {
        ...state,
        selectedOptions: action.payload,
      };

    case ActionType.TOGGLE_DROPDOWN:
      return {
        ...state,
        isDropdownVisible: action.payload,
      };

    default:
      return state;
  }
};
