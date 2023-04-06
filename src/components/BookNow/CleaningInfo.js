import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import Input from "../../commons/Input";
import InputSpecial from "../../commons/InputSpecial";
import InputTime from "../../commons/InputTime";

function CleaningInfo(props) {
  const {
    bool1,
    totalPrice,
    noOfBedrooms,
    noOfBathrooms,
    noOfLivingRooms,
    noOfKitchens,
    date,
    time,
    handleBool1,
    handleTotalPrice,
    handleBedrooms,
    handleBathrooms,
    handleLivingrooms,
    handleKitchens,
    handleDate,
    handleTime,
  } = props;
  return (
    <Grid
      sx={{
        "& .MuiButton-root:hover": {
          backgroundColor: "#414194",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}
        >
          <Item
            item
            sx={{
              width: { xs: "32.4rem", sm: "37.5rem" },
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.6rem",
              }}
            >
              1. Cleaning Information
            </Typography>
          </Item>
          <Item item sx={{ width: { xs: "0", sm: "35.9rem" } }}></Item>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ width: { xs: "33.4rem", sm: "75rem" }, marginBottom: "2rem" }}
        >
          <Grid item xs={12} sm={6}>
            <Input
              input={noOfBedrooms}
              name={"Bedrooms"}
              handleInput={handleBedrooms}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              input={noOfBathrooms}
              name={"Bathrooms"}
              handleInput={handleBathrooms}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ width: { xs: "33.4rem", sm: "75rem" }, marginBottom: "2rem" }}
        >
          <Grid item xs={12} sm={6}>
            <Input
              input={noOfLivingRooms}
              name={"Livingrooms"}
              handleInput={handleLivingrooms}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Input
              input={noOfKitchens}
              name={"Kitchens"}
              handleInput={handleKitchens}
            />
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ width: { xs: "33.4rem", sm: "75rem" }, marginBottom: "2rem" }}
        >
          <Grid item xs={12} sm={6}>
            <InputSpecial date={date} setDate={handleDate} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputTime time={time} setTime={handleTime} />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row", marginTop: "3rem" }}>
          <Item
            item
            sx={{
              width: { xs: "15.9rem", sm: "37.5rem" },
            }}
          >
            <Typography variant="body1" sx={{ fontSize: "1.6rem" }}>
              Estimated Price:
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "2.6rem",
                fontWeight: 600,
              }}
            >
              ${totalPrice}
            </Typography>
          </Item>
          <Item
            item
            sx={{
              width: { xs: "15.9rem", sm: "35.9rem" },
              marginTop: "5.4rem",
              marginBottom: "2rem",
            }}
          >
            <Button
              item
              variant="filled"
              sx={{
                width: "13rem",
                height: "5rem",
                color: "#fff",
                fontSize: "1.5rem",
                backgroundColor: "#000080",
                borderRadius: "2rem",
                marginLeft: { xs: "3.2rem", sm: "22.9rem" },
              }}
              onClick={() => handleBool1()}
            >
              Next
            </Button>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default CleaningInfo;
