import { render, fireEvent } from "@testing-library/react";

import { AppContext } from "../../context/context";
import { DropdownButton } from "../DropdownButton";
import { State } from "../../context/state";

describe("DropdownButton", () => {
  test("should render 0 when there are no selected options", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: null,
      selectedOptions: null,
      isDropdownVisible: false,
    };
    const redered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <DropdownButton toggleDropdown={jest.fn} />;
      </AppContext.Provider>
    );

    const div = redered.container.querySelector(".dropdown-button-quantity");

    expect(div).toHaveTextContent("0");
  });

  test("should print number 2 when there are no selected options", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: null,
      selectedOptions: [{}, {}],
      isDropdownVisible: false,
    };
    const redered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <DropdownButton toggleDropdown={jest.fn} />;
      </AppContext.Provider>
    );

    const div = redered.container.querySelector(".dropdown-button-quantity");

    expect(div).toHaveTextContent("2");
  });

  test("should contain 'closed' css class when toggled OFF", () => {
    const rendered = render(<DropdownButton toggleDropdown={jest.fn} />);
    const buttonElement = rendered.container.querySelector(
      ".dropdown-button-wrapper"
    ) as HTMLButtonElement;
    fireEvent.click(buttonElement);
    expect(buttonElement.classList).toContain("closed");
  });

  test("should contain 'opened' css class when toggled ON", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: null,
      selectedOptions: null,
      isDropdownVisible: true,
    };
    const rendered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <DropdownButton toggleDropdown={jest.fn} />;
      </AppContext.Provider>
    );

    const buttonElement = rendered.container.querySelector(
      ".dropdown-button-wrapper"
    ) as HTMLButtonElement;
    fireEvent.click(buttonElement);
    expect(buttonElement.classList).toContain("opened");
  });

  test("should render dropdown when toggled ON", () => {
    const initialState: State = {
      loading: false,
      errors: [],
      filteredOptions: null,
      selectedOptions: null,
      isDropdownVisible: true,
    };
    const rendered = render(
      <AppContext.Provider value={{ state: initialState, dispatch: jest.fn }}>
        <DropdownButton toggleDropdown={jest.fn} />;
      </AppContext.Provider>
    );

    const buttonElement = rendered.container.querySelector(
      ".dropdown-button-wrapper"
    ) as HTMLButtonElement;
    fireEvent.click(buttonElement);
    const dropdownElement = rendered.container.querySelector(
      ".dropdown-button-element"
    );
    expect(dropdownElement).toBeTruthy();
  });
});
