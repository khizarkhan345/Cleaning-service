import { render, screen } from "@testing-library/react";
import ConfirmationBox from "./confirmationBox";

describe("Test ConfirmationBox Component", () => {
  test("Render Confirmation Component Successfully!", () => {
    render(
      <ConfirmationBox serverErrorBool={false} serverMessage={"Success"} />
    );

    const textElement = screen.getByRole("heading", {
      name: "Success",
    });

    const buttonElement = screen.getByRole("button", {
      name: "Close",
    });

    expect(textElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });
});
