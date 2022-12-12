import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CustomButton } from "..";

describe("CustomButton component", () => {
  const label = "button label";
  const mockOnClick = jest.fn();

  it("should render the expected default state", () => {
    render(<CustomButton label={label} onClickButton={mockOnClick} />);

    expect(screen.getByRole("button")).toHaveTextContent(label);
    expect(screen.getByRole("button")).toHaveStyle("background-color: #63d882");
  });

  it("should render danger button", () => {
    render(<CustomButton danger label={label} onClickButton={mockOnClick} />);

    expect(screen.getByRole("button")).toHaveStyle("background-color: #ff6647");
  });

  it("should call onClickButton action", async () => {
    render(<CustomButton label={label} onClickButton={mockOnClick} />);

    expect(mockOnClick.mock.calls.length).toBe(0);

    await userEvent.click(screen.getByRole("button"));
    expect(mockOnClick.mock.calls.length).toBe(1);
  });
});
