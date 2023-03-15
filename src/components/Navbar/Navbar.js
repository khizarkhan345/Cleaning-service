import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import { Link } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const drawerWidth = 240;
const navItems = ["Home", "Book Now", "FAQ", "About Us"];

function Navbar(props) {
  return (
    <AppBar
      position="static"
      sx={{
        background: "#ffffff",
        color: "#000",
        border: "none",
        width: "85%",
        boxShadow: "none",
        margin: "auto",
      }}
    >
      <Toolbar>
        <Typography variant="h5" component="div">
          CLEANING WITH LOVE
        </Typography>
        <Stack
          direction="row"
          spacing={12}
          sx={{
            marginLeft: "auto",
            "& .MuiLink-root": {
              fontSize: "1.8rem",
              fontWeight: 300,
              lineHeight: "3.15rem",
            },
          }}
        >
          <Link color="inherit" underline="none" href="/booknow">
            Book Now
          </Link>
          <Link color="inherit" underline="none" href="/">
            Home
          </Link>
          <Link color="inherit" underline="none" href="/faq">
            FAQs
          </Link>
          <Link color="inherit" underline="none" href="/aboutus">
            About Us
          </Link>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
