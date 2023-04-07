import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Box, Typography } from "@mui/material";
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
            textAlign: "center",
          }}
        >
          How Does Cleaning Therapy Work?
        </Typography>
      </Grid>
      <Grid
        container
        sx={{ width: { xs: "95%", md: "85%" }, margin: "0 auto" }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src={image}
            sx={{
              height: "45rem",
              width: "100%",
              borderRadius: "2.5rem",
              marginTop: "3rem",
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant="body2"
            sx={{
              fontSize: "1.6rem",
              fontWeight: 300,
              margin: "auto",
              color: "#fff",
              width: "95%",

              padding: {
                xs: "10rem 2rem 0 2rem",
                sm: "15rem 0 0 5rem",
              },
            }}
          >
            Studies have shown that a clean and organized environment can have a
            positive impact on mental health, particularly for people who
            struggle with anxiety, depression, or other mental health
            conditions. By taking care of the cleaning tasks that can be
            overwhelming or stressful, we can help you create a peaceful and
            relaxing space in your home.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={1}
        sx={{
          width: { xs: "95%", md: "85%" },
          margin: { xs: "10rem auto", sm: "15rem auto" },
        }}
      >
        <Grid item xs={12} sm={4} sx={{}}>
          <Item
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "2.5rem",
              backgroundColor: "#fff",
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
                width: "90%",
                fontSize: "1.6rem",
                margin: "1rem 0",
              }}
            >
              Our professional house cleaning team has the experience and
              expertise to leave your home spotless and stress-free.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item
            sx={{
              width: "100%",
              height: "100%",
              borderRadius: "2.5rem",
              backgroundColor: "#fff",
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
                width: "90%",
                fontSize: "1.6rem",
                margin: "1rem 0",
              }}
            >
              Our top priority is providing excellent service and delivering a
              clean and sparkling home that exceeds your expectations.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Item
            sx={{
              width: "100%",
              borderRadius: "2.5rem",
              backgroundColor: "#fff",
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
                width: "90%",
                fontSize: "1.6rem",
                margin: "1rem 0",
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
