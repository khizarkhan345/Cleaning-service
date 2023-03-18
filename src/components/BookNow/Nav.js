import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function Nav() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link underline="hover" color="inherit" href="/booknow/cleaningInfo">
        Cleaning Information
      </Link>
      <Link underline="hover" color="inherit" href="/booknow/cleaningInfo">
        Personal Information
      </Link>
      <Link underline="hover" color="inherit" href="/booknow/cleaningInfo">
        Review
      </Link>
    </Breadcrumbs>
  );
}

export default Nav;
