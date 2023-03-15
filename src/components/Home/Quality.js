import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box, Typography, Icon } from "@mui/material";
import image from "../../images/blob-group.jpeg";
import people from "../../images/people.svg";
import dollar from "../../images/Dollar.svg";
import thumb from "../../images/thumb-up.svg";
function Quality() {
  return (
    <Grid sx={{ backgroundColor: "#5a2aa2" }}>
      <Grid sx={{ display: "flex" }}>
        <Typography
          variant="h2"
          sx={{
            color: "#fff",
            fontSize: "3rem",
            margin: "4rem auto",
          }}
        >
          How Does Cleaning Therapy Work?
        </Typography>
      </Grid>

      <Grid sx={{ width: "85%", display: "flex", margin: "0 auto" }}>
        <Grid xs={6}>
          <Item>
            <Box
              component="img"
              src={image}
              sx={{
                height: "45rem",
                width: "50rem",
                borderRadius: "2.5rem",
                marginTop: "3rem",
              }}
            />
          </Item>
        </Grid>
        <Grid xs={6} sx={{ marginLeft: "8rem", marginTop: "12rem" }}>
          <Item>
            <Typography
              variant="body2"
              sx={{
                fontSize: "1.6rem",
                fontWeight: 300,
                margin: "auto",
                color: "#fff",
                width: "38rem",
              }}
            >
              Studies have shown that a clean and organized environment can have
              a positive impact on mental health, particularly for people who
              struggle with anxiety, depression, or other mental health
              conditions. By taking care of the cleaning tasks that can be
              overwhelming or stressful, we can help you create a peaceful and
              relaxing space in your home.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Grid sx={{ width: "85%", display: "flex", margin: "15rem auto" }}>
        <Grid
          xs={4}
          sx={{
            width: "34rem",
            height: "36rem",
            borderRadius: "2.5rem",
            backgroundColor: "#fff",
          }}
        >
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Item
              sx={{
                width: "10rem",
                height: "10rem",
                border: "0.4rem solid #5a2aa2",
                borderRadius: "100%",
                margin: "2rem 0",
              }}
            >
              <Box
                component="img"
                src={people}
                sx={{
                  height: "5rem",
                  width: "5rem",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                }}
              />
            </Item>
            <Typography
              variant="h2"
              sx={{ fontSize: "3.2rem", fontWeight: 600 }}
            >
              Experienced
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "2.6rem", fontWeight: 500 }}
            >
              Cleaners
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                width: "25rem",
                fontSize: "1.6rem",
                marginTop: "1rem",
              }}
            >
              Our professional house cleaning team has the experience and
              expertise to leave your home spotless and stress-free.
            </Typography>
          </Item>
        </Grid>
        <Grid
          xs={4}
          sx={{
            width: "34rem",
            height: "36rem",
            borderRadius: "2.5rem",
            backgroundColor: "#fff",
            marginLeft: "6rem",
          }}
        >
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Item
              sx={{
                width: "10rem",
                height: "10rem",
                border: "0.4rem solid #5a2aa2",
                borderRadius: "100%",
                margin: "2rem 0",
              }}
            >
              <Box
                component="img"
                src={thumb}
                sx={{
                  height: "5rem",
                  width: "5rem",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                }}
              />
            </Item>
            <Typography
              variant="h2"
              sx={{ fontSize: "3.2rem", fontWeight: 600 }}
            >
              Great
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "2.6rem", fontWeight: 500 }}
            >
              Service
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                width: "25rem",
                fontSize: "1.6rem",
                marginTop: "1rem",
              }}
            >
              Our top priority is providing excellent service and delivering a
              clean and sparkling home that exceeds your expectations.
            </Typography>
          </Item>
        </Grid>
        <Grid
          xs={4}
          sx={{
            width: "34rem",
            height: "36rem",
            borderRadius: "2.5rem",
            backgroundColor: "#fff",
            marginLeft: "6rem",
          }}
        >
          <Item
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Item
              sx={{
                width: "10rem",
                height: "10rem",
                border: "0.4rem solid #5a2aa2",
                borderRadius: "100%",
                margin: "2rem 0",
              }}
            >
              <Box
                component="img"
                src={dollar}
                sx={{
                  height: "5rem",
                  width: "5rem",
                  marginLeft: "2rem",
                  marginTop: "2rem",
                }}
              />
            </Item>
            <Typography
              variant="h2"
              sx={{ fontSize: "3.2rem", fontWeight: 600 }}
            >
              Cost
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "2.6rem", fontWeight: 500 }}
            >
              Effective
            </Typography>
            <Typography
              variant="body1"
              sx={{
                textAlign: "center",
                width: "25rem",
                fontSize: "1.6rem",
                marginTop: "1rem",
              }}
            >
              We offer competitive pricing and flexible service options to make
              our professional house cleaning services cost effective for your
              budget and needs.
            </Typography>
          </Item>
        </Grid>
      </Grid>
      <Typography sx={{ color: "#fa2aa2", opacity: 0 }}>Hello</Typography>
    </Grid>
  );
}

export default Quality;
