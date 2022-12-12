import { render, screen, fireEvent } from "@testing-library/react";
import { CustomInput } from "..";

describe("CustomInput component", () => {
  let label: string, inputValue: string, placeholder: string;

  const mockOnChange = jest.fn();

  const renderComponent = (): void => {
    render(
      <CustomInput
        label={label}
        inputValue={inputValue}
        placeholder={placeholder}
        onChange={mockOnChange}
      />,
    );
  };

  beforeEach(() => {
    inputValue = "";
    placeholder = "placeholder input";
  });

  it("should render the default state", () => {
    renderComponent();

    expect(screen.queryByTestId("label-content")).not.toBeInTheDocument();

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toHaveDisplayValue("");
    expect(input).toHaveAttribute("placeholder", placeholder);
  });

  it("should render label when its exists", () => {
    label = "label";
    renderComponent();

    const labelElement = screen.queryByTestId("label-content");
    expect(labelElement).toHaveTextContent(label);
  });

  it("should render with initial value", () => {
    inputValue = "Rick Sanchez";
    renderComponent();

    const input = screen.getByPlaceholderText(placeholder);
    expect(input).toHaveDisplayValue(inputValue);
  });

  it("should call onChange after set input value with expected param", async () => {
    renderComponent();

    expect(mockOnChange.mock.calls.length).toBe(0);

    const input = screen.getByPlaceholderText(placeholder);
    fireEvent.change(input, { target: { value: "Morty" } });

    expect(mockOnChange.mock.calls.length).toBe(1);
    expect(mockOnChange.mock.calls[0][0]).toBe("Morty");
  });
});
