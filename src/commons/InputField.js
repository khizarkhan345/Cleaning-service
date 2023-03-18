import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  const { input, label, width, setInput } = props;
  return (
    <TextField
      id="outlined-controlled"
      label={label}
      value={input}
      onChange={(event) => {
        setInput(event.target.value);
      }}
      sx={{
        width: width,
        fontSize: "2rem",
        "& .MuiInputLabel-root": {
          fontSize: "2rem",
        },
        "& .MuiOutlinedInput-root": {
          fontSize: "2rem",
        },
      }}
    />
  );
}

export default InputField;
