import { render, screen } from "@testing-library/react";
import AboutUs from "./AboutUs";

describe("About Us", () => {
  test("renders About Us and the heading", () => {
    render(<AboutUs />);
    const headingElement = screen.getByRole("heading", {
      name: "About Us",
    });

    const bodyElement = screen.getByText(
      /Welcome to our Cleaning With Love cleaning service in Lorton/i,
      { exact: false }
    );
    const imageElement = screen.getByRole("img");
    expect(headingElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
