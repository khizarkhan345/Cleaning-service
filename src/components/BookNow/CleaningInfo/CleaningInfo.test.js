import { fireEvent, render, screen } from "@testing-library/react";
import CleaningInfo from "./CleaningInfo";

// jest.mock("@mui/x-date-pickers/DatePicker");
// jest.mock("@mui/x-date-pickers/internals/demo/DemoContainer");
// jest.mock("@mui/x-date-pickers/LocalizationProvider");

describe("<CleaningInfo />", () => {
  test("Render CleaningInfo Component correctly", () => {
    render(<CleaningInfo />);

    const headingElement = screen.getByText(/Cleaning Information/i);
    const inputElement1 = screen.getByText(/bedrooms/i);
    const inputElement2 = screen.getByText(/bathrooms/i);
    const inputElement3 = screen.getByText(/Livingrooms/i);
    const inputElement4 = screen.getByText(/Kitchens/i);
    const textElement = screen.getByText(/Estimated price/i);

    const buttonElement1 = screen.getByRole("button", {
      name: "Next",
    });

    // Check that these elements are present in the DOM
    expect(headingElement).toBeInTheDocument();
    expect(inputElement1).toBeInTheDocument();
    expect(inputElement2).toBeInTheDocument();
    expect(inputElement3).toBeInTheDocument();
    expect(inputElement4).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(buttonElement1).toBeInTheDocument();
  });

  test("updates bedroom input correctly", () => {
    handleBool1Mock = jest.fn();
    render(<CleaningInfo handleBool1={handleBool1Mock} />);

    const buttonElement = screen.getByRole("button", {
      name: "Next",
    });

    fireEvent.click(buttonElement);
    expect(handleBool1Mock).toHaveBeenCalled();
  });
});
