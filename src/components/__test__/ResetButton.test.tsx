import { render, screen } from "@testing-library/react";
import { ResetButton } from "../ResetButton";

describe("ResetButton", () => {
  test("should render button with text", () => {
    render(<ResetButton />);
    const buttonTitle = screen.getByText(/Reset/i);
    expect(buttonTitle).toBeInTheDocument();
  });
});
