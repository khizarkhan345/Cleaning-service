import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
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
            width: "36rem",
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
