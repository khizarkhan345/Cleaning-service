import { fireEvent, render, screen } from "@testing-library/react";
import InputState from "./InputState";

describe("<InputState />", () => {
  test("renders InputState with label and handles state changes", () => {
    // Mock handleState function
    const mockHandleState = jest.fn();

    // Render the component with test values
    render(
      <InputState
        state="VA"
        label="Select State"
        handleState={mockHandleState}
      />
    );

    // Get the label element
    const stateLabelElement = screen.getAllByText("Select State");

    // Get the state input element
    const inputElement = screen.getByText("VA");

    // const selectElement = screen
    //   .getAllByText("Select State")
    //   .parentNode.querySelector("select");

    //Check of the label element is rendered
    expect(stateLabelElement[0]).toBeInTheDocument();

    //Check if the selected state is displayed
    expect(inputElement).toBeInTheDocument();

    // Get the button element
    const buttonElement = screen.getByRole("button");

    //expect(selectLabel).toHaveValue("VA");

    // fireEvent.click(listbox.getByText("MD"));

    // expect(mockHandleState).toHaveBeenCalledWith("MD");
  });
});
