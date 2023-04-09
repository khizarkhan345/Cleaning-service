import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

function InputSpecial(props) {
  const { date, setDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          value={date}
          onChange={(newValue) => {
            console.log(dayjs(newValue).format("MM/DD/YYYY"));
            setDate(newValue);
          }}
          sx={{
            width: "100%",
            borderRadius: "1rem",
            "& .MuiOutlinedInput-input": {
              fontSize: "2rem",
            },
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

export default InputSpecial;
