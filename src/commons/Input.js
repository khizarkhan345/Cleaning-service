import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import minus from "../images/Minus.svg";
import plus from "../images/Plus.svg";

function Input(props) {
  const { input, name, handleInput } = props;

  return (
    <Item
      sx={{
        width: "36rem",
        height: "5.7rem",
        backgroundColor: "#d1d5db",
        borderRadius: "1rem",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        variant="icon"
        onClick={() => handleInput(input - 1, -40)}
        disabled={input === 0}
      >
        <Box
          component="img"
          src={minus}
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
      </Button>

      <Item sx={{ display: "flex", flexDirection: "row" }}>
        <Typography variant="body1" sx={{ fontSize: "2rem" }}>
          {input}
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "2rem", marginLeft: "1.5rem" }}
        >
          {name}
        </Typography>
      </Item>
      <Button variant="icon" onClick={() => handleInput(input + 1, 40)}>
        <Box
          component="img"
          src={plus}
          sx={{
            height: "3rem",
            width: "3rem",
          }}
        />
      </Button>
    </Item>
  );
}

export default Input;
