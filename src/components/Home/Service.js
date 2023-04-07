import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box, Typography, Button } from "@mui/material";
import image from "../../images/blob-vaccum.png";
import checkMark from "../../images/check-mark.svg";

function Service() {
  return (
    <Grid container sx={{ backgroundColor: "#F8FCFF" }}>
      <Grid
        container
        sx={{
          width: { xs: "100%", sm: "85%" },
          display: "flex",
          margin: "0 auto",
        }}
      >
        <Grid item xs={12} sm={5} md={6} sx={{}}>
          <Box
            component="img"
            src={image}
            sx={{
              height: { xs: "67rem", sm: "60rem", md: "67rem" },
              width: "100%",
              paddingTop: { sm: "5rem", md: "0" },
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          md={6}
          sx={{
            width: "100%",

            backgroundColor: "#fff",
            margin: "10rem 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: "3.2rem",
              fontWeight: "700",
              width: { xs: "95%", sm: "90%", md: "80%" },
              height: "auto",
              marginTop: "4rem",
              paddingLeft: { xs: "0.8rem", md: "0" },
            }}
          >
            Cleaning With Love House Service
          </Typography>
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: { xs: "1.2rem", md: "0" },
              marginTop: "3rem",
              "& .MuiButton-root:hover": {
                backgroundColor: "#414194",
              },
            }}
          >
            <Item sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Box
                component="img"
                src={checkMark}
                sx={{
                  height: "3.6rem",
                  width: "2.8rem",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  marginLeft: { xs: "1.5rem", sm: "2.2rem" },
                }}
              >
                All cleaning supplies covered
              </Typography>
            </Item>
            <Item sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Box
                component="img"
                src={checkMark}
                sx={{
                  height: "3.6rem",
                  width: "2.8rem",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: 500,
                  marginLeft: { xs: "1.5rem", sm: "2.2rem" },
                }}
              >
                Organization Service offered
              </Typography>
            </Item>
            <Item sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Box
                component="img"
                src={checkMark}
                sx={{
                  height: "3.6rem",
                  width: "2.8rem",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  marginLeft: { xs: "1.5rem", sm: "2.2rem" },
                }}
              >
                Professional cleaners
              </Typography>
            </Item>
            <Item sx={{ display: "flex", marginTop: "1.5rem" }}>
              <Box
                component="img"
                src={checkMark}
                sx={{
                  height: "3.6rem",
                  width: "2.8rem",
                }}
              />
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2.2rem",
                  fontWeight: "500",
                  marginLeft: { xs: "1.5rem", sm: "2.2rem" },
                }}
              >
                Stress free
              </Typography>
            </Item>
            <Button
              variant="filled"
              sx={{
                width: { xs: "95%", sm: "24rem" },
                height: "6rem",
                backgroundColor: "#000080",
                color: "#fff",
                borderRadius: "2rem",
                marginTop: "4rem",
                fontSize: "1.5rem",
                marginRight: "2rem",
              }}
            >
              Book Now
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Service;
