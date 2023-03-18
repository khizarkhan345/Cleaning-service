import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function InputSelect(props) {
  const { state, handleState } = props;
  return (
    <FormControl
      sx={{
        width: "5rem",

        "& .MuiInputLabel-root": {
          fontSize: "2rem",
        },

        "& .MuiOutlinedInput-root-MuiSelect-root": {
          fontSize: "2rem",
        },

        "& .MuiMenuItem-root": {
          fontSize: "2rem",
        },

        "& .MuiOutlinedInput-root-MuiSelect-root": {
          fontSize: "2rem",
        },
      }}
    >
      <InputLabel id="demo-simple-select-autowidth-label">St</InputLabel>
      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={state}
        onChange={(e) => handleState(e.target.value)}
        autoWidth
        label="St"
      >
        <MenuItem value={"VA"}>VA</MenuItem>
        <MenuItem value={"MD"}>MD</MenuItem>
        <MenuItem value={"DC"}>DC</MenuItem>
      </Select>
    </FormControl>
  );
}

export default InputSelect;
