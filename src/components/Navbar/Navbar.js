import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Item from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Link } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const drawerWidth = 240;
const navItems = ["Book Now", "Home", "FAQ", "About Us"];

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h3" sx={{ my: 2, fontSize: "3rem" }}>
        CLEANING WITH LOVE TEST
      </Typography>
      <Divider />
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Stack
          direction="column"
          spacing={2}
          sx={{
            margin: "0 auto",
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
      </Box>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", backgroundColor: "#fff" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ backgroundColor: "#fff", color: "#000", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h3"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
            }}
          >
            CLEANING WITH LOVE TEST1
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
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
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
