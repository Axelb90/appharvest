import { render, screen } from "@testing-library/react";
import Dashboard from "./dashboard";

describe("/components/dashboard", () => {
  render(<Dashboard />);
  it("Should render dashboard text", () => {
    const element = screen.getByText("dashboard");
    expect(element).toBeInTheDocument();
  });
});
