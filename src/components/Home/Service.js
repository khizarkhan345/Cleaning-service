import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box, Typography, Button } from "@mui/material";
import image from "../../images/blob-vaccum.png";
import checkMark from "../../images/check-mark.svg";

function Service() {
  return (
    <Grid container sx={{ backgroundColor: "#F8FCFF" }}>
      <Grid sx={{ width: "85%", display: "flex", margin: "0 auto" }}>
        <Grid xs={6} sx={{}}>
          <Item sx={{ marginRight: "20rem", marginTop: "5rem" }}>
            <Box
              component="img"
              src={image}
              sx={{
                height: "67rem",
                width: "65rem",
              }}
            />
          </Item>
        </Grid>
        <Grid xs={6}>
          <Item
            sx={{
              width: "55.8rem",
              height: "54rem",
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
                fontSize: "4rem",
                width: "40rem",
                height: "auto",
                marginTop: "4rem",
              }}
            >
              Cleaning With Love House Service
            </Typography>
            <Item
              sx={{
                display: "flex",
                flexDirection: "column",
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
                    fontWeight: 500,
                    marginLeft: "2.2rem",
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
                    marginLeft: "2.2rem",
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
                    fontWeight: 500,
                    marginLeft: "2.2rem",
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
                    fontWeight: 500,
                    marginLeft: "2.2rem",
                  }}
                >
                  Stress free
                </Typography>
              </Item>
              <Button
                variant="filled"
                sx={{
                  width: "24rem",
                  height: "6rem",
                  backgroundColor: "#000080",
                  color: "#fff",
                  borderRadius: "2rem",
                  marginTop: "2.5rem",
                  fontSize: "1.5rem",
                  marginRight: "2rem",
                }}
              >
                Book Now
              </Button>
            </Item>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Service;
