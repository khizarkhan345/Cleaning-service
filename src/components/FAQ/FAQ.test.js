import { render, screen, fireEvent } from "@testing-library/react";
import FAQ from "./FAQ";

describe("FAQ", () => {
  test("Render FAQ correctly", () => {
    render(<FAQ />);

    const headingElement = screen.getByRole("heading", {
      name: "Frequently Asked Questions (F.A.Q)",
    });

    const bodyElement1 = screen.getByText(
      /How often should i schedule a house cleaning?/i
    );

    const bodyElement2 = screen.getByText(/What tasks are included/i);

    const bodyElement3 = screen.getByText(/Do i need to provide/i);

    const bodyElement4 = screen.getByText(/Can i customise/i);

    const bodyElement5 = screen.getByText(/How do i pay/i);

    // const bodyElement1Ans = screen.getByText(
    //   /It depends on your personal preferences and needs./i,
    //   {
    //     exact: false,
    //   }
    // );

    expect(headingElement).toBeInTheDocument();
    expect(bodyElement1).toBeInTheDocument();
    expect(bodyElement2).toBeInTheDocument();
    expect(bodyElement3).toBeInTheDocument();
    expect(bodyElement4).toBeInTheDocument();
    expect(bodyElement5).toBeInTheDocument();

    const buttonElement1 = screen.getByRole("button", {
      name: "Arrow 1",
    });

    const buttonElement2 = screen.getByRole("button", {
      name: "Arrow 2",
    });

    const buttonElement3 = screen.getByRole("button", {
      name: "Arrow 3",
    });
    const buttonElement4 = screen.getByRole("button", {
      name: "Arrow 4",
    });
    const buttonElement5 = screen.getByRole("button", {
      name: "Arrow 5",
    });

    expect(buttonElement1).toBeInTheDocument();
    expect(buttonElement2).toBeInTheDocument();
    expect(buttonElement3).toBeInTheDocument();
    expect(buttonElement4).toBeInTheDocument();
    expect(buttonElement5).toBeInTheDocument();
    //expect(bodyElement1Ans).toBeInTheDocument();
  });

  test("button click works and answer display", async () => {
    const initialText1 = /It depends on your personal preferences and needs./i;
    const initialText2 = /A typical house cleaning service includes/i;
    const initialText3 = /It depends on the service you choose./i;
    const initialText4 = /Yes, we will allow you to customise/i;
    const initialText5 = /We offer online payment options/i;

    render(<FAQ />);

    const buttonElement1 = screen.getByRole("button", {
      name: "Arrow 1",
    });

    const buttonElement2 = screen.getByRole("button", {
      name: "Arrow 2",
    });

    const buttonElement3 = screen.getByRole("button", {
      name: "Arrow 3",
    });

    const buttonElement4 = screen.getByRole("button", {
      name: "Arrow 4",
    });
    const buttonElement5 = screen.getByRole("button", {
      name: "Arrow 5",
    });

    // Test button 1 and answer 1
    expect(screen.queryByText(initialText1)).toBeNull();

    fireEvent.click(buttonElement1);

    expect(screen.getByText(initialText1)).toBeInTheDocument();

    // Test button 2 and answer 2
    expect(screen.queryByText(initialText2)).toBeNull();

    fireEvent.click(buttonElement2);

    expect(screen.getByText(initialText2)).toBeInTheDocument();

    // Test button 3 and answer 3
    expect(screen.queryByText(initialText3)).toBeNull();

    fireEvent.click(buttonElement3);

    expect(screen.getByText(initialText3)).toBeInTheDocument();
    // Test that the answer is displayed after clicking the button

    // Test button 4 and answer 4
    expect(screen.queryByText(initialText4)).toBeNull();

    fireEvent.click(buttonElement4);

    expect(screen.getByText(initialText4)).toBeInTheDocument();

    // Test button 5 and answer 5
    expect(screen.queryByText(initialText5)).toBeNull();

    fireEvent.click(buttonElement5);

    expect(screen.getByText(initialText5)).toBeInTheDocument();
  });
});
