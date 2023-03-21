import React from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import { Typography, Button } from "@mui/material";
import dayjs from "dayjs";

function Review(props) {
  const {
    totalAmount,
    firstName,
    lastName,
    email,
    phoneNo,
    stAddress,
    city,
    state,
    zipCode,
    noOfBedrooms,
    noOfBathrooms,
    noOfLivingrooms,
    noOfKitchens,
    date,
    time,
    handleBool2,
  } = props;

  const address = stAddress + " " + city + " " + state + " " + zipCode;
  const dateAndTime = dayjs(date) + " " + dayjs(time);
  return (
    <Grid>
      <Grid sx={{ width: "25%", margin: "0 auto" }}>
        <Grid>
          <Typography
            variant="body1"
            sx={{
              fontSize: "1.6rem",
              margin: "3rem 0",
            }}
          >
            3. Review and Book
          </Typography>
          <Typography variant="h3">Personal Information</Typography>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1.5rem 0",
            }}
          >
            <Item
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "1.6rem",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#9ca3af", fontSize: "1.6rem" }}
              >
                First Name
              </Typography>
              <Typography variant="body2">{firstName}</Typography>
            </Item>
            <Item
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "1.6rem",
                },
              }}
            >
              <Typography
                variant="body2"
                sx={{ color: "#9ca3af", fontSize: "1.6rem" }}
              >
                Last Name
              </Typography>
              <Typography variant="body2">{lastName}</Typography>
            </Item>
          </Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              margin: "1.5rem 0",
            }}
          >
            <Item
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "1.6rem",
                },
              }}
            >
              <Typography sx={{ color: "#9ca3af", fontSize: "1.6rem" }}>
                Email
              </Typography>
              <Typography variant="body2">{email}</Typography>
            </Item>
            <Item
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "1.6rem",
                },
              }}
            >
              <Typography sx={{ color: "#9ca3af", fontSize: "1.6rem" }}>
                Phone No
              </Typography>
              <Typography variant="body2">{phoneNo}</Typography>
            </Item>
          </Item>
          <Item
            sx={{
              margin: "1.5rem 0",
              "& .MuiTypography-root": {
                fontSize: "1.6rem",
              },
            }}
          >
            <Typography sx={{ color: "#9ca3af", fontSize: "1.6rem" }}>
              Address
            </Typography>
            <Typography variant="body2">{address}</Typography>
          </Item>
        </Grid>
        <Typography variant="h3" sx={{ marginBottom: "2rem" }}>
          Cleaning Inforamation
        </Typography>
        <Grid>
          {noOfBedrooms > 0 ? (
            <Item>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  color: "#9ca3af",
                  margin: "1.5rem 0",
                }}
              >
                {noOfBedrooms} room/rooms to be cleaned
              </Typography>
            </Item>
          ) : (
            ""
          )}
          {noOfBathrooms > 0 ? (
            <Item>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  color: "#9ca3af",
                  margin: "1.5rem 0",
                }}
              >
                {noOfBathrooms} bathroom/Bathrooms to be cleaned
              </Typography>
            </Item>
          ) : (
            ""
          )}
          {noOfLivingrooms > 0 ? (
            <Item>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  color: "#9ca3af",
                  margin: "1.5rem 0",
                }}
              >
                {noOfLivingrooms} LivingRoom/LivingRooms to be cleaned
              </Typography>
            </Item>
          ) : (
            ""
          )}
          {noOfKitchens > 0 ? (
            <Item>
              <Typography
                variant="body2"
                sx={{
                  fontSize: "1.6rem",
                  color: "#9ca3af",
                  margin: "1.5rem 0",
                }}
              >
                {noOfKitchens} Kitchen/Kitchens to be cleaned
              </Typography>
            </Item>
          ) : (
            ""
          )}

          <Item>
            <Typography
              variant="body2"
              sx={{ fontSize: "1.6rem", color: "#9ca3af", margin: "1.5rem 0" }}
            >
              Date and Time
            </Typography>
            <Typography variant="body2" sx={{ fontSize: "1.6rem" }}>
              {dateAndTime}
            </Typography>
          </Item>

          <Item>
            <Typography
              varaint="body2"
              sx={{
                fontSize: "1.6rem",
                color: "#9ca3af",
                margin: "1.5rem 0 0 0",
              }}
            >
              Total Amount:
            </Typography>
            <Typography
              variant="body2"
              sx={{ fontSize: "1.6rem", marginBottom: "2rem" }}
            >
              ${totalAmount}
            </Typography>
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
            onClick={() => handleBool2()}
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
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Review;
