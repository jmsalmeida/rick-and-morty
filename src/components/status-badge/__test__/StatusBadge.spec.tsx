import { render, screen } from "@testing-library/react";
import { StatusBadge } from "../";

const colors = {
  alive: "#63D882",
  dead: "#FF6647",
  unknown: "#ccc",
};
describe("StatusBadge component", () => {
  it("should have the expected color to Alive status", () => {
    render(<StatusBadge status="alive" />);

    expect(screen.getByTestId("status-content")).toHaveStyle(
      `color: ${colors.alive}`,
    );

    expect(screen.getByTestId("status-pin")).toHaveStyle(
      `background: ${colors.alive}`,
    );
  });

  it("should have the expected color to Dead status", () => {
    render(<StatusBadge status="dead" />);

    expect(screen.getByTestId("status-content")).toHaveStyle(
      `color: ${colors.dead}`,
    );

    expect(screen.getByTestId("status-pin")).toHaveStyle(
      `background: ${colors.dead}`,
    );
  });

  it("should have the expected color to Unknown status", () => {
    render(<StatusBadge status="unknown" />);

    expect(screen.getByTestId("status-content")).toHaveStyle(
      `color: ${colors.unknown}`,
    );

    expect(screen.getByTestId("status-pin")).toHaveStyle(
      `background: ${colors.unknown}`,
    );
  });
});
