import { render, screen } from "@testing-library/react";
import BookNow from "./BookNow";

// // Mocking the date adapter to prevent any unexpected behavior
// jest.mock("@mui/material/LocalizationProvider", () => ({
//   __esModule: true,
//   default: ({ children }) => children,
// }));

// jest.mock("@mui/material/DemoContainer", () => ({
//   __esModule: true,
//   default: ({ children }) => children,
// }));
// jest.mock("@mui/material/DemoItem", () => ({
//   __esModule: true,
//   default: ({ children }) => children,
// }));

describe("Test the Book Now component", () => {
  test("Render BookNow successfully", () => {
    render(<BookNow />);
  });
});
