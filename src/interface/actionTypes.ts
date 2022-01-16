import { JsonObject } from "./JsonObject";

export enum ActionType {
  GET_DROPDOWN_DATA,
  START_LOADING,
  END_LOADING,
  SET_ERRORS,
  REMOVE_ERRORS,
  RESET_SELECTED_OPTIONS,
  FILTER_OPTIONS,
  UPDATE_FILTERED_OPTIONS,
  UPDATE_SELECTED_OPTIONS,
  TOGGLE_DROPDOWN,
}

export interface END_LOADING {
  type: ActionType.END_LOADING;
}

export interface START_LOADING {
  type: ActionType.START_LOADING;
}

export interface SET_ERRORS {
  type: ActionType.SET_ERRORS;
  payload: JsonObject;
}

export interface REMOVE_ERRORS {
  type: ActionType.REMOVE_ERRORS;
}

export interface RESET_SELECTED_OPTIONS {
  type: ActionType.RESET_SELECTED_OPTIONS;
  payload: JsonObject[] | null;
}

export interface FILTER_OPTIONS {
  type: ActionType.FILTER_OPTIONS;
  payload: JsonObject[];
}

export interface UPDATE_FILTERED_OPTIONS {
  type: ActionType.UPDATE_FILTERED_OPTIONS;
  payload: JsonObject[];
}

export interface UPDATE_SELECTED_OPTIONS {
  type: ActionType.UPDATE_SELECTED_OPTIONS;
  payload: JsonObject[];
}

export interface TOGGLE_DROPDOWN {
  type: ActionType.TOGGLE_DROPDOWN;
  payload: boolean;
}

export type AppActions =
  | START_LOADING
  | END_LOADING
  | SET_ERRORS
  | REMOVE_ERRORS
  | RESET_SELECTED_OPTIONS
  | FILTER_OPTIONS
  | UPDATE_FILTERED_OPTIONS
  | UPDATE_SELECTED_OPTIONS
  | TOGGLE_DROPDOWN;
