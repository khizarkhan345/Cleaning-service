import React from "react";
import { render, screen } from "@testing-library/react";
import InputDate from "./InputDate";
import dayjs from "dayjs";

// jest.mock("@mui/x-date-pickers/DateTimePicker", () =>
//   require("../../../__mocks__/x-date-pickers")
// );
// jest.mock("@mui/x-date-pickers/internals/demo/DemoContainer", () =>
//   require("../../../__mocks__/x-date-pickers")
// );
// jest.mock("@mui/x-date-pickers/LocalizationProvider", () =>
//   require("../../../__mocks__/x-date-pickers")
// );

describe("<InputDate />", () => {
  test("Render InputDate Successfully!", () => {
    const date = dayjs("01-01-2022");
    const setDate = jest.fn();

    console.log(date);

    render(<InputDate date={date} setDate={() => {}} />);

    // You can use screen.getByLabelText if your DatePicker has a label or other accessible text
    const datePickerInput = screen.getByRole("textbox");
    // console.log("Actual value:", datePickerInput);

    // Example: Assert that the date value is formatted correctly
    expect(datePickerInput).toBeInTheDocument();
  });
});
