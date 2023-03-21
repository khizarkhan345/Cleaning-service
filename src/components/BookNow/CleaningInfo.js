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
      <Grid sx={{ width: "59.5%", margin: "0 auto" }}></Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.6rem",
              marginBottom: "2rem",
              width: "37.5rem",
              marginRight: "0 !important",
              marginLeft: "0 !important",
            }}
          >
            1. Cleaning Information
          </Typography>
          <Item sx={{ width: "36rem" }}></Item>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Grid xs={6} sx={{ marginRight: "2rem" }}>
            <Input
              input={noOfBedrooms}
              name={"Bedrooms"}
              handleInput={handleBedrooms}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              input={noOfBathrooms}
              name={"Bathrooms"}
              handleInput={handleBathrooms}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", flexDirection: "row", marginTop: "2.5rem" }}
        >
          <Grid xs={6} sx={{ marginRight: "2rem" }}>
            <Input
              input={noOfLivingRooms}
              name={"Livingrooms"}
              handleInput={handleLivingrooms}
            />
          </Grid>
          <Grid xs={6}>
            <Input
              input={noOfKitchens}
              name={"Kitchens"}
              handleInput={handleKitchens}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{ display: "flex", flexDirection: "row", marginTop: "2.5rem" }}
        >
          <Grid xs={6} sx={{ marginRight: "2rem" }}>
            <InputSpecial date={date} setDate={handleDate} />
          </Grid>
          <Grid xs={6}>
            <InputTime time={time} setTime={handleTime} />
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Item sx={{ width: "37.5rem" }}>
            <Typography
              variant="body1"
              sx={{ fontSize: "1.6rem", marginTop: "3rem" }}
            >
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
          <Item sx={{ width: "36rem" }}></Item>
        </Grid>
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          <Item sx={{ width: "37rem" }}></Item>
          <Item sx={{ width: "36rem", marginBottom: "3rem" }}>
            {" "}
            <Button
              variant="filled"
              sx={{
                width: "13rem",
                height: "5rem",
                color: "#fff",
                fontSize: "1.5rem",
                backgroundColor: "#000080",
                borderRadius: "2rem",
                marginLeft: "23.5rem",
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
