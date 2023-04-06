import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import { styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function TestGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item sm={12} md={4}>
          <Item>xs</Item>
        </Grid>
        <Grid item sm={12} md={4}>
          <Item>xs=6</Item>
        </Grid>
        <Grid item sm={12} md={4}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TestGrid;
