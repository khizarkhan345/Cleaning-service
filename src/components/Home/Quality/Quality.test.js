import { render, screen } from "@testing-library/react";
import Quality from "./Quality";

describe("Test Quality Component", () => {
  test("Render Quality Component correctly", () => {
    //get all the elements
    render(<Quality />);

    const mainHeadingElement = screen.getByRole("heading", {
      name: "How Does Cleaning Therapy Work?",
    });

    const mainImgElement = screen.getByAltText(/cleaning person/i);

    const mainTextElement = screen.getByText(
      /Studies have shown that a clean/i
    );

    //get all the elements for sub part1
    const subImgElement1 = screen.getByAltText(/people/i);

    const subHeadingElement1 = screen.getByRole("heading", {
      name: "Experienced",
    });

    const subHeadingElement2 = screen.getByRole("heading", {
      name: "Cleaners",
    });

    const subTextElement1 = screen.getByText(
      /Our professional house cleaning team/i
    );

    // Assert the main element and subpart1 to be included in the DOM
    expect(mainHeadingElement).toBeInTheDocument();
    expect(mainImgElement).toBeInTheDocument();
    expect(mainTextElement).toBeInTheDocument();
    expect(subImgElement1).toBeInTheDocument();
    expect(subHeadingElement1).toBeInTheDocument();
    expect(subHeadingElement2).toBeInTheDocument();
    expect(subTextElement1).toBeInTheDocument();

    //get all the elements for sub part2
    const subImgElement2 = screen.getByAltText(/service/i);

    const subHeadingElement3 = screen.getByRole("heading", {
      name: "Great",
    });

    const subHeadingElement4 = screen.getByRole("heading", {
      name: "Service",
    });

    const subTextElement2 = screen.getByText(
      /Our top priority is providing excellent/i
    );

    //assert the elements from subpart2 to be included in the DOM

    expect(subImgElement2).toBeInTheDocument();
    expect(subHeadingElement3).toBeInTheDocument();
    expect(subHeadingElement4).toBeInTheDocument();
    expect(subTextElement2).toBeInTheDocument();

    //get all the elements from part3
    const subImgElement3 = screen.getByAltText(/cost/i);

    const subHeadingElement5 = screen.getByRole("heading", {
      name: "Cost",
    });

    const subHeadingElement6 = screen.getByRole("heading", {
      name: "Effective",
    });

    const subTextElement3 = screen.getByText(
      /We offer competitive pricing and flexible/i
    );

    //assert the elements from subpart3 to be included in the DOM
    expect(subImgElement3).toBeInTheDocument();
    expect(subHeadingElement5).toBeInTheDocument();
    expect(subHeadingElement6).toBeInTheDocument();
    expect(subTextElement3).toBeInTheDocument();
  });
});
