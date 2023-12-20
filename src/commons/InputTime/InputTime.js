import React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

function InputSpecial(props) {
  const { time, setTime } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["TimePicker", "TimePicker"]}>
        <TimePicker
          value={time}
          onChange={(newValue) => setTime(newValue)}
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
