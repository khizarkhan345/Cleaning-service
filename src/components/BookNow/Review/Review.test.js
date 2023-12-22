import { fireEvent, render, screen } from "@testing-library/react";
import Review from "./Review";

describe("Test Review Component", () => {
  const testProps = {
    totalAmount: "80",
    firstName: "Khizar",
    lastName: "Khan",
    email: "test@test.com",
    stAddress: "Hagel Cir",
    city: "Lorton",
    state: "VA",
    zipCode: "22079",
    phoneNo: "571-12344535",
    noOfBedrooms: "1",
    noOfBathrooms: "1",
    noOfLivingrooms: "1",
    noOfKitchens: "1",
    date: "12/18/2023",
    time: "12:00:00",
    handleBool2: jest.fn(),
    handleSubmit: jest.fn(),
  };
  test("renders personal information correctly", () => {
    render(<Review {...testProps} />);

    // Check if personal information is rendered correctly
    const reviewAndBookElement = screen.getByText(/Review & Book/i);
    const headingElement = screen.getByRole("heading", {
      name: "Personal Information",
    });
    const firstNameElement = screen.getByText(/First Name/i);
    const lastNameElement = screen.getByText(/Last Name/i);
    const emailElement = screen.getByText(/Email/i);
    const phoneNoElement = screen.getByText(/Phone No/i);
    const addressElement = screen.getByText(/Address/i);

    expect(headingElement).toBeInTheDocument();

    expect(reviewAndBookElement).toBeInTheDocument();
    expect(firstNameElement).toBeInTheDocument();
    expect(lastNameElement).toBeInTheDocument();
    expect(emailElement).toBeInTheDocument();
    expect(phoneNoElement).toBeInTheDocument();
    expect(addressElement).toBeInTheDocument();
  });

  test("renders cleaning information correctly", () => {
    render(<Review {...testProps} />);

    // Check if cleaning information is rendered correctly
    const headingElement = screen.getByRole("heading", {
      name: "Cleaning Information",
    });

    const bedroomTextElement = screen.getByText(/bedrooms to be cleaned/i);
    const bathroomTextElement = screen.getByText(/bathrooms to be cleaned/i);
    const livingroomTextElement = screen.getByText(
      /LivingRooms to be cleaned/i
    );
    const kitchenTextElement = screen.getByText(/Kitchens to be cleaned/i);
    const dateAndTimeElement = screen.getByText(/Date and time/i);
    const amountElement = screen.getByText(/Total amount/i);

    const previousButton = screen.getByRole("button", {
      name: "Previous",
    });

    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    expect(headingElement).toBeInTheDocument();
    expect(bedroomTextElement).toBeInTheDocument();
    expect(bathroomTextElement).toBeInTheDocument();
    expect(livingroomTextElement).toBeInTheDocument();
    expect(kitchenTextElement).toBeInTheDocument();
    expect(dateAndTimeElement).toBeInTheDocument();
    expect(amountElement).toBeInTheDocument();

    expect(previousButton).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });
  test("previous button works correctly", () => {
    const handleBool2Mock = jest.fn();
    render(<Review {...testProps} />);

    // Simulate clicking the previous button
    const previousButton = screen.getByRole("button", {
      name: "Previous",
    });

    fireEvent.click(previousButton);

    // check if the button has been called
    expect(testProps.handleBool2).toHaveBeenCalled();
  });

  test("submit button works correctly", () => {
    render(<Review {...testProps} />);

    // Simulate clicking the submit button
    const submitButton = screen.getByRole("button", {
      name: "Submit",
    });

    fireEvent.click(submitButton);

    // Check whether the button has been called
    expect(testProps.handleSubmit).toHaveBeenCalled();
  });
});
