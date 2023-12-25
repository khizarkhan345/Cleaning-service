import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography } from "@mui/material";
import image from "../../../images/blob-mop.png";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from "@mui/material";

function Hero() {
  return (
    <Grid container sx={{ backgroundColor: "#F8FCFF" }}>
      <Grid
        container
        sx={{
          width: { xs: "90%", sm: "92%", md: "85%" },
          maxWidth: { xs: "90%", sm: "92%", md: "85%" },
          margin: "0 auto",
        }}
      >
        <Grid
          item
          xs={12}
          sm={5}
          sx={{
            "& .MuiButton-root:hover": {
              backgroundColor: "#414194",
            },
          }}
        >
          <Item
            sx={{
              width: { xs: "95%" },
              maxWidth: { xs: "95%" },
              margin: { xs: "0 auto" },
            }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: "4rem",
                width: { sm: "auto", md: "40rem" },
                height: "auto",
                marginTop: "8rem",
              }}
            >
              Cleanse Your Mind And Your Space
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
                width: { xs: "95%", sm: "18rem", md: "24rem" },
                height: "6rem",
                backgroundColor: "#000080",
                color: "#fff",
                borderRadius: "2rem",
                marginTop: { xs: "3rem", sm: "1rem" },
                fontSize: "1.5rem",
              }}
            >
              <Link color="inherit" underline="none" href="/booknow">
                Book Now
              </Link>
            </Button>
          </Item>
        </Grid>
        <Grid item xs={0} sm={7}>
          <Item sx={{}}>
            <Box
              component="img"
              src={image}
              alt="Hero"
              sx={{
                height: { xs: "0", sm: "55rem" },
                width: { xs: "0", sm: "100%" },
                paddingLeft: { md: "8rem", lg: "15rem" },
              }}
            />
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;
