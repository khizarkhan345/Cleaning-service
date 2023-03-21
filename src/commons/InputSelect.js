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

        "& .MuiSelect-root": {
          fontSize: "2rem",
        },

        "& .MuiOutlinedInput-root-MuiSelect-root": {
          fontSize: "2rem",
        },
        "& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
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
        sx={{
          "& .MuiSelect-root": {
            fontSize: "2rem",
          },
          "& .MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root": {
            fontSize: "2rem",
          },
        }}
      >
        <MenuItem value={"VA"} sx={{ fontSize: "2rem" }}>
          VA
        </MenuItem>
        <MenuItem value={"MD"} sx={{ fontSize: "2rem" }}>
          MD
        </MenuItem>
        <MenuItem value={"DC"} sx={{ fontSize: "2rem" }}>
          DC
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default InputSelect;
