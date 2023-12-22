import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Item from "@mui/material/Grid";
import Box from "@mui/material/Box";
import upArrow from "../../images/Up-arrow.svg";
import downArrow from "../../images/Down-arrow.svg";
import { Button, Typography } from "@mui/material";
import "./FAQ.css";

function FAQ() {
  const [arrowBool1, setArrowBool1] = useState(false);
  const [arrowBool2, setArrowBool2] = useState(false);
  const [arrowBool3, setArrowBool3] = useState(false);
  const [arrowBool4, setArrowBool4] = useState(false);
  const [arrowBool5, setArrowBool5] = useState(false);

  const handleButton = () => {
    setArrowBool1(!arrowBool1);
  };

  const handleButton2 = () => {
    setArrowBool2(!arrowBool2);
  };

  const handleButton3 = () => {
    setArrowBool3(!arrowBool3);
  };

  const handleButton4 = () => {
    setArrowBool4(!arrowBool4);
  };

  const handleButton5 = () => {
    setArrowBool5(!arrowBool5);
  };

  return (
    <Grid
      display="flex"
      flexDirection="column"
      alignItems="center"
      sx={{ width: "55%", margin: "0 auto auto auto" }}
    >
      <Typography
        item
        variant="h1"
        sx={{
          fontSize: { xs: "3rem", sm: "4rem" },
          textAlign: "center",
          marginTop: "6rem",
          marginBottom: "2rem",
        }}
      >
        Frequently Asked Questions (F.A.Q)
      </Typography>
      <Grid
        item
        xs={12}
        sx={{
          width: { xs: "32rem", sm: "50rem", md: "75rem" },
          borderRadius: "1rem",
          marginBottom: "5rem",
        }}
      >
        <Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              item
              variant="body1"
              sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                padding: "1.5rem 0",
              }}
            >
              How often should i schedule a house cleaning?
            </Typography>
            <Button
              item
              type="icon"
              onClick={handleButton}
              sx={{ marginRight: { xs: "2rem", sm: "3rem" } }}
            >
              <Box
                component="img"
                alt="Arrow 1"
                src={arrowBool1 === false ? downArrow : upArrow}
                sx={{
                  height: "4rem",
                  width: "4.1rem",
                }}
              />
            </Button>
          </Item>
          {arrowBool1 && (
            <Item>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  padding: "2rem 3rem",

                  border: "1px solid #E5E7EB",
                }}
              >
                It depends on your personal preferences and needs. Some people
                prefer weekly cleanings, while others prefer biweekly or monthly
                cleanings. It's important to consider factors such as the size
                of your home, the number of people living there, and your
                personal standards for cleanliness.
              </Typography>
            </Item>
          )}
        </Item>
        <Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                padding: "1.5rem 0",
              }}
            >
              What tasks are included in a typical house cleaning service?
            </Typography>
            <Button
              item
              type="icon"
              onClick={handleButton2}
              sx={{ marginRight: { xs: "2rem", sm: "3rem" } }}
            >
              <Box
                component="img"
                alt="Arrow 2"
                src={arrowBool2 === false ? downArrow : upArrow}
                sx={{
                  height: "4rem",
                  width: "4.1rem",
                }}
              />
            </Button>
          </Item>
          {arrowBool2 && (
            <Item>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  padding: "2rem 3rem",
                  border: "1px solid #E5E7EB",
                }}
              >
                A typical house cleaning service includes tasks such as dusting,
                vacuuming, mopping, scrubbing surfaces, and cleaning bathrooms
                and kitchens. Some services may also include laundry and
                ironing, or special tasks like organizing or deep cleaning.
              </Typography>
            </Item>
          )}
        </Item>
        <Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                padding: "1.5rem 0",
              }}
            >
              Do i need to provide cleaning supplies and equipment?
            </Typography>
            <Button
              item
              type="icon"
              onClick={handleButton3}
              sx={{ marginRight: { xs: "2rem", sm: "3rem" } }}
            >
              <Box
                component="img"
                alt="Arrow 3"
                src={arrowBool3 === false ? downArrow : upArrow}
                sx={{
                  height: "4rem",
                  width: "4.1rem",
                }}
              />
            </Button>
          </Item>
          {arrowBool3 && (
            <Item>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  padding: "2rem 3rem",
                  border: "1px solid #E5E7EB",
                }}
              >
                It depends on the service you choose. We provide their own
                supplies and equipment, while others may ask you to provide
                certain items. It's important to clarify this with the cleaning
                company before booking a service.
              </Typography>
            </Item>
          )}
        </Item>
        <Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                padding: "1.5rem 0",
              }}
            >
              Can i customise the cleaning tasks for my home?
            </Typography>
            <Button
              item
              type="icon"
              onClick={handleButton4}
              sx={{ marginRight: { xs: "2rem", sm: "3rem" } }}
            >
              <Box
                component="img"
                alt="Arrow 4"
                src={arrowBool4 === false ? downArrow : upArrow}
                sx={{
                  height: "4rem",
                  width: "4.1rem",
                }}
              />
            </Button>
          </Item>
          {arrowBool4 && (
            <Item>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  padding: "2rem 3rem",
                  border: "1px solid #E5E7EB",
                }}
              >
                Yes, we will allow you to customise the cleaning tasks for your
                home. It's a good idea to discuss your specific needs and
                preferences with the cleaning company before booking a service.
              </Typography>
            </Item>
          )}
        </Item>
        <Item>
          <Item
            sx={{
              display: "flex",
              flexDirection: "row",
              backgroundColor: "#f3f4f6",
              justifyContent: "space-between",
              alignItems: "center",
              border: "1px solid #e5e7eb",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: "2rem",
                marginLeft: "3rem",
                padding: "1.5rem 0",
              }}
            >
              How do i pay for a house cleaning service?
            </Typography>
            <Button
              item
              type="icon"
              onClick={handleButton5}
              sx={{ marginRight: { xs: "2rem", sm: "3rem" } }}
            >
              <Box
                component="img"
                alt="Arrow 5"
                src={arrowBool5 === false ? downArrow : upArrow}
                sx={{
                  height: "4rem",
                  width: "4.1rem",
                }}
              />
            </Button>
          </Item>
          {arrowBool5 && (
            <Item>
              <Typography
                variant="body1"
                sx={{
                  fontSize: "2rem",
                  padding: "2rem 3rem",
                  border: "1px solid #E5E7EB",
                }}
              >
                We offer online payment options such as PayPal or Venmo. You
                will be quoted for a price before the house cleaning service
                begins and billed after it is done.
              </Typography>
            </Item>
          )}
        </Item>
      </Grid>
    </Grid>
  );
}

export default FAQ;
