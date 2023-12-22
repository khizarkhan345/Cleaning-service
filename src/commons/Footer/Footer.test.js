import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Test Footer Component", () => {
  test("Render Footer Component successfully!", () => {
    render(<Footer />);

    const link1 = screen.getByText("Book Now");
    const link2 = screen.getByText("Home");
    const link3 = screen.getByText("FAQs");
    const link4 = screen.getByText("About Us");

    const link5 = screen.getByText("Instagram");
    const link6 = screen.getByText("Twitter");
    const link7 = screen.getByText("Email");

    const textElement = screen.getByText(/All rights reserved/i);

    expect(link1).toBeInTheDocument();
    expect(link2).toBeInTheDocument();
    expect(link3).toBeInTheDocument();
    expect(link4).toBeInTheDocument();
    expect(link5).toBeInTheDocument();
    expect(link6).toBeInTheDocument();
    expect(link7).toBeInTheDocument();

    expect(textElement).toBeInTheDocument();
  });
});
