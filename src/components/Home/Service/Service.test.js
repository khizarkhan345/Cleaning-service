import { render, screen } from "@testing-library/react";
import Service from "./Service";

describe("Test Service Component", () => {
  test("Render Service Component Correctly", () => {
    render(<Service />);

    // get All the Element from the screen
    const imgElement = screen.getByAltText(/Cleaning person/i);
    const headingElement = screen.getByRole("heading", {
      name: "Cleaning With Love House Service",
    });
    const subImgElement = screen.getAllByAltText(/mark/i);
    const textElement1 = screen.getByText(/All cleaning supplies covered/i);
    const textElement2 = screen.getByText(/Organization Service offered/i);
    const textElement3 = screen.getByText(/Professional cleaners/i);
    const textElement4 = screen.getByText(/Stress free/i);
    const buttonElement = screen.getByRole("button", {
      name: "Book Now",
    });

    // Assert all the elements to be included in the DOM
    expect(imgElement).toBeInTheDocument();
    expect(headingElement).toBeInTheDocument();
    expect(subImgElement[0]).toBeInTheDocument();
    expect(subImgElement[1]).toBeInTheDocument();
    expect(subImgElement[2]).toBeInTheDocument();
    expect(subImgElement[3]).toBeInTheDocument();
    expect(textElement1).toBeInTheDocument();
    expect(textElement2).toBeInTheDocument();
    expect(textElement3).toBeInTheDocument();
    expect(textElement4).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
