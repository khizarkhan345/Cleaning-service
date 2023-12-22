import { render, screen } from "@testing-library/react";
import BottomBar from "./BottomBar";

describe("Test BottomBar Component", () => {
  test("Render BottomBar Component Successfully!", () => {
    render(<BottomBar />);

    const textElement = screen.getByText(/Cleaning with love/i);
    expect(textElement).toBeInTheDocument();
  });
});
