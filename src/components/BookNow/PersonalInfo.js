import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Button, Box, Typography } from "@mui/material";
import InputField from "../../commons/InputField";
import InputSelect from "../../commons/InputSelect";

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
      <Typography
        variant="body1"
        sx={{
          fontSize: "1.6rem",
          marginBottom: "2rem",
        }}
      >
        2. Personal Information
      </Typography>
      <Grid
        sx={{
          width: "85%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{ display: "flex", flexDirection: "row", marginBottom: "2rem" }}
        >
          <Grid xs={6} sx={{ marginRight: "1rem" }}>
            <Item>
              <InputField
                input={firstName}
                label={"First Name"}
                setInput={handleFirstName}
                width={"24.5rem"}
              />
            </Item>
          </Grid>
          <Grid xs={6}>
            <Item>
              <InputField
                input={lastName}
                label={"Last Name"}
                setInput={handleLastName}
                width={"24.5rem"}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid sx={{ marginBottom: "2rem" }}>
          <Item>
            <InputField
              input={email}
              label={"Email"}
              setInput={handleEmail}
              width={"50rem"}
            />
          </Item>
        </Grid>
        <Grid sx={{ marginBottom: "2rem" }}>
          <Item>
            <InputField
              input={stAdress}
              label={"Street Address"}
              setInput={handleStAddress}
              width={"50rem"}
            />
          </Item>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            marginBottom: "2rem",
          }}
        >
          <Grid xs={5} sx={{ marginRight: "1rem" }}>
            <Item>
              <InputField
                input={city}
                label={"City"}
                setInput={handleCity}
                width={"21.25rem"}
              />
            </Item>
          </Grid>
          <Grid xs={2} sx={{ marginRight: "1rem" }}>
            <Item>
              <InputSelect
                state={state}
                handleState={handleState}
                width={"5rem"}
              />
            </Item>
          </Grid>
          <Grid xs={5}>
            <Item>
              <InputField
                input={zipCode}
                label={"Zipcode"}
                setInput={handleZipCode}
                width={"21.25rem"}
              />
            </Item>
          </Grid>
        </Grid>
        <Grid sx={{ marginBottom: "2rem" }}>
          <Item>
            <InputField
              input={phoneNo}
              label={"Phone No"}
              setInput={handlePhoneNo}
              width={"50rem"}
            />
          </Item>
        </Grid>
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
      </Grid>
    </Grid>
  );
}

export default PersonalInfo;
