import { render } from "@testing-library/react";
import { Dropdown } from "../Dropdown";
import { AppContext } from "../../context/context";
import { State } from "../../context/state";

describe("Dropdown", () => {
  test("should return false when there are no list items", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: null,
      selectedOptions: null,
      isDropdownVisible: false,
    };
    const rendered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <Dropdown />
      </AppContext.Provider>
    );
    const ul = rendered.container.querySelector(
      ".dropdown-list"
    ) as HTMLUListElement;
    expect(ul.children.length).toBeFalsy();
  });

  test("should render 2 list items", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: [{}, {}],
      selectedOptions: null,
      isDropdownVisible: false,
    };
    const rendered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <Dropdown />
      </AppContext.Provider>
    );
    const ul = rendered.container.querySelector(
      ".dropdown-list"
    ) as HTMLUListElement;
    expect(ul.children.length).toBe(2);
  });
});
