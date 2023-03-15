import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Avatar, Typography } from "@mui/material";
import image from "../../images/blob-mop.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function Hero() {
  const URL = "../../images/blob-mop.png";

  return (
    <Grid container sx={{ backgroundColor: "#F8FCFF" }}>
      <Grid sx={{ width: "85%", margin: "0 auto", display: "flex" }}>
        <Grid
          item
          xs={4}
          sx={{
            "& .MuiButton-root:hover": {
              backgroundColor: "#414194",
            },
          }}
        >
          <Item>
            <Typography
              variant="h1"
              sx={{
                fontSize: "4rem",
                width: "40rem",
                height: "auto",
                marginTop: "8rem",
              }}
            >
              Clean Your Mind And Your Space
            </Typography>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.8rem",
                marginTop: "2rem",
                fontWeight: "30rem",
              }}
            >
              Improve your mental health with our cleaning services. Book
              instantly online for quick and easy access to professional
              cleaning that promotes well-being.
            </Typography>
            <Button
              sx={{
                width: "24rem",
                height: "6rem",
                backgroundColor: "#000080",
                color: "#fff",
                borderRadius: "2rem",
                marginTop: "1rem",
                fontSize: "1.5rem",
              }}
            >
              Book Now
            </Button>
          </Item>
        </Grid>
        <Grid item xs={8} sx={{ marginLeft: "27rem" }}>
          <Item sx={{}}>
            <Box
              component="img"
              src={image}
              sx={{ height: "55rem", width: "50rem" }}
            />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;
