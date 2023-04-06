import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography, Link } from "@mui/material";

function Footer() {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#5a2aa2", flexDirection: "column" }}
    >
      <Grid sx={{ width: "85%", display: "flex", margin: "0 auto" }}>
        <Grid xs={6}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              margin: "2rem 0",
              "& .MuiLink-root": {
                fontSize: "1.8rem",
                fontWeight: 300,
                lineHeight: "3.15rem",
                color: "#fff",
              },
            }}
          >
            <Link color="inherit" underline="none" href="/booknow">
              Book Now
            </Link>
            <Link color="inherit" underline="none" href="/">
              Home
            </Link>
            <Link color="inherit" underline="none" href="/faq">
              FAQs
            </Link>
            <Link color="inherit" underline="none" href="/aboutus">
              About Us
            </Link>
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              margin: "2rem 0",
              "& .MuiLink-root": {
                fontSize: "1.8rem",
                fontWeight: 300,
                lineHeight: "3.15rem",
                color: "#fff",
              },
            }}
          >
            <Link color="inherit" underline="none" href="/">
              Twitter
            </Link>
            <Link color="inherit" underline="none" href="/">
              Instagram
            </Link>
            <Link color="inherit" underline="none" href="/">
              Email
            </Link>
          </Item>
        </Grid>
      </Grid>
      <Typography
        item
        variant="body1"
        sx={{
          display: "block",
          color: "#fff",
          fontSize: { xs: "1.6rem", sm: "1.8rem" },
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        &copy; Cleaning With Love. All Rights Reserved.
      </Typography>
    </Grid>
  );
}

export default Footer;
