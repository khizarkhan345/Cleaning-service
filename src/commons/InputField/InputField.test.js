import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./InputField";

describe("<InputField />", () => {
  test("renders inputField with labels and handles input changes", () => {
    //mock the setInput function
    const setInputMock = jest.fn();

    //Render the component with test values
    render(
      <InputField
        input="Test Input"
        label="Test Label"
        setInput={setInputMock}
      />
    );

    // Get the input and label elements
    const inputElement = screen.getByDisplayValue("Test Input");
    const labelElement = screen.getByLabelText("Test Label");

    // Check if the input value is displayed
    expect(inputElement).toBeInTheDocument();

    // Check if the label is rendered
    expect(labelElement).toBeInTheDocument();

    // Simulate input change
    fireEvent.change(inputElement, { target: { value: "new value" } });

    // Check if setInput function is called with the correct value
    expect(setInputMock).toHaveBeenCalledWith("new value");
  });
});
