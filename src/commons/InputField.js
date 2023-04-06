import React from "react";
import TextField from "@mui/material/TextField";

function InputField(props) {
  const { input, label, setInput } = props;
  return (
    <TextField
      id="outlined-controlled"
      label={label}
      value={input}
      onChange={(event) => {
        setInput(event.target.value);
      }}
      sx={{
        width: "100%",
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
