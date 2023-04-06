import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function InputSpecial(props) {
  const { date, setDate } = props;
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker", "DatePicker"]}>
        <DatePicker
          value={date}
          onChange={(newValue) => setDate(newValue)}
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
