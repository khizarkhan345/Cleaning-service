import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import image from "../../images/family-clean.png";
import "./AboutUs.css";
import { Typography } from "@mui/material";

function AboutUs() {
  return (
    <Grid container sx={{ width: "85%", margin: "0 auto" }}>
      <Grid xs={6} sx={{ marginTop: "6rem" }}>
        <Typography variant="h2" sx={{ fontSize: "3.2rem", fontWeight: 600 }}>
          About Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ width: "45rem", fontSize: "1.6rem", marginTop: "2rem" }}
        >
          Welcome to our Cleaning With Love cleaning service in Lorton, VA! We
          understand that maintaining a clean and organized home can be a source
          of stress and frustration for many people. That's why we are dedicated
          to helping our customers improve their mental health and well-being
          through the power of a clean environment. Our team of professional
          cleaners is highly trained and experienced in all aspects of house
          cleaning. From dusting and vacuuming to scrubbing surfaces and
          cleaning bathrooms, we leave no corner untouched. We use only the
          highest quality products and equipment to ensure a thorough and safe
          clean for your home. In addition to our standard cleaning services, we
          also offer specialized services such as laundry and ironing, as well
          as deep cleaning for those extra-tough jobs. And if you have any
          special requests, we are happy to customize our services to meet your
          needs. We look forward to serving you and helping you create a clean
          and relaxing home environment.
        </Typography>
      </Grid>
      <Grid xs={6} sx={{}}>
        <Box
          component="img"
          src={image}
          sx={{
            height: "61rem",
            width: "65rem",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default AboutUs;
