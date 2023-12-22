import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

describe("Test Navbar", () => {
  test("Renders correctly on desktop", () => {
    render(<Navbar />);

    const headingElement = screen.getAllByText(/CLEANING WITH LOVE/);

    expect(headingElement[0]).toBeInTheDocument();
    expect(headingElement[1]).toBeInTheDocument();
  });

  test("Renders correctly on mobile", () => {
    Object.defineProperty(window, "innerWidth", { value: 480, writable: true });
    render(<Navbar />);

    const headingElement = screen.getAllByText(/CLEANING WITH LOVE/);

    expect(headingElement[0]).toBeInTheDocument();
    expect(headingElement[1]).toBeInTheDocument();
  });

  test("Renders Links correctly", () => {
    render(<Navbar />);

    const link1 = screen.getAllByText("Book Now");
    const link2 = screen.getAllByText("Home");
    const link3 = screen.getAllByText("FAQs");
    const link4 = screen.getAllByText("About Us");

    expect(link1[0]).toBeInTheDocument();
    expect(link2[0]).toBeInTheDocument();
    expect(link3[0]).toBeInTheDocument();
    expect(link4[0]).toBeInTheDocument();

    expect(link1[1]).toBeInTheDocument();
    expect(link2[1]).toBeInTheDocument();
    expect(link3[1]).toBeInTheDocument();
    expect(link4[1]).toBeInTheDocument();
  });
});
