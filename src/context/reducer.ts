export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "GET_DROPDOWN_DATA":
      return {
        ...state,
        dropdownOptions: action.payload,
      };

    case "START_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "END_LOADING":
      return {
        ...state,
        loading: false,
      };

    case "SET_ERRORS":
      return {
        ...state,
        errors: [...state.errors, action.payload],
      };

    case "REMOVE_ERRORS":
      return {
        ...state,
        errors: [],
      };

    case "RESET_SELECTED_OPTIONS":
      return {
        ...state,
        selectedOptions: null,
        filteredOptions: action.payload,
      };

    case "UPDATE_USER_INPUT":
      return {
        ...state,
        userInput: action.payload,
      };

    case "FILTER_OPTIONS":
      return {
        ...state,
        filteredOptions: action.payload,
      };

    case "UPDATE_FILTERED_OPTIONS":
      return {
        ...state,
        filteredOptions: action.payload,
      };

    case "UPDATE_SELECTED_OPTIONS":
      return {
        ...state,
        selectedOptions: action.payload,
      };

    case "TOGGLE_DROPDOWN":
      return {
        ...state,
        isDropdownVisible: action.payload,
      };

    default:
      return state;
  }
};
