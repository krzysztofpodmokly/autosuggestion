import { JsonObject } from "../interface/JsonObject";

export interface State {
  loading: boolean;
  errors: JsonObject[];
  filteredOptions: JsonObject[] | null;
  userInput: string;
  selectedOptions: JsonObject[] | null;
  isDropdownVisible: boolean;
}

export const initialState: State = {
  loading: false,
  errors: [],
  filteredOptions: null,
  userInput: "",
  selectedOptions: null,
  isDropdownVisible: false,
};
