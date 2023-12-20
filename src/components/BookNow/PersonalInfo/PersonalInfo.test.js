import { render, screen, fireEvent } from "@testing-library/react";
import { useState } from "react";
import PersonalInfo from "./PersonalInfo";
describe("Test PersonalInfo Component", () => {
  test("Render PersonalInfo Component successfully", () => {
    render(<PersonalInfo />);

    const headingElement = screen.getByText(/Personal Information/i);
    const inputElement1 = screen.getByLabelText(/First Name/i);
    const inputElement2 = screen.getByLabelText(/Last Name/i);
    const inputElement3 = screen.getByLabelText(/Email/i);
    const inputElement4 = screen.getByLabelText(/Street Address/i);
    const inputElement5 = screen.getByLabelText(/City/i);
    const inputElement6 = screen.getByLabelText(/State/i);
    const inputElement7 = screen.getByLabelText(/Zipcode/i);
    const inputElement8 = screen.getByLabelText(/Phone No/i);

    const buttonElement1 = screen.getByRole("button", {
      name: "Previous",
    });

    const buttonElement2 = screen.getByRole("button", {
      name: "Next",
    });

    expect(headingElement).toBeInTheDocument();
    expect(inputElement1).toBeInTheDocument();
    expect(inputElement2).toBeInTheDocument();
    expect(inputElement3).toBeInTheDocument();
    expect(inputElement4).toBeInTheDocument();
    expect(inputElement5).toBeInTheDocument();
    expect(inputElement6).toBeInTheDocument();
    expect(inputElement7).toBeInTheDocument();
    expect(inputElement8).toBeInTheDocument();

    expect(buttonElement1).toBeInTheDocument();
    expect(buttonElement2).toBeInTheDocument();
  });

  test("updates first name input correctly", () => {
    const handleFirstNameMock = jest.fn();

    render(<PersonalInfo handleFirstName={handleFirstNameMock} />);

    const firstNameInput = screen.getByLabelText(/First Name/i);

    fireEvent.change(firstNameInput, { target: { value: "Khizar" } });

    expect(handleFirstNameMock).toHaveBeenCalledWith("Khizar");
  });

  test("Next button works correctly", () => {
    const handleBool2Mock = jest.fn();
    render(<PersonalInfo handleBool2={handleBool2Mock} />);

    const nextButton = screen.getByRole("button", {
      name: "Next",
    });

    fireEvent.click(nextButton);
    expect(handleBool2Mock).toHaveBeenCalled();
  });

  test("Next button works correctly", () => {
    const handleBool1Mock = jest.fn();
    render(<PersonalInfo handleBool1={handleBool1Mock} />);

    const previousButton = screen.getByRole("button", {
      name: "Previous",
    });

    fireEvent.click(previousButton);
    expect(handleBool1Mock).toHaveBeenCalled();
  });
});
