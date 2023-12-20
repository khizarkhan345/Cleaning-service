import { render, screen, fireEvent } from "@testing-library/react";
import Input from "./Input";

describe("Test Input Component", () => {
  //const textElement1 = screen.getByRole("heading");
  test("Render Input Component Successfully", () => {
    const handleInputMock = jest.fn();
    render(<Input input={0} name="Bedrooms" handleInput={handleInputMock} />);

    const inputElement = screen.getByTestId("input");

    const nameElement = screen.getByText("Bedrooms");
    const decrementButton = screen.getByAltText(/minus/i);
    const incrementButton = screen.getByAltText(/plus/i);

    //Check if the input value is initially displayed as 0
    expect(inputElement).toHaveTextContent("0");

    // Check if the name and two buttons are there in the UI
    expect(nameElement).toBeInTheDocument();
    expect(decrementButton).toBeInTheDocument();
    expect(incrementButton).toBeInTheDocument();
  });

  test("handles increment button click", () => {
    const handleInputMock = jest.fn();
    render(<Input input={4} name="Bedrooms" handleInput={handleInputMock} />);

    const incrementButton = screen.getByAltText(/plus/i);

    fireEvent.click(incrementButton);

    expect(handleInputMock).toHaveBeenCalledWith(5, 40);
  });

  test("handles decrement button click", () => {
    const handleInputMock = jest.fn();
    render(<Input input={4} name="Bedrooms" handleInput={handleInputMock} />);

    const decrementButton = screen.getByAltText(/minus/i);

    fireEvent.click(decrementButton);

    expect(handleInputMock).toHaveBeenCalledWith(3, -40);
  });
});
