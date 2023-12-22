import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

describe("Test Hero section", () => {
  test("Renders correctly", () => {
    render(<Hero />);

    const headingElement = screen.getByRole("heading", {
      name: "Cleanse Your Mind And Your Space",
    });

    const bodyElement = screen.getByText(/Improve your mental health/i);
    const buttonElement = screen.getByRole("button", {
      name: "Book Now",
    });
    const imgElement = screen.getByAltText(/Hero/i);

    expect(headingElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
    expect(imgElement).toBeInTheDocument();
  });
});
