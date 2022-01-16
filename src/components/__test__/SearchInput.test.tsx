import { render, fireEvent } from "@testing-library/react";
import { SearchInput } from "../SearchInput";

describe("SearchInput", () => {
  test("should render input element", () => {
    const rendered = render(<SearchInput />);
    const inputElement = rendered.container.querySelector(".search-input");
    expect(inputElement).toBeInTheDocument();
  });

  test("should be able to type in the input", () => {
    const rendered = render(<SearchInput />);
    const inputElement = rendered.container.querySelector(
      ".search-input"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "Typing" } });

    expect(inputElement.value).toBe("Typing");
  });
});
