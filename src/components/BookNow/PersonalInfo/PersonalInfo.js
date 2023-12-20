import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import InputField from "../../../commons/InputField/InputField";
import InputState from "../../../commons/InputState/InputState";

function PersonalInfo(props) {
  const {
    firstName,
    lastName,
    email,
    stAdress,
    city,
    state,
    zipCode,
    phoneNo,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleStAddress,
    handleCity,
    handleState,
    handleZipCode,
    handlePhoneNo,
    handleBool1,
    handleBool2,
  } = props;
  return (
    <Grid>
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
          <Item sx={{ width: "25rem" }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: "1.6rem",
                marginBottom: "2rem",
              }}
            >
              2. Personal Information
            </Typography>
          </Item>
          <Item sx={{ width: { xs: "8.4rem", sm: "23.4rem" } }}></Item>
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{ width: { xs: "35rem", sm: "50rem" }, marginBottom: "2rem" }}
        >
          <Grid item xs={12} sm={6}>
            <InputField
              input={firstName}
              label={"First Name"}
              setInput={handleFirstName}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              input={lastName}
              label={"Last Name"}
              setInput={handleLastName}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}></Grid>
        <Grid
          sx={{ width: { xs: "33.4rem", sm: "48.4rem" }, marginBottom: "2rem" }}
        >
          <InputField input={email} label={"Email"} setInput={handleEmail} />
        </Grid>
        <Grid
          item
          sx={{ width: { xs: "33.4rem", sm: "48.4rem" }, marginBottom: "2rem" }}
        >
          <InputField
            input={stAdress}
            label={"Street Address"}
            setInput={handleStAddress}
          />
        </Grid>
        <Grid
          container
          spacing={2}
          sx={{
            marginBottom: "2rem",
            width: { xs: "35rem", sm: "50rem" },
          }}
        >
          <Grid item xs={12} sm={5}>
            <InputField input={city} label={"City"} setInput={handleCity} />
          </Grid>
          <Grid item xs={12} sm={2}>
            <InputState
              state={state}
              label={"State"}
              handleState={handleState}
            />
          </Grid>
          <Grid item xs={12} sm={5}>
            <InputField
              input={zipCode}
              label={"Zipcode"}
              setInput={handleZipCode}
            />
          </Grid>
        </Grid>
        <Grid
          sx={{ width: { xs: "33.4rem", sm: "48.4rem" }, marginBottom: "2rem" }}
        >
          <InputField
            input={phoneNo}
            label={"Phone No"}
            setInput={handlePhoneNo}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Item sx={{ width: { xs: "6.4rem", sm: "21.4rem" } }}></Item>
          <Item sx={{ width: "27rem" }}>
            <Grid
              sx={{
                display: "flex",
                flexDirection: "row",
                marginBottom: "3rem",
                "& .MuiButton-root:hover": {
                  backgroundColor: "#414194",
                  color: "#fff",
                  border: "none",
                },
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  width: "13rem",
                  height: "5rem",
                  color: "#000080",
                  fontSize: "1.5rem",
                  border: "2px solid #000080",
                  borderRadius: "2rem",
                  marginRight: "1.5rem",
                }}
                onClick={() => handleBool1()}
              >
                Previous
              </Button>
              <Button
                variant="filled"
                sx={{
                  width: "13rem",
                  height: "5rem",
                  color: "#fff",
                  fontSize: "1.5rem",
                  backgroundColor: "#000080",
                  borderRadius: "2rem",
                }}
                onClick={() => handleBool2()}
              >
                Next
              </Button>
            </Grid>
          </Item>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;
